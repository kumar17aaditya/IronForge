/**
 * Asset validation — run via `npm run check-assets`.
 *
 * Reads the single source of truth (data/media.ts) and verifies every
 * required image actually exists on disk under /public. There is no
 * fallback/placeholder system in this project by design: a missing file
 * must be reported explicitly, not silently rendered as a fake image.
 *
 * Wired into `predev` and `prebuild` so this runs automatically before
 * the dev server starts or a production build runs.
 */
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { allMediaAssets } from "../data/media";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

function main() {
  const missing: string[] = [];
  const present: string[] = [];

  for (const asset of allMediaAssets) {
    // asset.src is a public-relative URL path, e.g. "/media/hero/hero.jpg"
    const diskPath = join(PUBLIC_DIR, asset.src);
    if (existsSync(diskPath)) {
      present.push(asset.src);
    } else {
      missing.push(asset.src);
    }
  }

  console.log(
    `\nAsset check: ${present.length}/${allMediaAssets.length} required images present.\n`,
  );

  if (missing.length === 0) {
    console.log("✓ All required media assets are present.\n");
    return;
  }

  console.error(`✗ ${missing.length} required asset(s) missing:\n`);
  for (const src of missing) {
    console.error(`  MISSING ASSET: ${src.replace(/^\//, "")}`);
  }
  console.error(
    "\nAdd the file(s) above under /public (exact path, exact filename) — no code changes are needed once the file exists.\n",
  );
  process.exitCode = 1;
}

main();

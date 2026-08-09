"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import type { EnquiryFormData, InterestOption } from "@/types";

const INTEREST_OPTIONS: { value: InterestOption; label: string }[] = [
  { value: "membership", label: "Membership" },
  { value: "personal-training", label: "Personal Training" },
  { value: "free-trial", label: "Free Trial" },
];

type Errors = Partial<Record<"name" | "phone" | "interest", string>>;

const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<InterestOption | "">("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!phone.trim()) {
      next.phone = "Enter your phone number.";
    } else if (!PHONE_PATTERN.test(phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!interest) next.interest = "Choose what you're interested in.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0 || !interest) return;

    const data: EnquiryFormData = {
      name: name.trim(),
      phone: phone.trim(),
      interest,
      message: message.trim() || undefined,
    };

    setStatus("opening");
    const link = getWhatsAppLink(data);
    window.open(link, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus("idle"), 2500);
  }

  const inputClasses =
    "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base placeholder:text-muted transition-colors";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClasses}
          placeholder="Enter your phone number"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-xs text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-3">
          I&rsquo;m interested in
        </legend>
        <div className="flex flex-wrap gap-3">
          {INTEREST_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer px-4 py-2.5 border text-sm font-medium transition-colors ${
                interest === opt.value
                  ? "border-accent text-accent"
                  : "border-border text-foreground/80 hover:border-foreground/50"
              }`}
            >
              <input
                type="radio"
                name="interest"
                value={opt.value}
                checked={interest === opt.value}
                onChange={() => setInterest(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.interest && (
          <p className="mt-2 text-xs text-red-400">{errors.interest}</p>
        )}
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Anything specific you want to ask?"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="mt-2 w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
        disabled={status === "opening"}
        aria-busy={status === "opening"}
      >
        <MessageCircle size={16} />
        {status === "opening" ? "Opening WhatsApp…" : "Start a Conversation"}
      </Button>
      {status === "opening" && (
        <p role="status" className="text-sm text-muted -mt-3">
          Opening WhatsApp with your enquiry…
        </p>
      )}
    </form>
  );
}

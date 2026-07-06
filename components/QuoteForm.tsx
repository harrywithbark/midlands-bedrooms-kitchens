"use client";

import { FormEvent } from "react";
import { whatsappUrl } from "@/lib/gallery-data";

export function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const lines = [
      "Hi, I'd like a quote.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      project ? `Project type: ${project}` : null,
      `Details: ${details}`,
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form id="quoteForm" noValidate onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="qf-name">
        Your name
      </label>
      <input
        id="qf-name"
        name="name"
        type="text"
        placeholder="Your name"
        autoComplete="name"
        required
      />

      <label className="visually-hidden" htmlFor="qf-phone">
        Phone or WhatsApp
      </label>
      <input
        id="qf-phone"
        name="phone"
        type="tel"
        placeholder="Phone or WhatsApp"
        autoComplete="tel"
        required
      />

      <label className="visually-hidden" htmlFor="qf-project">
        Project type
      </label>
      <select id="qf-project" name="project" defaultValue="">
        <option value="">Project type</option>
        <option>Wardrobe</option>
        <option>Kitchen</option>
        <option>Bespoke storage</option>
        <option>Other</option>
      </select>

      <label className="visually-hidden" htmlFor="qf-details">
        Tell us about your project
      </label>
      <textarea
        id="qf-details"
        name="details"
        rows={4}
        placeholder="Tell us about your project"
        required
      />

      <button type="submit">Send via WhatsApp</button>
      <p id="qf-note" style={{ fontSize: "12px", marginTop: "-4px" }}>
        Opens WhatsApp with your details filled in — nothing is sent until you
        press send there.
      </p>
    </form>
  );
}

"use client";

import { useFormStatus } from "react-dom";
import { createShortURL } from "@/app/actions";

export default function CreateLinkPage() {
  const { pending } = useFormStatus();

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>URL Kısaltıcı</h1>
      <form action={createShortURL}>
        <input
          name="longUrl"
          type="url"
          placeholder="Uzun URL girin"
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <button type="submit" disabled={pending}>
          {pending ? "İşleniyor..." : "Kısalt"}
        </button>
      </form>
    </div>
  );
}

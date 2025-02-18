"use client";

import { useFormStatus } from "react-dom";
import { createShortURL } from "@/app/actions";

export default function CreateLinkPage() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">URL Shortener</h1>
      <form action={createShortURL} className="space-y-4">
        <input
          name="longUrl"
          type="url"
          placeholder="Enter your long URL"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          {pending ? "Processing..." : "Shorten"}
        </button>
      </form>
    </div>
  );
}

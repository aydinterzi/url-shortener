"use server";

import { connectToDB } from "@/lib/db";
import { redirect } from "next/navigation";

function generateRandomCode(length = 6) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function createShortURL(formData) {
  const longUrl = formData.get("longUrl");
  if (!longUrl) {
    throw new Error("URL gereklidir");
  }

  const shortCode = generateRandomCode();
  const db = await connectToDB();
  await db
    .collection("urls")
    .insertOne({ longUrl, shortCode, createdAt: new Date() });

  redirect(`/result?code=${shortCode}`);
}

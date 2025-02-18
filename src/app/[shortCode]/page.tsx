import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/db";

export default async function RedirectPage({
  params,
}: {
  params: { shortCode: string };
}) {
  const { shortCode } = params;
  const db = await connectToDB();
  const urlEntry = await db.collection("urls").findOne({ shortCode });

  if (!urlEntry) {
    return (
      <div className="max-w-xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">URL Not Found!</h1>
        <p className="text-gray-600">
          The shortened URL you entered is not registered in our system.
        </p>
      </div>
    );
  }

  redirect(urlEntry.longUrl);
}

import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/db";

export default async function RedirectPage({ params }) {
  const { shortCode } = params;
  const db = await connectToDB();
  const urlEntry = await db.collection("urls").findOne({ shortCode });

  if (!urlEntry) {
    return (
      <div>
        <h1>URL Bulunamadı!</h1>
        <p>Girdiğiniz kısaltılmış URL sistemde kayıtlı değil.</p>
      </div>
    );
  }

  redirect(urlEntry.longUrl);
}

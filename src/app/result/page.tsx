export default function ResultPage({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  const code = searchParams.code;
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const fullUrl = `${domain}/${code}`;

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>URL Kısaltıldı!</h1>
      <p>Kısaltılmış URL:</p>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.2rem", color: "blue" }}
      >
        {fullUrl}
      </a>
    </div>
  );
}

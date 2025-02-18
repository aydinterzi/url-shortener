export default function ResultPage({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  const code = searchParams.code;
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const fullUrl = `${domain}/${code}`;

  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">URL Shortened!</h1>
      <p className="mb-4">Your shortened URL is:</p>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-blue-500 hover:underline"
      >
        {fullUrl}
      </a>
    </div>
  );
}

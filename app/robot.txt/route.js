import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "http://localhost:3000";
  const baseUrlFrontend = process.env.NEXT_PUBLIC_FRONTEND_URL;

//   process.env.NEXT_PUBLIC_API_URL || 

  return new NextResponse(
    `User-agent: *
     Allow: /,
     disAllow:/,
    Sitemap: ${baseUrlFrontend}/sitemap.xml
    `,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host") || "";

  // Normalize hostname to handle localhost properly
  const hostnameWithoutPort = hostname.split(":")[0];

  console.log(`Middleware: Processing ${hostname} (Path: ${url.pathname})`);

  let subdomain = null;

  // 1. Check for localhost subdomains (e.g., artist.localhost:3000)
  if (hostname.includes("localhost")) {
    const parts = hostname.split(".");
    // If parts > 1, the first part is potentially a subdomain
    // e.g. "artist.localhost:3000" -> ["artist", "localhost:3000"]
    // BUT "localhost:3000" -> ["localhost:3000"] (len 1)
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }
  // 2. Check for Production subdomains
  else {
    const parts = hostname.split(".");
    // e.g. "artist.impact-portal.com" -> ["artist", "impact-portal", "com"] (len 3)
    // "impact-portal.com" -> ["impact-portal", "com"] (len 2)
    // "www.impact-portal.com" -> ["www", "impact-portal", "com"] (len 3) -> "www" is subdomain? We handle "www" specifically.

    if (parts.length > 2) {
      const possibleSubdomain = parts[0];
      if (possibleSubdomain !== "www") {
        subdomain = possibleSubdomain;
      }
    }
  }

  // 3. Routing Logic
  if (subdomain) {
    console.log(`Middleware: Routing to Influencer Page (Subdomain: ${subdomain})`);
    return NextResponse.rewrite(
      new URL(`/(influencer)/${subdomain}${url.pathname}`, req.url)
    );
  } else {
    console.log("Middleware: Routing to Agency Home");
    return NextResponse.rewrite(new URL(`${url.pathname}`, req.url));
  }
}

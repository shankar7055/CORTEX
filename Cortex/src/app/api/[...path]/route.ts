import type { NextRequest } from "next/server";

const BASE = process.env.BACKEND_BASE_URL || "http://127.0.0.1:5000";

export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  const url = new URL(req.url);
  const search = url.searchParams.toString();
  const target = `${BASE}/api/${params.path.join("/")}${search ? `?${search}` : ""}`;
  const res = await fetch(target, { method: "GET" });
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") || "application/json", "Cache-Control": "no-store" },
  });
}

export async function POST(req: NextRequest, { params }: { params: { path: string[] } }) {
  const target = `${BASE}/api/${params.path.join("/")}`;
  const res = await fetch(target, {
    method: "POST",
    headers: { "content-type": req.headers.get("content-type") || "application/json" },
    body: await req.text(),
  });
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") || "application/json", "Cache-Control": "no-store" },
  });
}
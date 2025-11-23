import type { NextRequest } from "next/server";

const BASE = process.env.BACKEND_BASE_URL || "http://127.0.0.1:5000";

export async function POST(req: NextRequest) {
  const res = await fetch(`${BASE}/ai/chatbot`, {
    method: "POST",
    headers: { "content-type": req.headers.get("content-type") || "application/json" },
    body: await req.text(),
  });
  const body = await res.text();
  return new Response(body, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") || "application/json" },
  });
}
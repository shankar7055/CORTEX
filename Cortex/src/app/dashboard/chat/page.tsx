"use client";

import React from "react";

export default function ChatPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Chat Assistant</h3>
      <div className="rounded-md border border-border-subtle p-4 h-96 flex flex-col">
        <div className="flex-1 overflow-auto">
          <div className="text-label">[Assistant] Attach P&L to discuss margins</div>
        </div>
        <div className="mt-3 flex gap-2">
          <input className="flex-1 rounded-md border border-border-subtle px-3 py-2 bg-background" placeholder="Type a message" />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </section>
  );
}


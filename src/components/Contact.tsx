"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 bg-zinc-900 text-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let&apos;s build something great together
            </h2>
            <p className="text-zinc-400 mb-8">
              Whether you&apos;re a founder with a bold vision or an investor looking to explore partnership opportunities, we&apos;d love to hear from you.
            </p>
            <div className="space-y-4 text-zinc-400">
              <p>
                <span className="text-zinc-50 font-medium">Email:</span> highbeamcapital@gmail.com
              </p>
              <p>
                <span className="text-zinc-50 font-medium">Location:</span> Los Angeles, CA
              </p>
            </div>
          </div>
          <div>
            {status === "success" ? (
              <div className="bg-zinc-800 rounded-2xl p-8 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium mb-2">Message sent</h3>
                <p className="text-zinc-400">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "loading"}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "loading"}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    disabled={status === "loading"}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-4 bg-zinc-50 text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
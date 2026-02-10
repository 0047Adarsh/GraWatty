"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Let’s talk</h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Want to work with Grawatty or know more about our gravity-powered
            energy solutions? Drop us a message.
          </p>
        </div>

        {/* Form */}
        {!sent ? (
          <form
            action="https://formspree.io/f/abcdwxyz" // 🔁 replace this
            method="POST"
            onSubmit={() => setSent(true)}
            className="bg-white p-8 rounded-2xl shadow space-y-4 text-black border border-black-300"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border rounded px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border rounded px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              required
              className="w-full border rounded px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold">Thank you!</h3>
            <p className="mt-2 text-gray-600">
              We’ll get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

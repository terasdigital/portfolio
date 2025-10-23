"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { sendWhatsAppNotification } from "@/utils/sendWhtasApp";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("contacts").insert([{ email }]);

    if (error) {
      setMessage("Gagal menyimpan email, coba lagi.");
    } else {
      // kirim ke WA
      await sendWhatsAppNotification(email);
      setMessage("Thank you! We will contact you soon.");
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <section>
      <div className="text-center pt-20 sm:pt-25 sm:w-[70%] mx-auto flex grow">
        <div className="bg-[#E79FB9] rounded-lg p-10 ]">
          <h2 className="font-semibold text-2xl sm:text-4xl pb-5">
            Let's Build Something Great Together
          </h2>
          <p>
            Got project in mind or need a modern website for your business?{" "}
            <br />
            I'm open to collaboration and freelance work - let's make your idea
            real.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 gap-3 flex max-md:flex-col justify-center pb-5"
          >
            <input
              type="email"
              required
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#f5f5f5] p-2 rounded-md md:w-3/8 w-full text-center"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#C93F53] text-[#f5f5f5] px-4 py-2 rounded-md hover:bg-[#7B1E22] font-bold"
            >
              {loading ? "Sending..." : "Get in Touch"}
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  );
}

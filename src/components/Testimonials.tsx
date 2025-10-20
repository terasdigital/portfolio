"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  avatar_url: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("testimonials").select("*");
      if (error) console.error(error);
      else setTestimonials(data || []);
    }
    fetchData();
  }, []);

  return (
    <section>
      <h2 className="pt-20 sm:pt-25 pb-5 text-2xl sm:text-4xl font-bold text-center">
        Testimonials
      </h2>
      <p className="text-center">
        The best results aren't just seen - they're felt. Here's what people
        who've worked with me have to say.
      </p>
      <div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div>
                {/* Avatar */}
                <img src={t.avatar_url} alt={t.name} />
                {/* Feedback */}
                <div>
                  <p>
                    <span>"</span>
                    {t.feedback}
                    <span>"</span>
                  </p>
                  <div>
                    <p>{t.name}</p>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

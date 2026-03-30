"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const days = [
  { num: "29", disabled: true }, { num: "30", disabled: true },
  ...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(n => ({ num: String(n), disabled: false })),
];

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState("11");
  const [selectedTime, setSelectedTime] = useState("01:00 PM");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      {confirmed && (
        <div className="fixed inset-0 z-[100] bg-surface flex items-center justify-center px-6">
          <div className="max-w-xl text-center space-y-8">
            <div className="w-20 h-20 bg-primary-fixed text-primary flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">check</span>
            </div>
            <h2 className="text-5xl font-headline tracking-tight">Confirmed.</h2>
            <p className="text-lg text-secondary leading-relaxed">
              Your strategy session is secured for{" "}
              <span className="text-on-surface font-semibold">
                October {selectedDay} at {selectedTime}
              </span>
              . We look forward to exploring the narrative of your space.
            </p>
            <div className="pt-8">
              <button
                onClick={() => setConfirmed(false)}
                className="text-[0.75rem] font-label uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-primary-dim transition-colors"
              >
                Return to Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-24 grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <span className="text-[0.75rem] font-label uppercase tracking-[0.2em] text-tertiary mb-6 block">
            The Initial Dialogue
          </span>
          <h1 className="text-5xl md:text-7xl font-headline italic tracking-tight leading-[1.1] text-on-surface mb-8">
            Your vision, articulated <br />
            through <span className="not-italic">strategic precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
            Schedule a complimentary 45-minute strategy session to explore your
            architectural goals, site potential, and the monograph approach to
            design excellence.
          </p>
        </div>
        <div className="md:col-span-5 aspect-[4/5] bg-surface-container-low overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoHjIP8d0k0mILq6sfu27tq199h4blY3L1uv7JDoqDUZSMFvA18Y1Jwp3ZL-w3DxctrmRXfRgwZCOtLz20uar4dAGCVIYnHA6UoADnqsxfD-VgBtsE0sDlOI9bPPTRadHtlsFY3lcz9MsVPHz4OSOSiUD8n6UXh3PEvfpd5hZ2Z8WGC-2_9TCDMqDN_ji63UC3DWdsJvUC3Ip590oTOQ-O5zX5-k6Eo3PTr7r7KkTl6s1dYeONzKoYEj1JrKXuz-Ft-Tdqzu3gA4lA"
            alt="Minimalist architectural interior"
            width={600}
            height={750}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </section>

      {/* ── Booking Interface ─────────────────────────────── */}
      <section className="bg-surface-container-low py-32 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Calendar */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-headline text-on-surface mb-4">Select a Date</h2>
              <div className="w-16 h-px bg-tertiary opacity-30" />
            </div>
            <div className="bg-surface-container-lowest p-8 shadow-[20px_20px_60px_rgba(56,56,49,0.05)] border border-outline-variant/10">
              <div className="flex justify-between items-center mb-8">
                <span className="font-headline text-xl">October 2024</span>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 mb-4">
                {weekdays.map((d) => (
                  <div key={d} className="text-[0.7rem] font-label uppercase text-outline py-2 text-center">{d}</div>
                ))}
                {days.map((d, i) => (
                  d.disabled ? (
                    <div key={i} className="py-4 text-center text-outline/30">{d.num}</div>
                  ) : (
                    <button
                      key={i}
                      onClick={() => setSelectedDay(d.num)}
                      className={`py-4 text-center transition-colors font-medium text-sm ${
                        selectedDay === d.num
                          ? "bg-primary text-on-primary"
                          : "hover:bg-primary-fixed"
                      }`}
                    >
                      {d.num}
                    </button>
                  )
                ))}
              </div>
            </div>
            {/* Time Slots */}
            <div className="pt-8">
              <h3 className="text-[0.75rem] font-label uppercase tracking-[0.1em] text-secondary mb-6">
                Available Times for Oct {selectedDay}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-4 text-sm transition-all ${
                      selectedTime === t
                        ? "bg-primary text-on-primary"
                        : "border border-outline-variant/30 hover:border-primary text-on-surface"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-headline text-on-surface mb-4">Meeting Context</h2>
              <div className="w-16 h-px bg-tertiary opacity-30" />
            </div>
            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-[0.7rem] font-label uppercase tracking-widest text-outline mb-2 block">Full Name</label>
                  <input type="text" placeholder="Evelyn Thorne" className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:ring-0 focus:outline-none py-3 transition-colors text-lg placeholder:text-outline/30" />
                </div>
                <div>
                  <label className="text-[0.7rem] font-label uppercase tracking-widest text-outline mb-2 block">Email Address</label>
                  <input type="email" placeholder="e.thorne@domain.com" className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:ring-0 focus:outline-none py-3 transition-colors text-lg placeholder:text-outline/30" />
                </div>
              </div>
              <div>
                <label className="text-[0.7rem] font-label uppercase tracking-widest text-outline mb-2 block">Project Goals</label>
                <input type="text" placeholder="Sustainable residential expansion in Cotswolds..." className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:ring-0 focus:outline-none py-3 transition-colors text-lg placeholder:text-outline/30" />
              </div>
              <div>
                <label className="text-[0.7rem] font-label uppercase tracking-widest text-outline mb-2 block">Biggest Challenge</label>
                <textarea placeholder="Navigating heritage planning permissions and material sourcing." rows={3} className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:ring-0 focus:outline-none py-3 transition-colors text-lg placeholder:text-outline/30 resize-none" />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-6 font-label uppercase tracking-[0.2em] hover:bg-primary-dim transition-all duration-300"
              >
                Confirm Appointment
              </button>
            </form>
            <div className="bg-surface-container-high/50 p-8 border-l-4 border-tertiary">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-tertiary flex-shrink-0">info</span>
                <div className="text-sm text-secondary leading-relaxed">
                  <span className="font-bold block mb-1">What to expect next:</span>
                  A calendar invitation with a secure video link will be sent to
                  your email immediately upon confirmation. Our principal will
                  review your project brief prior to the call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

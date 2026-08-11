"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Truck } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { StatCard } from "@/components/ui/StatCard";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { selectedHeadline } from "@/content/hero-copy";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Video takes priority over a static image (Ken-Burns pan/zoom is only
 * applied to the image path, since video already carries its own motion).
 * Falls back to a labeled gradient placeholder when neither is supplied.
 */
function HeroBackground({ videoSrc, imageSrc }: { videoSrc?: string; imageSrc?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [reduceMotion]);

  if (videoSrc) {
    return (
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster="/hero-poster.jpg"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="auto"
      />
    );
  }

  if (imageSrc) {
    return (
      <div
        className="hero-pan-zoom absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    );
  }

  return (
    <div className="hero-pan-zoom absolute inset-0 h-full w-full bg-[linear-gradient(120deg,#0F172A_0%,#0067FF_55%,#070614_100%)]">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
          Hero photo placeholder — swap in wide panoramic image (2400px+ wide)
        </span>
      </div>
    </div>
  );
}

export function Hero({
  heroImageSrc,
  heroVideoSrc = "/hero-video.mp4",
}: {
  heroImageSrc?: string;
  heroVideoSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-950">
      <div className="relative h-[560px] w-full overflow-hidden sm:h-[640px] lg:h-[720px]">
        <HeroBackground videoSrc={heroVideoSrc} imageSrc={heroImageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/30 to-brand-navy-950/10" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:justify-center lg:px-8 lg:pb-0"
        >
          <motion.div variants={item} className="mb-4 w-fit lg:mb-6">
            <span className="flex items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <Truck size={14} /> Logistics &amp; Heavy Equipment Hire
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {selectedHeadline.headline}
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">
            {selectedHeadline.subtext}
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <PillButton href="/contact" variant="primary">
              Get a Quote
            </PillButton>
          </motion.div>

          {/* Mobile trust line — flows at the bottom, no overlay */}
          <motion.div variants={item} className="mt-8 lg:hidden">
            <TrustBadge line="Trusted logistics partner" />
          </motion.div>
        </motion.div>

        {/* Desktop floating overlay cards */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="absolute bottom-8 right-6 z-10 hidden lg:block xl:right-10"
        >
          <StatCard value="XX+" label="Tons delivered" icon={Truck} placeholder />
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="absolute right-6 top-28 z-10 hidden lg:block xl:right-10"
        >
          <TrustBadge line="Trusted logistics partner" />
        </motion.div>
      </div>
    </section>
  );
}

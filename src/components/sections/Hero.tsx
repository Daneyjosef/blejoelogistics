"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Truck } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { StatCard } from "@/components/ui/StatCard";
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
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As the hero scrolls off, the video shrinks inward and its corners round off.
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const rawRadius = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scale = reduceMotion ? 1 : rawScale;
  const borderRadius = reduceMotion ? 0 : rawRadius;

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-brand-navy-950">
      <motion.div
        style={{ scale, borderRadius }}
        className="absolute inset-0 h-full w-full origin-center overflow-hidden will-change-transform"
      >
        <HeroBackground videoSrc={heroVideoSrc} imageSrc={heroImageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/30 to-brand-navy-950/10" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 sm:px-6 lg:justify-center lg:px-8 lg:pb-0"
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
      </motion.div>

      {/* Desktop floating stat card */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 right-6 z-10 hidden lg:block xl:right-10"
      >
        <StatCard value="XX+" label="Tons delivered" icon={Truck} placeholder />
      </motion.div>
    </section>
  );
}

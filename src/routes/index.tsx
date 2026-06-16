import { createFileRoute } from "@tanstack/react-router";
import type { Variants } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Camera,
  Sparkles,
  Briefcase,
  Megaphone,
  Music,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Clock,
  Star,
  Building2,
  Users,
  Award,
  Compass,
} from "lucide-react";

import heroImg from "@/assets/sarvam-hero.jpg";
import aboutImg from "@/assets/sarvam-about.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import locRoyal from "@/assets/loc-royal.jpg";
import locGarden from "@/assets/loc-garden.jpg";
import locTraditional from "@/assets/loc-traditional.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`relative px-6 md:px-12 lg:px-20 py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["Experiences", "#experiences"],
    ["Gallery", "#gallery"],
    ["Productions", "#productions"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide">Sarvam</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">The Venue</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group text-sm text-white/80 hover:text-white transition-colors relative"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-gold btn-gold-hover text-sm hidden md:inline-flex">
          Book A Shoot
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sarvam — luxury pre-wedding venue at golden hour"
          className="w-full h-[120%] object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/30 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="kicker mb-6"
          >
            Hyderabad · Est. Creative Destination
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] max-w-5xl"
          >
            Where Every Frame <em className="text-gold not-italic">Tells</em> A Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed"
          >
            Hyderabad's premier destination for pre-wedding, fashion, commercial
            and cinematic productions — designed for those who chase the
            extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#experiences" className="btn-gold btn-gold-hover">
              Explore Experiences <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost btn-ghost-hover">
              Book A Shoot
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs tracking-[0.25em] uppercase text-white/50"
          >
            {["Pre-Wedding", "Fashion", "Commercial", "Brand Campaigns", "Music Videos"].map(
              (t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold/60" />
                  {t}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* floating glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold-soft blur-3xl" />
    </section>
  );
}

function About() {
  return (
    <Section id="about" className="pt-32">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src={aboutImg}
            alt="Aerial view of Sarvam — the venue"
            className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            loading="lazy"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-line" />
          <div className="absolute -bottom-6 -right-6 hidden md:block glass-card px-6 py-5 rounded-sm">
            <div className="font-display text-3xl text-gold">5+</div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted mt-1">
              Years Of Excellence
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="kicker mb-5">The Sarvam Philosophy</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            More than a venue.
            <br />
            <span className="text-gold italic">A creative destination.</span>
          </h2>
          <div className="gold-divider my-8" />
          <p className="text-muted text-lg leading-relaxed">
            Sarvam is a premium creative destination designed for pre-wedding
            shoots, fashion productions, commercial campaigns and cinematic
            storytelling. Located near Shamshabad, Hyderabad, it offers diverse
            shooting environments crafted to elevate every visual experience.
          </p>
          <p className="text-muted text-lg leading-relaxed mt-5">
            From royal palace facades to intimate garden swings, from
            traditional courtyards to modern studios — every corner is a frame
            waiting to be discovered.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              ["50+", "Themes"],
              ["1000+", "Shoots"],
              ["100%", "Crafted"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-white">{n}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

const experiences = [
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    desc: "Romantic, cinematic stories captured across diverse luxury sets.",
    img: g1,
  },
  {
    icon: Sparkles,
    title: "Post-Wedding Shoots",
    desc: "Couple portraits that honour the chapter you've just written.",
    img: g3,
  },
  {
    icon: Camera,
    title: "Fashion Shoots",
    desc: "Editorial-grade environments built for designers and models.",
    img: g2,
  },
  {
    icon: Briefcase,
    title: "Commercial Productions",
    desc: "Product, lifestyle and advertising shoots with full crew access.",
    img: g4,
  },
  {
    icon: Megaphone,
    title: "Brand Campaigns",
    desc: "Curated backdrops for campaigns that demand a distinct identity.",
    img: g6,
  },
  {
    icon: Music,
    title: "Music Videos",
    desc: "Cinematic stages, lighting and scale for ambitious productions.",
    img: g5,
  },
];

function Experiences() {
  return (
    <Section id="experiences">
      <motion.div variants={fadeUp} className="max-w-3xl mb-16">
        <div className="kicker mb-5">Experiences</div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
          Crafted for every <span className="text-gold italic">vision</span>.
        </h2>
        <div className="gold-divider mt-6" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
        {experiences.map(({ icon: Icon, title, desc, img }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className="group relative bg-bg overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                <Icon size={18} className="text-gold group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-display text-2xl mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs">{desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                Discover <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const locations = [
  { title: "Royal Backdrops", img: locRoyal, desc: "Palatial arches, gilded columns." },
  { title: "Romantic Gardens", img: locGarden, desc: "String-lit florals and swings." },
  { title: "Traditional Settings", img: locTraditional, desc: "Temple courtyards and stone." },
];

function Locations() {
  return (
    <Section id="locations" className="bg-bg-card">
      <motion.div variants={fadeUp} className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div className="max-w-2xl">
          <div className="kicker mb-5">Signature Locations</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            Explore signature <span className="text-gold italic">experiences</span>.
          </h2>
        </div>
        <a href="#contact" className="text-sm tracking-[0.25em] uppercase text-gold inline-flex items-center gap-2 hover:gap-4 transition-all">
          View all <ArrowRight size={14} />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {locations.map((l) => (
          <motion.div key={l.title} variants={fadeUp} className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer">
            <img
              src={l.img}
              alt={l.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-line group-hover:ring-gold/50 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-3xl">{l.title}</h3>
              <p className="text-sm text-muted mt-2">{l.desc}</p>
              <div className="mt-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const masonry = [
  { src: g1, span: "row-span-2", alt: "Couple portrait" },
  { src: g3, span: "", alt: "Traditional wedding" },
  { src: g4, span: "", alt: "Product shoot" },
  { src: g2, span: "row-span-2", alt: "Fashion editorial" },
  { src: g5, span: "", alt: "Music video" },
  { src: g6, span: "", alt: "Lifestyle" },
];

function Gallery() {
  return (
    <Section id="gallery">
      <motion.div variants={fadeUp} className="max-w-3xl mb-16">
        <div className="kicker mb-5">Featured Gallery</div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
          Stories captured <span className="text-gold italic">in light</span>.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(4,260px)] gap-4">
        {masonry.map((m, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-sm ${m.span}`}
          >
            <img
              src={m.src}
              alt={m.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">{m.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const features = [
  { icon: Sparkles, title: "Multiple Creative Concepts", desc: "Over 50 themed sets across the property." },
  { icon: Building2, title: "Professional Facilities", desc: "Production-grade infrastructure end to end." },
  { icon: Users, title: "Dedicated Changing Rooms", desc: "Private suites for couples, models and crew." },
  { icon: Compass, title: "Spacious Environment", desc: "Acres of curated grounds for full freedom." },
  { icon: MapPin, title: "Easy Accessibility", desc: "Minutes from Shamshabad airport exit." },
  { icon: Award, title: "Production Friendly", desc: "Built around photographers and filmmakers." },
];

function WhyChoose() {
  return (
    <Section id="why" className="bg-bg-card">
      <motion.div variants={fadeUp} className="max-w-3xl mb-16">
        <div className="kicker mb-5">Why Creators Choose Sarvam</div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
          The destination for <span className="text-gold italic">creative excellence</span>.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="glass-card p-8 rounded-sm group transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
          >
            <Icon size={26} className="text-gold mb-6 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="font-display text-xl mb-3">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl text-gold">
      {n}
      {suffix}
    </div>
  );
}

function Stats() {
  const stats = [
    { n: 50, s: "+", l: "Creative Themes" },
    { n: 1000, s: "+", l: "Successful Shoots" },
    { n: 5, s: "+", l: "Years Of Experience" },
    { n: 100, s: "%", l: "Creative Excellence" },
  ];
  return (
    <Section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-y border-line py-20">
        {stats.map((s) => (
          <motion.div key={s.l} variants={fadeUp} className="text-center">
            <Counter to={s.n} suffix={s.s} />
            <div className="text-xs tracking-[0.3em] uppercase text-muted mt-4">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ForCreators() {
  return (
    <Section id="productions">
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-sm border border-line p-10 md:p-20 bg-bg-card"
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold-soft blur-3xl pointer-events-none" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="kicker mb-5">For Creators</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Built for <span className="text-gold italic">creators</span>.
            </h2>
            <p className="text-muted text-lg leading-relaxed mt-8 max-w-xl">
              Whether you're a photographer, filmmaker, fashion brand, influencer
              or production team, Sarvam provides versatile environments
              designed for creative excellence — at the scale your vision
              demands.
            </p>
            <a href="#contact" className="btn-gold btn-gold-hover mt-10">
              Plan A Production <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Photographers", "Multi-set access in a single day"],
              ["Filmmakers", "Cinematic scale, real lighting"],
              ["Fashion Brands", "Editorial-grade environments"],
              ["Influencers", "Effortless, content-rich corners"],
            ].map(([t, d]) => (
              <div key={t} className="border border-line p-6 rounded-sm">
                <div className="font-display text-lg text-gold">{t}</div>
                <div className="text-sm text-muted mt-2 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const testimonials = [
  {
    quote:
      "Sarvam transformed our pre-wedding shoot into a cinematic film. Every backdrop felt like a different country.",
    name: "Aarav & Meera",
    role: "Couple",
  },
  {
    quote:
      "As a fashion photographer, I've never had this much creative range in one location. Editorial-ready every angle.",
    name: "Ishaan Rao",
    role: "Photographer",
  },
  {
    quote:
      "We shot a full brand campaign across five sets in a single day. The team's professionalism matched the venue.",
    name: "Studio Norra",
    role: "Production House",
  },
];

function Testimonials() {
  return (
    <Section className="bg-bg-card">
      <motion.div variants={fadeUp} className="max-w-3xl mb-16">
        <div className="kicker mb-5">Voices</div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
          Loved by <span className="text-gold italic">creators</span>.
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className="glass-card p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-display text-xl leading-relaxed text-white/90">"{t.quote}"</p>
            <div className="mt-8 pt-6 border-t border-line">
              <div className="text-sm text-white">{t.name}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted mt-1">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        <motion.div variants={fadeUp}>
          <div className="kicker mb-5">Visit Us</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            Begin your <span className="text-gold italic">story</span> here.
          </h2>
          <div className="gold-divider my-8" />

          <div className="space-y-7">
            <div className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted mb-1">Address</div>
                <div className="text-white leading-relaxed">
                  Moosa Colony, Chowderguda Village,
                  <br />
                  Shamshabad, Hyderabad, Telangana — 501218
                </div>
                <div className="text-sm text-muted mt-2">
                  Near Ammapalli Temple · Shamshabad Exit 16
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted mb-1">Reservations</div>
                <a href="tel:+919000447445" className="block text-white hover:text-gold transition-colors">
                  +91 90004 47445
                </a>
                <a href="tel:+919000688778" className="block text-white hover:text-gold transition-colors">
                  +91 90006 88778
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted mb-1">Hours</div>
                <div className="text-white">Open Daily · 6:00 AM – 9:00 PM</div>
              </div>
            </div>
            <div className="flex gap-5">
              <Instagram className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted mb-1">Social</div>
                <div className="text-white">@sarvamthevenue</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a href="tel:+919000447445" className="btn-gold btn-gold-hover">
              <Phone size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/919000447445"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost btn-ghost-hover"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <div className="glass-card rounded-sm overflow-hidden h-full min-h-[460px]">
            <iframe
              title="Sarvam — The Venue location"
              src="https://www.google.com/maps?q=Ammapalli+Temple+Shamshabad+Hyderabad&output=embed"
              className="w-full h-full min-h-[460px] grayscale contrast-110 opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-bg/85" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="kicker mb-6">An Invitation</div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
          Ready to create something
          <br />
          <span className="text-gold italic">extraordinary</span>?
        </h2>
        <p className="text-muted text-lg mt-8 max-w-xl mx-auto leading-relaxed">
          Book your visit and discover Hyderabad's most creative shoot
          destination.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn-gold btn-gold-hover">
            Book A Shoot <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost btn-ghost-hover">
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl">Sarvam</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">The Venue</span>
          </div>
          <p className="text-muted text-sm mt-5 max-w-sm leading-relaxed">
            Hyderabad's largest pre-wedding & creative shoot destination —
            crafted for couples, creators and brands who chase the
            extraordinary.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-muted">
            {["Experiences", "Gallery", "Productions", "About", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-muted">
            <li>+91 90004 47445</li>
            <li>+91 90006 88778</li>
            <li>Shamshabad, Hyderabad</li>
            <li className="flex items-center gap-2 pt-2">
              <Instagram size={16} className="text-gold" /> @sarvamthevenue
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Sarvam — The Venue. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">Crafted with care in Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-bg text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Locations />
      <Gallery />
      <WhyChoose />
      <Stats />
      <ForCreators />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}

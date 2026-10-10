import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Menu, Play, X, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import gruppeImage from "@/assets/gruppe1.jpg";
import buehneImage from "@/assets/gruppe2.jpg";
import standbildWdr from "@/assets/video-wdr.jpg.asset.json";
import standbildHuman from "@/assets/video-human.jpg.asset.json";
import standbildFound from "@/assets/video-you-will-be-found.jpg.asset.json";
import standbildJlaeser from "@/assets/video-alle-glaeser-huh.jpg.asset.json";
import galerie1 from "@/assets/galerie-1.jpg.asset.json";
import galerie2 from "@/assets/galerie-2.jpg.asset.json";
import galerie3 from "@/assets/galerie-3.jpg.asset.json";
import galerie4 from "@/assets/galerie-4.jpg.asset.json";
import galerie5 from "@/assets/galerie-5.jpg.asset.json";
import galerie6 from "@/assets/galerie-6.jpg.asset.json";
import galerie7 from "@/assets/galerie-7.jpg.asset.json";
import galerie8 from "@/assets/galerie-8.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "art & weise – Popchor aus Köln · Popmusik & Kölsche Tön" },
      {
        name: "description",
        content:
          "art & weise: knapp 40 Sängerinnen und Sänger aus Köln unter der Leitung von Kathi Becker. Popmusik, Gospels und kölsche Tön – live auf der Bühne und auf Ihrem Fest zu buchen.",
      },
      { property: "og:title", content: "art & weise – Popchor aus Köln" },
      {
        property: "og:description",
        content: "Popmusik, Gospels und kölsche Tön – live auf der Bühne und auf Ihrem Fest zu buchen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "art & weise – Popchor aus Köln" },
      {
        name: "twitter:description",
        content: "Popmusik, Gospels und kölsche Tön – live auf der Bühne und auf Ihrem Fest zu buchen.",
      },
    ],
  }),
  component: Index,
});

const kalenderUrl = "https://rest.konzertmeister.app/api/v3/org/OALS_282031f6-fe57-46aa-9a34-06e387424012/upcomingappointments?types=2&showDescription=false&onlyPublicsite=false&limit=100&display=light&lang=de&hash=36191c81fa12d6c77553fcd9bcbf53d7c20f4b34ef238d90b84ae9046fff786c";

const hörproben = [
  {
    titel: "„Human“",
    kontext: "Vocal Vibes im Gloria · 17.7.2026",
    driveId: "1NmuYiO6KoqodYB005xncHkzzOrE2KPFP",
    standbild: standbildHuman.url,
  },
  {
    titel: "„You will be found“",
    kontext: "Vocal Vibes im Gloria · 17.7.2026",
    driveId: "1kivRRaJGmbaM5ztkNppi6EcePiMUT6F6",
    standbild: standbildFound.url,
  },
  {
    titel: "„Alle Jläser huh“",
    kontext: "Vocal Vibes im Gloria · 17.7.2026",
    driveId: "19fmw7w49r0p8LgJQf2BjHSg3kq6uxa8j",
    standbild: standbildJlaeser.url,
  },
  {
    titel: "Unser erster WDR-Beitrag",
    kontext: "Lokalzeit aus Bonn · WDR",
    youtubeId: "I0lOYrhejHE",
    standbild: standbildWdr.url,
  },
];

const navItems = [
  { id: "live", label: "Auftritte" },
  { id: "wir-ueber-uns", label: "Über uns" },
  { id: "zuhoeren", label: "Zuhören" },
  { id: "galerie", label: "Galerie" },
  { id: "mitsingen", label: "Mitsingen" },
  { id: "buchen", label: "Buchen" },
];

const galerieBilder = [
  { src: galerie1.url, alt: "Gruppenbild des Chors" },
  { src: galerie2.url, alt: "Benefizkonzert" },
  { src: galerie3.url, alt: "Kneipentour 2017" },
  { src: galerie4.url, alt: "Weihnachtsmarkt 2017" },
  { src: galerie5.url, alt: "Der Chor bei einem Auftritt" },
  { src: galerie6.url, alt: "Konzert in Pesch" },
  { src: galerie7.url, alt: "Chor in Aktion" },
  { src: galerie8.url, alt: "Chor in Aktion" },
];

function Galerie() {
  const [offen, setOffen] = useState<number | null>(null);
  const n = galerieBilder.length;
  useEffect(() => {
    if (offen === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOffen(null);
      if (e.key === "ArrowRight") setOffen((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setOffen((i) => (i === null ? i : (i - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [offen, n]);
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {galerieBilder.map((b, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOffen(i)}
            aria-label={`${b.alt} vergrößern`}
            className="group aspect-square overflow-hidden bg-ink/10 ring-1 ring-ink/10 focus-visible:outline-2 focus-visible:outline-poster-red"
          >
            <img src={b.src} alt={b.alt} loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {offen !== null &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildansicht"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOffen(null)}
        >
          <img
            src={galerieBilder[offen]?.src}
            alt={galerieBilder[offen]?.alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" aria-label="Schließen" onClick={() => setOffen(null)} className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-paper text-ink">
            <X className="size-5" />
          </button>
          <button type="button" aria-label="Vorheriges Bild" onClick={(e) => { e.stopPropagation(); setOffen((offen - 1 + n) % n); }} className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-poster-yellow text-ink">
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" aria-label="Nächstes Bild" onClick={(e) => { e.stopPropagation(); setOffen((offen + 1) % n); }} className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-poster-yellow text-ink">
            <ChevronRight className="size-6" />
          </button>
          <p className="font-grotesk absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-paper">
            {offen + 1} / {n}
          </p>
        </div>,
        document.body,
      )}
    </>
  );
}

function VideoKlick({ driveId, youtubeId, titel, standbild }: { driveId?: string | undefined; youtubeId?: string | undefined; titel: string; standbild: string }) {
  const [an, setAn] = useState(false);
  return (
    <div
      className={`relative isolate w-full overflow-hidden rounded-[min(4vw,12px)] bg-ink ring-1 ring-paper/20 ${youtubeId ? "aspect-video" : ""}`}
      style={{
        ...(youtubeId ? {} : { paddingTop: "calc(56.25% + 48px)" }),
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      {an ? (
        <iframe
          src={youtubeId ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1` : `https://drive.google.com/file/d/${driveId}/preview`}
          title={`${titel} – art & weise`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full rounded-[min(4vw,12px)]"
        />
      ) : (
        <button
          type="button"
          onClick={() => setAn(true)}
          aria-label={`Video ${titel} abspielen`}
          className="group absolute inset-0 block size-full text-left"
        >
          {!youtubeId && (
            <span className="font-grotesk absolute inset-x-0 top-0 flex h-12 items-center truncate px-4 text-sm font-medium text-paper/80">
              {titel}
            </span>
          )}
          <img src={standbild} alt="" loading="lazy" className="absolute inset-x-0 bottom-0 aspect-video w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/10">
            <span className="flex size-14 items-center justify-center rounded-full bg-poster-yellow text-ink transition-transform group-hover:scale-105 sm:size-16">
              <Play className="ml-1 size-7" aria-hidden="true" />
            </span>
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/50 to-transparent px-3 pb-2 pt-8 text-center text-[10px] leading-snug text-paper/85 sm:text-xs">
            Beim Abspielen wird das Video von {youtubeId ? "YouTube" : "Google Drive"} geladen; dabei gelten die Datenschutzbestimmungen von Google.
          </span>
        </button>
      )}
    </div>
  );
}

function Index() {
  const kalenderRef = useRef<HTMLIFrameElement>(null);
  const mobilNavRef = useRef<HTMLDivElement>(null);
  const [kalenderHoehe, setKalenderHoehe] = useState(320);
  const [kalenderBereit, setKalenderBereit] = useState(false);
  const [aktiv, setAktiv] = useState("");
  const [menueOffen, setMenueOffen] = useState(false);

  useEffect(() => {
    if (!menueOffen) return;
    function schliessenBeiAussenklick(event: PointerEvent) {
      if (event.target instanceof Node && !mobilNavRef.current?.contains(event.target)) {
        setMenueOffen(false);
      }
    }
    function schliessenMitEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenueOffen(false);
    }
    document.addEventListener("pointerdown", schliessenBeiAussenklick);
    document.addEventListener("keydown", schliessenMitEscape);
    return () => {
      document.removeEventListener("pointerdown", schliessenBeiAussenklick);
      document.removeEventListener("keydown", schliessenMitEscape);
    };
  }, [menueOffen]);

  useEffect(() => {
    function updateKalenderHoehe(event: MessageEvent) {
      if (
        event.origin !== "https://rest.konzertmeister.app" ||
        event.source !== kalenderRef.current?.contentWindow
      ) return;

      const hoehe = event.data?.kmAppointmentListHeight;
      if (typeof hoehe === "number" && Number.isFinite(hoehe) && hoehe > 0) {
        setKalenderHoehe(Math.ceil(hoehe));
      }
    }

    window.addEventListener("message", updateKalenderHoehe);
    setKalenderBereit(true);
    return () => window.removeEventListener("message", updateKalenderHoehe);
  }, []);

  useEffect(() => {
    const abschnitte = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (abschnitte.length === 0) return;

    const beobachter = new IntersectionObserver(
      (einträge) => {
        const sichtbar = einträge.find((eintrag) => eintrag.isIntersecting);
        if (sichtbar) setAktiv(sichtbar.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    abschnitte.forEach((el) => beobachter.observe(el));
    return () => beobachter.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-paper font-sans text-ink antialiased">
      <header className="sticky top-0 z-50 hidden border-b border-ink/10 bg-paper/95 backdrop-blur md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
          <a
            href="#top"
            aria-label="Zurück zum Seitenanfang"
            className="flex min-w-0 items-center gap-2.5"
          >
            <span className="flex shrink-0 items-center gap-1">
              <span className="size-2.5 rounded-full bg-poster-red" />
              <span className="size-2.5 rounded-full bg-poster-blue" />
              <span className="size-2.5 rounded-full bg-poster-yellow" />
            </span>
            <span className="font-grotesk truncate text-[13px] font-semibold uppercase tracking-[0.2em]">
              art &amp; weise
            </span>
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="flex items-center gap-7"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={aktiv === item.id ? "true" : undefined}
                className={
                  "font-grotesk text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors " +
                  (aktiv === item.id
                    ? "text-poster-red"
                    : "text-ink/55 hover:text-ink")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <div ref={mobilNavRef} className="fixed right-4 top-4 z-50 md:hidden">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={menueOffen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menueOffen}
          aria-controls="mobiles-menue"
          onClick={() => setMenueOffen((offen) => !offen)}
          className="size-12 rounded-md border-ink/20 bg-paper text-ink shadow-md hover:bg-cream hover:text-ink"
        >
          {menueOffen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        {menueOffen && (
          <nav
            id="mobiles-menue"
            aria-label="Hauptnavigation"
            className="absolute right-0 top-14 w-56 rounded-md border border-ink/15 bg-paper p-2 shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={aktiv === item.id ? "true" : undefined}
                onClick={() => setMenueOffen(false)}
                className={
                  "font-grotesk block rounded-sm px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-cream " +
                  (aktiv === item.id ? "text-poster-red" : "text-ink/70")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      <section className="reveal reveal-1 px-6 pb-14 pt-8">
        <h1 className="font-display text-balance text-[clamp(2.6rem,13vw,4.1rem)] uppercase leading-none tracking-[-0.03em]">
          <span className="block">art &amp;</span>
          <span className="block text-poster-red">weise</span>
        </h1>
        <p className="font-grotesk mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink/70">
          Popmusik &amp; Kölsche Tön
        </p>
        <p className="mt-6 max-w-[42ch] text-pretty text-base leading-relaxed text-ink/80">
          Knapp 40 Sängerinnen und Sänger aus Köln und Umgebung unter der
          Leitung von Kathi Becker – mit vielstimmigem Gesang und
          passenden Choreografien auf der Bühne.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#live"
            className="font-grotesk rounded-full bg-poster-red px-5 py-3 text-sm font-semibold text-paper ring-1 ring-poster-red"
          >
            Nächste Auftritte
          </a>
          <a
            href="#buchen"
            className="font-grotesk text-sm font-medium text-ink/70 underline decoration-1 underline-offset-4"
          >
            Chor buchen
          </a>
        </div>
        <img
          src={heroImage}
          alt="art & weise beim Konzertauftritt"
          width={2000}
          height={1500}
          className="mt-9 aspect-[3/2] w-full rounded-[min(4vw,16px)] object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </section>

      <section id="live" className="reveal reveal-2 scroll-mt-0 md:scroll-mt-[44px] bg-poster-red px-6 py-12 text-paper">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-yellow" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-blue" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Unsere nächsten Auftritte
        </h2>
        <div className="mt-8 overflow-hidden rounded-md bg-paper p-3 sm:p-5">

          {kalenderBereit && (
            <iframe
              ref={kalenderRef}
              src={kalenderUrl}
              title="Aktuelle Auftritte von art & weise"
              loading="lazy"
              className="block w-full border-0 bg-paper"
              style={{ height: kalenderHoehe }}
            />
          )}
        </div>
      </section>

      <section id="wir-ueber-uns" className="reveal reveal-3 scroll-mt-0 md:scroll-mt-[44px] bg-cream px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-10 shrink-0 rounded-full bg-poster-blue" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-red" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Wir über uns
        </h2>
        <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-ink/80">
          Seit der Gründung im Sommer 2010 hat sich art &amp; weise mehrfach
          ausgezeichnet und überregionale Bekanntheit als einer der besten
          Chöre Nordrhein-Westfalens erarbeitet. Unverwechselbares
          Markenzeichen bei Auftritten: Neben dem vielstimmigen Gesang sorgen
          passende Choreografien zu einigen Pop-Titeln für ein dynamisches
          Bühnenprogramm.
        </p>
        <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-ink/80">
          Ob kraftvolle Hymnen zum Mitsingen, emotionale Balladen oder absolute
          Party-Hits – für nahezu jeden Musikgeschmack ist etwas dabei. Viele
          der Mitglieder blicken auf eine lange gemeinsame musikalische
          Vergangenheit zurück, und über die Jahre sind tiefe Freundschaften
          und sogar Partnerschaften mit Kindern entstanden. Was ihnen allen
          gemeinsam ist: die Liebe zur Musik und die Freude am gemeinsamen
          Singen.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-[min(4vw,12px)] bg-paper p-4 ring-1 ring-black/5">
            <div className="font-display text-2xl leading-none text-poster-red">40</div>
            <div className="font-grotesk mt-1 text-sm font-medium text-ink/70">Sänger:innen</div>
          </div>
          <div className="rounded-[min(4vw,12px)] bg-paper p-4 ring-1 ring-black/5">
            <div className="font-display text-2xl leading-none text-poster-blue">2010</div>
            <div className="font-grotesk mt-1 text-sm font-medium text-ink/70">gegründet</div>
          </div>
          <div className="rounded-[min(4vw,12px)] bg-paper p-4 ring-1 ring-black/5">
            <div className="font-display text-2xl leading-none text-poster-yellow">Köln</div>
            <div className="font-grotesk mt-1 text-sm font-medium text-ink/70">Zuhause</div>
          </div>
          <div className="rounded-[min(4vw,12px)] bg-paper p-4 ring-1 ring-black/5">
            <div className="font-display text-xl leading-none text-ink">Kathi Becker</div>
            <div className="font-grotesk mt-1 text-sm font-medium text-ink/70">Leitung</div>
          </div>
        </div>
        <img
          src={gruppeImage}
          alt="art & weise nach dem Auftritt"
          width={1925}
          height={1499}
          className="mt-9 aspect-[3/2] w-full rounded-[min(4vw,16px)] object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </section>

      <section id="zuhoeren" className="reveal reveal-4 scroll-mt-0 md:scroll-mt-[44px] bg-poster-blue px-6 py-12 text-paper">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-yellow" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-red" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Zuhören
        </h2>
        <p className="mt-4 max-w-[46ch] text-pretty text-base leading-relaxed text-paper/85">
          Unser Programm kann sich sehen lassen: Alle Stile der modernen Rock-
          und Popmusik, Gospels, klassische Stücke, deutsche und kölsche
          Lieder gehören zu unserem abwechslungsreichen Repertoire, das wir
          auch ständig erweitern.
        </p>
        <div className="mt-8 space-y-6">
          {hörproben.map((h) => (
            <figure key={h.titel}>
              <VideoKlick driveId={h.driveId} youtubeId={h.youtubeId} titel={h.titel} standbild={h.standbild} />
              <figcaption className="font-grotesk mt-2 text-sm font-medium text-paper/80">
                {h.titel} · {h.kontext}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="galerie" className="reveal scroll-mt-0 md:scroll-mt-[44px] bg-paper px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-blue" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Galerie
        </h2>
        <p className="mt-4 max-w-[46ch] text-pretty text-base leading-relaxed text-ink/80">
          Eine kleine Auswahl von Bildern, die uns in Aktion zeigen.
        </p>
        <Galerie />
      </section>

      <section id="mitsingen" className="reveal reveal-5 scroll-mt-0 md:scroll-mt-[44px] bg-cream px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-red" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-blue" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Mitsingen
        </h2>
        <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-ink/80">
          Momentan sind wir in allen Stimmen gut besetzt, weshalb wir keine
          neuen Sängerinnen oder Sänger suchen. Immer mal wieder brauchen wir
          aber Verstärkung und freuen uns dann über Zuschriften.
        </p>
        <img
          src={buehneImage}
          alt="art & weise auf der Bühne"
          width={1704}
          height={2034}
          className="mt-8 aspect-[4/5] w-full rounded-[min(4vw,16px)] object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </section>

      <section id="buchen" className="reveal reveal-6 scroll-mt-0 md:scroll-mt-[44px] bg-poster-red px-6 py-12 text-paper">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-yellow" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-blue" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Buchen
        </h2>
        <p className="mt-4 max-w-[46ch] text-pretty text-base leading-relaxed text-paper/85">
          Wir veranstalten in regelmäßigen Abständen eigene Konzerte, gestalten
          aber auch gerne das musikalische Rahmenprogramm Ihrer Veranstaltung –
          ob Hochzeit, Geburtstag, Firmenfeier, Gottesdienst oder Charity und
          vieles mehr.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="mailto:info@artundweisechor.de"
            className="font-grotesk rounded-full bg-poster-yellow px-5 py-3 text-sm font-semibold text-ink ring-1 ring-poster-yellow"
          >
            info@artundweisechor.de
          </a>
          <a
            href="tel:+491634719264"
            className="font-grotesk text-sm font-medium text-paper/90 underline decoration-1 underline-offset-4"
          >
            0163 4719264 (Corinna Blum)
          </a>
        </div>
      </section>

      <footer className="bg-ink px-6 py-12 text-paper">
        <div className="mb-7 flex items-center gap-3">
          <span className="size-4 shrink-0 rounded-full bg-poster-red" />
          <span className="size-4 shrink-0 rounded-full bg-poster-blue" />
          <span className="size-4 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <div className="font-display text-2xl uppercase leading-none tracking-[-0.02em]">
          art &amp; weise
        </div>
        <div className="mt-5 space-y-2 text-sm text-paper/70">
          <p>Popchor aus Köln · Leitung Kathi Becker</p>
          <p>info@artundweisechor.de · 0163 4719264</p>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <a
            href="https://www.facebook.com/artundweisechor"
            target="_blank"
            rel="noreferrer"
            aria-label="art & weise auf Facebook"
            className="flex size-10 items-center justify-center rounded-full ring-1 ring-paper/25 transition-colors hover:bg-paper/10"
          >
            <Facebook className="size-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/artundweisechor/"
            target="_blank"
            rel="noreferrer"
            aria-label="art & weise auf Instagram"
            className="flex size-10 items-center justify-center rounded-full ring-1 ring-paper/25 transition-colors hover:bg-paper/10"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/user/ARTUNDWEISECHOR"
            target="_blank"
            rel="noreferrer"
            aria-label="art & weise auf YouTube"
            className="flex size-10 items-center justify-center rounded-full ring-1 ring-paper/25 transition-colors hover:bg-paper/10"
          >
            <Youtube className="size-5" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-paper/10 pt-5">
          <span className="text-xs text-paper/50">© 2026 art &amp; weise chor</span>
          <button
            type="button"
            onClick={() => setImpressumOffen(true)}
            className="font-grotesk text-xs text-paper/50 underline underline-offset-2"
          >
            Impressum
          </button>
        </div>
      </footer>
    </div>
  );
}

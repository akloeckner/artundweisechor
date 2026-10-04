import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero.jpg";
import gruppeImage from "@/assets/gruppe1.jpg";
import buehneImage from "@/assets/gruppe2.jpg";
import wdrImage from "@/assets/wdr.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "art & weise – Popchor aus Köln · Popmusik & Kölsche Tön" },
      {
        name: "description",
        content:
          "art & weise: knapp 40 Sängerinnen und Sänger aus Köln unter der Leitung von Katharina Becker. Popmusik, Gospels und kölsche Tön – live auf der Bühne und auf Ihrem Fest zu buchen.",
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
  },
  {
    titel: "„You will be found“",
    kontext: "Vocal Vibes im Gloria · 17.7.2026",
    driveId: "1kivRRaJGmbaM5ztkNppi6EcePiMUT6F6",
  },
  {
    titel: "„Alle Jläser huh“",
    kontext: "Vocal Vibes im Gloria · 17.7.2026",
    driveId: "19fmw7w49r0p8LgJQf2BjHSg3kq6uxa8j",
  },
];

function Index() {
  const kalenderRef = useRef<HTMLIFrameElement>(null);
  const [kalenderHoehe, setKalenderHoehe] = useState(320);

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
    return () => window.removeEventListener("message", updateKalenderHoehe);
  }, []);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="size-4 shrink-0 rounded-full bg-poster-red" />
          <span className="size-4 shrink-0 rounded-full bg-poster-blue" />
          <span className="size-4 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <span className="font-grotesk text-[13px] font-semibold uppercase tracking-[0.2em]">
          art &amp; weise
        </span>
      </header>

      <section className="reveal reveal-1 px-6 pb-14 pt-8">
        <div className="mb-7 flex items-start gap-3">
          <div className="mt-1.5 size-2.5 shrink-0 rounded-full bg-poster-red" />
          <p className="font-grotesk max-w-[48ch] text-[13px] font-semibold uppercase tracking-[0.22em] text-warm-muted">
            Popchor · gegr. 2010 · Köln
          </p>
        </div>
        <h1 className="font-display text-balance text-[clamp(2.6rem,13vw,4.1rem)] uppercase leading-none tracking-[-0.03em]">
          <span className="block">art &amp;</span>
          <span className="block text-poster-red">weise</span>
        </h1>
        <p className="font-grotesk mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink/70">
          Popmusik &amp; Kölsche Tön
        </p>
        <p className="mt-6 max-w-[42ch] text-pretty text-base leading-relaxed text-ink/80">
          Knapp 40 Sängerinnen und Sänger aus Köln und Umgebung unter der
          Leitung von Katharina Becker – mit vielstimmigem Gesang und
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

      <section id="live" className="reveal reveal-2 bg-poster-red px-6 py-12 text-paper">
        <div className="mb-7 flex items-end justify-between gap-3">
          <p className="font-grotesk text-[13px] font-semibold uppercase tracking-[0.22em]">
            Unsere nächsten Auftritte
          </p>
          <span className="size-3 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <div className="overflow-hidden rounded-md bg-paper p-3 sm:p-5">
          <iframe
            ref={kalenderRef}
            src={kalenderUrl}
            title="Aktuelle Auftritte von art & weise"
            loading="lazy"
            className="block w-full border-0 bg-paper"
            style={{ height: kalenderHoehe }}
          />
        </div>
      </section>

      <section id="wir-ueber-uns" className="reveal reveal-3 bg-cream px-6 py-12">
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
            <div className="font-display text-xl leading-none text-ink">Katharina Becker</div>
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

      <section id="zuhoeren" className="reveal reveal-4 bg-poster-blue px-6 py-12 text-paper">
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
            <figure key={h.driveId}>
              <div className="aspect-video w-full overflow-hidden rounded-[min(4vw,12px)] bg-ink/20 ring-1 ring-paper/20">
                <iframe
                  src={`https://drive.google.com/file/d/${h.driveId}/preview`}
                  title={`${h.titel} – art & weise`}
                  allow="autoplay"
                  className="size-full"
                />
              </div>
              <figcaption className="font-grotesk mt-2 text-sm font-medium text-paper/80">
                {h.titel} · {h.kontext}
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          href="https://www.youtube.com/watch?v=I0lOYrhejHE"
          target="_blank"
          rel="noreferrer"
          className="font-grotesk mt-8 inline-flex items-center gap-3 rounded-full bg-poster-yellow px-5 py-3 text-sm font-semibold text-ink ring-1 ring-poster-yellow"
        >
          <img
            src={wdrImage}
            alt=""
            width={1154}
            height={1154}
            className="size-6 rounded-full object-cover"
          />
          Unser erster WDR-Beitrag
        </a>
      </section>

      <section id="mitsingen" className="reveal reveal-5 bg-cream px-6 py-12">
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

      <section id="buchen" className="reveal reveal-6 bg-poster-red px-6 py-12 text-paper">
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
          <p>Popchor aus Köln · Leitung Katharina Becker</p>
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
          <Link to="/impressum" className="font-grotesk text-xs text-paper/50 underline underline-offset-2">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chor Kantate – Amateurchor in Frankfurt am Main" },
      {
        name: "description",
        content:
          "Chor Kantate: Ein Amateurchor in Frankfurt am Main. Konzerte, Proben mittwochs – mitsingen ganz ohne Vorsingen.",
      },
      { property: "og:title", content: "Chor Kantate – Amateurchor in Frankfurt am Main" },
      {
        property: "og:description",
        content: "Konzerte, Proben mittwochs – mitsingen ganz ohne Vorsingen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chor Kantate – Amateurchor in Frankfurt am Main" },
      {
        name: "twitter:description",
        content: "Konzerte, Proben mittwochs – mitsingen ganz ohne Vorsingen.",
      },
    ],
  }),
  component: Index,
});

const konzerte = [
  {
    tag: "19",
    monat: "Dez",
    titel: "Adventskonzert",
    ort: "Ev. Kirche St. Paul · 17 Uhr",
  },
  {
    tag: "14",
    monat: "Feb",
    titel: "Chorkonzert",
    ort: "Alte Oper · 19:30 Uhr",
  },
  {
    tag: "21",
    monat: "Jun",
    titel: "Sommerfest",
    ort: "Volkspark · 16 Uhr",
  },
];

const zahlen = [
  { wert: "40", label: "Stimmen", farbe: "text-poster-red" },
  { wert: "27", label: "Jahre aktiv", farbe: "text-poster-blue" },
  { wert: "12", label: "Konzerte im Jahr", farbe: "text-poster-yellow" },
  { wert: "1", label: "Probe pro Woche", farbe: "text-foreground" },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="size-4 shrink-0 rounded-full bg-poster-red" />
          <span className="size-4 shrink-0 rounded-full bg-poster-blue" />
          <span className="size-4 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <span className="font-grotesk text-[13px] font-semibold uppercase tracking-[0.2em]">
          Chor
        </span>
      </header>

      <section className="reveal reveal-1 px-6 pb-14 pt-8">
        <div className="mb-7 flex items-start gap-3">
          <div className="mt-1.5 size-2.5 shrink-0 rounded-full bg-poster-red" />
          <p className="font-grotesk max-w-[48ch] text-[13px] font-semibold uppercase tracking-[0.22em] text-warm-muted">
            Amateurchor · seit 1998 · Frankfurt am Main
          </p>
        </div>
        <h1 className="font-display text-balance text-[clamp(2.6rem,13vw,4.1rem)] uppercase leading-none tracking-[-0.03em]">
          <span className="block">Chor</span>
          <span className="block text-poster-red">Kantate</span>
        </h1>
        <p className="mt-6 max-w-[42ch] text-pretty text-base leading-relaxed text-ink/80">
          Ein Chor, der zusammen singt und zusammen klingt. Wir laden ein,
          mitzusingen — ganz ohne Vorsingen.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#mitsingen"
            className="font-grotesk rounded-full bg-poster-red px-5 py-3 text-sm font-semibold text-paper ring-1 ring-poster-red"
          >
            Mitsingen
          </a>
          <a
            href="#konzerte"
            className="font-grotesk text-sm font-medium text-ink/70 underline decoration-1 underline-offset-4"
          >
            Konzerte ansehen
          </a>
        </div>
        <img
          src={heroImage}
          alt="Der Chor Kantate singt bei einem Konzert bei Kerzenlicht"
          width={1152}
          height={768}
          className="mt-9 aspect-[3/2] w-full rounded-[min(4vw,16px)] object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </section>

      <section id="konzerte" className="reveal reveal-2 bg-poster-red px-6 py-12 text-paper">
        <div className="mb-7 flex items-end justify-between gap-3">
          <p className="font-grotesk text-[13px] font-semibold uppercase tracking-[0.22em]">
            Nächste Konzerte
          </p>
          <span className="font-grotesk text-sm font-medium text-paper/80">2025 / 26</span>
        </div>
        <div className="divide-y divide-paper/15">
          {konzerte.map((k) => (
            <div key={k.titel} className="flex items-center gap-4 py-4">
              <div className="w-14 shrink-0 text-center">
                <div className="font-display text-xl leading-none">{k.tag}</div>
                <div className="font-grotesk mt-1 text-[11px] font-medium uppercase tracking-[0.15em]">
                  {k.monat}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-grotesk text-base font-semibold leading-tight">{k.titel}</div>
                <div className="text-sm text-paper/70">{k.ort}</div>
              </div>
              <span className="size-2.5 shrink-0 rounded-full bg-poster-yellow" />
            </div>
          ))}
        </div>
      </section>

      <section className="reveal reveal-3 bg-cream px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-10 shrink-0 rounded-full bg-poster-blue" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-red" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Über uns
        </h2>
        <p className="mt-4 max-w-[48ch] text-pretty text-base leading-relaxed text-ink/80">
          Wir sind rund vierzig Sängerinnen und Sänger zwischen 20 und 70. Wir
          proben mittwochs und singen von Bach bis Pop. Was zählt, ist nicht
          die perfekte Stimme, sondern dass wir zusammen klingen.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {zahlen.map((z) => (
            <div
              key={z.label}
              className="rounded-[min(4vw,12px)] bg-paper p-4 ring-1 ring-black/5"
            >
              <div className={`font-display text-2xl leading-none ${z.farbe}`}>{z.wert}</div>
              <div className="font-grotesk mt-1 text-sm font-medium text-ink/70">{z.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="mitsingen" className="reveal reveal-4 bg-poster-blue px-6 py-12 text-paper">
        <div className="mb-6 flex items-center gap-3">
          <div className="size-3.5 shrink-0 rounded-full bg-poster-yellow" />
          <div className="size-3.5 shrink-0 rounded-full bg-poster-red" />
        </div>
        <h2 className="font-display max-w-[40ch] text-balance text-3xl uppercase leading-none tracking-[-0.02em]">
          Mitsingen
        </h2>
        <p className="mt-4 max-w-[46ch] text-pretty text-base leading-relaxed text-paper/85">
          Neugierig geworden? Kommen Sie einfach zu einer offenen Probe. Kein
          Vorsingen, keine Notenpflicht. Sie sind willkommen, so wie Sie
          klingen.
        </p>
        <div className="mt-7 flex items-center gap-3">
          <a
            href="mailto:kontakt@chor-kantate.de"
            className="font-grotesk rounded-full bg-poster-yellow px-5 py-3 text-sm font-semibold text-ink ring-1 ring-poster-yellow"
          >
            Kontakt aufnehmen
          </a>
          <span className="font-grotesk text-sm font-medium text-paper/80">offene Probe</span>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-8 shrink-0 items-end gap-[3px]">
            {[40, 75, 55, 95, 60, 80, 45, 70].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-paper/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="h-1 flex-1 rounded-full bg-paper/25">
            <div className="h-full w-1/3 rounded-full bg-paper" />
          </div>
          <span className="font-grotesk shrink-0 text-sm font-medium text-paper/80">0:12</span>
        </div>
      </section>

      <footer className="bg-ink px-6 py-12 text-paper">
        <div className="mb-7 flex items-center gap-3">
          <span className="size-4 shrink-0 rounded-full bg-poster-red" />
          <span className="size-4 shrink-0 rounded-full bg-poster-blue" />
          <span className="size-4 shrink-0 rounded-full bg-poster-yellow" />
        </div>
        <div className="font-display text-2xl uppercase leading-none tracking-[-0.02em]">
          Chor Kantate
        </div>
        <div className="mt-5 space-y-2 text-sm text-paper/70">
          <p>Mittwochs 19:30 · Gemeindehaus am Markt</p>
          <p>kontakt@chor-kantate.de · 069 12 34 56</p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-paper/10 pt-5">
          <span className="text-xs text-paper/50">© 2026 Chor Kantate</span>
          <span className="text-xs text-paper/50">Impressum · Datenschutz</span>
        </div>
      </footer>
    </div>
  );
}

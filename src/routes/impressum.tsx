import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – art & weise chor" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung des Chors art & weise aus Köln.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Impressum – art & weise chor" },
      {
        property: "og:description",
        content: "Impressum und Anbieterkennzeichnung des Chors art & weise aus Köln.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <header className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-grotesk text-[13px] font-semibold uppercase tracking-[0.2em]">
          art &amp; weise
        </Link>
        <Link
          to="/"
          className="font-grotesk text-sm font-medium text-ink/70 underline decoration-1 underline-offset-4"
        >
          Zur Startseite
        </Link>
      </header>

      <main className="px-6 pb-16 pt-8">
        <h1 className="font-display text-3xl uppercase leading-none tracking-[-0.02em]">
          Impressum
        </h1>

        <section className="mt-8">
          <h2 className="font-grotesk text-sm font-semibold uppercase tracking-[0.18em] text-warm-muted">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3 leading-relaxed">
            art &amp; weise chor
            <br />
            Markus Kohlstädde
            <br />
            Kochwiesenstr. 33a
            <br />
            51067 Köln
          </p>
          <p className="mt-4 leading-relaxed">
            <strong>Vertreten durch:</strong> Markus Kohlstädde
          </p>
          <p className="mt-4 leading-relaxed">
            <strong>Kontakt:</strong>{" "}
            <a
              href="mailto:info@artundweisechor.de"
              className="underline decoration-1 underline-offset-4"
            >
              info@artundweisechor.de
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-grotesk text-sm font-semibold uppercase tracking-[0.18em] text-warm-muted">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/80">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
            sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder
            Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-grotesk text-sm font-semibold uppercase tracking-[0.18em] text-warm-muted">
            Haftung für Links
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/80">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-grotesk text-sm font-semibold uppercase tracking-[0.18em] text-warm-muted">
            Urheberrecht
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/80">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-grotesk text-sm font-semibold uppercase tracking-[0.18em] text-warm-muted">
            Datenschutz
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/80">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten erhoben werden, erfolgt dies, soweit
            möglich, stets auf freiwilliger Basis. Diese Daten werden ohne
            Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/80">
            Diese Webseite setzt selbst keine Cookies und verwendet keine
            Analyse- oder Tracking-Werkzeuge. Schriften werden von unserem
            eigenen Server geladen. Die Konzertvideos stammen von Google Drive
            und werden erst geladen, wenn Sie sie per Klick abspielen; dabei
            gelten die Datenschutzbestimmungen von Google. Unsere Termine
            werden aus dem Dienst Konzertmeister eingebunden.
          </p>
        </section>
      </main>
    </div>
  );
}

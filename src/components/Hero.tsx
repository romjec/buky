import { ArtTile } from "./BookArt";
import { CircleBadge, Rings, SquiggleArrow, Tags } from "./Decorations";
import { SignupForm } from "./SignupForm";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="relative mx-auto max-w-7xl">
        {/* Deko oben */}
        <div className="absolute top-10 left-0 hidden xl:block">
          <CircleBadge />
        </div>
        <SquiggleArrow className="absolute -top-4 left-[18%] hidden w-44 lg:block" />
        <div className="absolute -top-2 -right-4 hidden scale-90 xl:block">
          <Tags />
        </div>

        <div id="anmelden" className="mx-auto max-w-4xl scroll-mt-8 text-center lg:pt-16">
          <h1 className="font-serif text-[2.6rem] leading-[1.08] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Jeden Monat neue Bücher
            <br />
            zum <em className="font-bold text-violet">Entdecken</em> und{" "}
            <em className="font-bold text-mustard">Lernen</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Buky bringt deinem Kind jeden Monat neue Kinderbücher nach Hause. Die alten gehen zurück, die neuen ziehen
            ein – ohne Bücherberg, ohne Neukauf.
          </p>
          <SignupForm source="hero" buttonLabel="Ich will Buky" className="mx-auto mt-8 max-w-xl text-left" />
        </div>

        {/* Collage */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5 lg:items-end">
          <div className="hidden flex-col gap-6 lg:flex">
            <p className="text-lg leading-relaxed tracking-wide uppercase">
              Das Bücher-Abo
              <br />
              für kleine Leseratten
            </p>
            <ArtTile variant="stack" bg="#f1d9b5" className="aspect-square" />
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            <ArtTile variant="shelf" bg="var(--color-lavender-soft)" className="aspect-[3/2]" />
            <ArtTile variant="open" bg="var(--color-sun)" className="aspect-square" />
          </div>
          <ArtTile variant="board" bg="var(--color-lavender)" className="aspect-[3/4] lg:aspect-[2/3]" />
          <div className="hidden flex-col gap-4 sm:gap-5 lg:flex">
            <ArtTile variant="bite" bg="var(--color-blush)" className="aspect-[3/2]" />
            <ArtTile variant="box" bg="#f3e3cc" className="aspect-[3/2]" />
          </div>
          <div className="hidden flex-col items-center gap-6 lg:flex">
            <Rings className="w-40" />
            <ArtTile variant="bite" bg="#d7f0e6" className="aspect-square w-full" />
          </div>
        </div>

        {/* Leiste unter der Collage */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-3">
          <blockquote className="max-w-md">
            <span className="font-serif text-6xl leading-none font-bold text-violet" aria-hidden>
              “
            </span>
            <p className="-mt-4 text-muted">
              Dein Kind schaut sein Lieblingsbuch auch zum hundertsten Mal gern an – du kannst es längst auswendig. Mit
              Buky kommen neue Geschichten, neue Wörter und neue Welten ins Kinderzimmer.
            </p>
          </blockquote>
          <div className="flex justify-center">
            <a
              href="#so-gehts"
              className="inline-flex items-center gap-2 rounded-full border border-violet px-10 py-4 text-lg text-violet transition hover:bg-violet hover:text-white"
            >
              So geht&apos;s <span aria-hidden>↓</span>
            </a>
          </div>
          <a href="#gutschein" className="group flex items-center gap-4 md:justify-self-end">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-violet text-2xl transition group-hover:bg-lavender-soft">
              🎁
            </span>
            <span>
              <span className="block text-sm text-muted">Für Gotte, Götti & Grosseltern</span>
              <span className="block text-lg">Buky als Geschenk verschenken</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

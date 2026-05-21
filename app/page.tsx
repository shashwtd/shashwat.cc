import { AsciiRotation } from "./components/ascii-rotation";

const linkClass =
  "underline decoration-stone-400 underline-offset-2 decoration-[0.5px] hover:decoration-stone-900 transition-colors duration-200";

export default function Home() {
  return (
    <main className="animate-enter w-full max-w-[480px]">
      <div className="px-7 py-7 space-y-5">
        <header className="pb-4 border-b border-stone-200">
          <AsciiRotation />
          <h1 className="pb-3 font-semibold text-base text-stone-950">
            Shashwat Dubey
          </h1>
          <p className="text-stone-500">
            Founding Design {" "}
            <a href="https://physera.ai" className={linkClass}>
              @Physera
            </a>
          </p>
          <p className="text-stone-500 mt-2">
            Building thoughtful things on the internet. Drawn to product craft,
            fast prototypes, and the gap between an idea and the working version
            of it.
          </p>
        </header>

        <div className="pb-4 border-b border-stone-200">
          <p className="text-stone-400 mb-1">Previously</p>
          <div className="space-y-1 text-stone-600">
            <p>
              UX &amp; Product{" "}
              <a href="#" className={linkClass}>
                @Kairos
              </a>
              <span className="text-stone-400"> · Oct 2025 — Apr 2026</span>
            </p>
            <p>
              Frontend SDE{" "}
              <a href="#" className={linkClass}>
                @SurvAI
              </a>
              <span className="text-stone-400"> · May 2024 — Oct 2024</span>
            </p>
            <p>
              Design Intern{" "}
              <a href="#" className={linkClass}>
                @STEMist
              </a>
              <span className="text-stone-400"> · Jun 2023 — Sep 2023</span>
            </p>
          </div>
        </div>

        <div className="pb-4 border-b border-stone-200">
          <p className="text-stone-400 mb-1">Recognition</p>
          <p className="text-stone-600">
            #1 @HPE Code Wars
            <span className="text-stone-400"> · </span>
            1st @IIT Roorkee E-Summit
          </p>
        </div>

        {/* hidden for now — flip back on when design links are ready
        <div>
          <p className="text-stone-400 mb-1">Selected design work</p>
          <p className="text-stone-600">
            <a href="#" className={linkClass}>Crypto credit card landing</a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>Freelance agency landing</a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>Crypto trading course</a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>Neur.sh dashboard</a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>Crypto wallet extension</a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>Mobile auth flow</a>
          </p>
        </div>
        */}

        {/* hidden for now — flip back on when repo URLs are confirmed
        <div>
          <p className="text-stone-400 mb-1">Projects</p>
          <p className="text-stone-600">
            <a href="https://github.com/shashwtd" className={linkClass}>SurveyForge</a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>MyNotes</a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>The Human Atlas</a>
          </p>
        </div>
        */}

        <div>
          <p className="text-stone-400 mb-1">Elsewhere</p>
          <p className="text-stone-600">
            <a href="mailto:hi@shashwat.cc" className={linkClass}>
              email
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://twitter.com/shashwatvalid" className={linkClass}>
              twitter/x
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>
              github
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://instagram.com/shashwatvalid" className={linkClass}>
              instagram
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

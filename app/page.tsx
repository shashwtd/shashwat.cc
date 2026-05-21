const linkClass =
  "underline decoration-stone-400 underline-offset-2 decoration-[0.5px] hover:decoration-stone-900 transition-colors duration-200";

export default function Home() {
  return (
    <main className="animate-enter w-full max-w-[480px]">
      <div className="px-7 py-7 space-y-5">
        <header className="pb-4 border-b border-stone-200">
          <h1 className="font-semibold text-stone-950">Shashwat Dubey</h1>
          <p className="text-stone-500">
            Lead UX &amp; Product{" "}
            <a href="https://physera.ai" className={linkClass}>
              @Physera
            </a>
          </p>
          <p className="text-stone-500 mt-2">
            Building thoughtful things on the internet. Drawn to product design,
            fast prototypes, and the gap between an idea and the working version
            of it.
          </p>
        </header>

        <div>
          <p className="text-stone-400 mb-1">Previously</p>
          <div className="space-y-1 text-stone-600">
            <p>
              Full Stack Engineer{" "}
              <a href="#" className={linkClass}>
                @SurvAI Solutions
              </a>
              <span className="text-stone-400"> · May 2024 — Oct 2024</span>
            </p>
            <p>
              Founding Engineer{" "}
              <a href="#" className={linkClass}>
                @Kalyke 3D
              </a>
              <span className="text-stone-400"> · Sept 2023 — Jan 2024</span>
            </p>
            <p>
              Frontend &amp; Design Intern{" "}
              <a href="#" className={linkClass}>
                @STEMist
              </a>
              <span className="text-stone-400"> · Jun 2023 — Sept 2023</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-stone-400 mb-1">Recognition</p>
          <p className="text-stone-600">
            #1 @HPE Code Wars
            <span className="text-stone-400"> · </span>
            1st @IIT Roorkee E-Summit
            <span className="text-stone-400"> · </span>
            Top 70 of 5k @Boston coding workshop
          </p>
        </div>

        <div>
          <p className="text-stone-400 mb-1">Selected design work</p>
          <p className="text-stone-600">
            <a href="#" className={linkClass}>
              Crypto credit card landing
            </a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>
              Freelance agency landing
            </a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>
              Crypto trading course
            </a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>
              Neur.sh dashboard
            </a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>
              Crypto wallet extension
            </a>
            <span className="text-stone-400"> · </span>
            <a href="#" className={linkClass}>
              Mobile auth flow
            </a>
          </p>
        </div>

        <div>
          <p className="text-stone-400 mb-1">Projects</p>
          <p className="text-stone-600">
            <a href="https://github.com/shashwtd" className={linkClass}>
              SurveyForge
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>
              MyNotes
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>
              The Human Atlas
            </a>
          </p>
        </div>

        <div>
          <p className="text-stone-400 mb-1">Elsewhere</p>
          <p className="text-stone-600">
            <a
              href="mailto:shashwat5590@gmail.com"
              className={linkClass}
            >
              email
            </a>
            <span className="text-stone-400"> · </span>
            <a
              href="https://twitter.com/shashwatvalid"
              className={linkClass}
            >
              twitter
            </a>
            <span className="text-stone-400"> · </span>
            <a href="https://github.com/shashwtd" className={linkClass}>
              github
            </a>
            <span className="text-stone-400"> · </span>
            <a
              href="https://instagram.com/shashwatvalid"
              className={linkClass}
            >
              instagram
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

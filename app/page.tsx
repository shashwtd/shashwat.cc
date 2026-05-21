export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-3">
        <h1 className="font-semibold">Shashwat Dubey</h1>
        <p>
          Product designer and engineer. Building thoughtful things on the
          internet.
        </p>
        <p>
          <a href="https://twitter.com/shashwatvalid" className="underline">
            twitter
          </a>
          {" · "}
          <a href="https://github.com/shashwtd" className="underline">
            github
          </a>
          {" · "}
          <a href="mailto:shashwat5590@gmail.com" className="underline">
            email
          </a>
        </p>
      </div>
    </main>
  );
}

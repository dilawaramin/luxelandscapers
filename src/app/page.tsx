

export default function Home() {
  return (
  <main>
  <div
    className="hero min-h-[60vh] md:min-h-[100vh] lg:min-h-[100vh] bg-bottom md:bg-fixed"
    style={{
      backgroundImage: "url('/pictures/headerfinal2.jpg')",
    }}>
    <div className="hero-overlay bg-opacity-40"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-luxeGoldMain text-5xl font-bold">Hello there</h1>
        <p className="mb-5 text-luxeGoldMain text-lg">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary text-luxeGoldMain font-medium">Let's Connect!</button>
      </div>
    </div>
  </div>
  <div
    className="hero min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]">
    <div className="hero-overlay bg-opacity-45"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-luxeGoldMain text-5xl font-bold">Hello there</h1>
        <p className="mb-5 text-luxeGoldMain text-lg">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary text-luxeGoldMain font-medium">Let's Connect!</button>
      </div>
    </div>
  </div>
  </main>
  );
}

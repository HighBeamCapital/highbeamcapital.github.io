export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
              Building tomorrow&apos;s leaders today
            </h2>
          </div>
          <div className="space-y-6 text-zinc-600">
            <p>
              Founded in Los Angeles, HighBeam Capital is a venture capital firm dedicated to backing ambitious founders at the earliest stages of their journey. We focus on companies that leverage technology to solve meaningful problems at scale.
            </p>
            <p>
              Our team brings decades of combined experience across technology, operations, and finance. We&apos;re not just investors—we&apos;re partners committed to helping founders navigate the challenges of building category-defining companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
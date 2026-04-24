const focusAreas = [
  {
    title: "Deep Tech & AI",
    description: "Artificial intelligence, machine learning, and frontier technologies that push the boundaries of what&apos;s possible."
  },
  {
    title: "Climate & Sustainability",
    description: "Companies developing innovative solutions to address climate change and build a more sustainable future."
  },
  {
    title: "Enterprise Software",
    description: "Next-generation tools that transform how businesses operate, collaborate, and grow."
  },
  {
    title: "Healthcare & Bio",
    description: "Technology-driven healthcare innovations that improve outcomes and expand access to care."
  }
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Investment focus areas
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200/50 hover:border-zinc-300 transition-colors">
              <h3 className="text-xl font-medium text-zinc-900 mb-3">{area.title}</h3>
              <p className="text-zinc-600" dangerouslySetInnerHTML={{ __html: area.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
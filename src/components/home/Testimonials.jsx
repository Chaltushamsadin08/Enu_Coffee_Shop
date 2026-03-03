const testimonials = [
  { id: 1, name: "Sara", text: "Best coffee and super easy ordering!" },
  { id: 2, name: "Ahmed", text: "Fast pickup and great taste. Love it." },
  { id: 3, name: "Lily", text: "The caramel latte is my favorite!" },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-bold text-coffee-brown">Testimonials</h2>
      <p className="mt-1 text-coffee-brown/70">What customers say.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-2xl border border-coffee-caramel bg-white p-5">
            <p className="text-coffee-brown/80 leading-relaxed">“{t.text}”</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-coffee-caramel flex items-center justify-center">
                👤
              </div>
              <p className="font-semibold text-coffee-brown">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

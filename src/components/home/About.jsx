export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <img
          className="rounded-3xl border border-coffee-caramel object-cover w-full h-[320px]"
          src="https://picsum.photos/seed/bontucafe/1200/800"
          alt="Cafe"
        />

        <div>
          <h2 className="text-2xl font-bold text-coffee-brown">About Us</h2>
          <p className="mt-3 text-coffee-brown/80 leading-relaxed">
            Enu Coffee Shop serves fresh coffee with quality ingredients.
            Our mission is to make ordering easy and enjoyable for everyone.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-coffee-caramel p-4 bg-white">
              <p className="font-semibold text-coffee-brown">Fresh Beans</p>
              <p className="text-sm text-coffee-brown/70 mt-1">Roasted and brewed daily.</p>
            </div>
            <div className="rounded-2xl border border-coffee-caramel p-4 bg-white">
              <p className="font-semibold text-coffee-brown">Fast Service</p>
              <p className="text-sm text-coffee-brown/70 mt-1">Quick pickup & smooth checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

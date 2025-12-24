export default function Nav2() {
  return (
    <section className="relative bg-slate-900 h-[85vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzDgH1YmQWyhxZYn_B2Y7pbUkUx4VbDf4fJClpkbZYpKzfTseNjHds73LLGBrK7rnb4VjiZVU87DWeDNNc0Y-5pIZu44-jRAZMjc7MqFjSH1IzyLZjEB3x0WekDVojKEX9rIQqE8KCh35pgxJgzn4wXMrNCcp6hBhaoo4dQb1039cK8H91lbcIu26JcFOwQ068lA6I3bn8lbGW3leL77YdW6aG_m-iOmBioIiTpYWolP38tjXD7pdsBPyOfNgoiuM74y55pZmqe3zy"
          className="w-full h-full object-cover"
          alt="HVAC technician"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h1 className="text-white text-5xl md:text-7xl font-accent font-bold leading-tight">
          Reliable.<br />
          <span className="text-primary">Affordable.</span><br />
          Ready.
        </h1>
        <p className="mt-6 max-w-xl text-slate-200 text-lg border-l-4 border-primary pl-6">
          Expert HVAC cooling, heating, and technical maintenance for homes,
          offices, and industries.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#quote" className="h-14 px-10 rounded-full bg-primary text-white font-bold flex items-center justify-center hover:bg-primary-dark transition">
            Book Inspection
          </a>
          <a href="#services" className="h-14 px-10 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center hover:bg-slate-100 transition">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

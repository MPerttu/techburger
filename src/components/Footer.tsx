export function Footer() {
  const openingHours = ["Ma–pe 10–22", "La 12–24", "Su suljettu"];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-8 px-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sarake 1 */}
        <div>
          <p className="font-semibold text-2xl">TechBurger</p>
          <p className="text-sm text-slate-300 mt-3">
            Tuoreita burgereita, hyvää fiilistä ja nopea toimitus.
          </p>
          <div className="text-sm text-slate-400 mt-4 space-y-1">
            <p>Sähköposti: info@techburger.fi</p>
            <p>Puhelin: +358 40 123 4567</p>
            <p>Sijainti: Vaasa, Suomi</p>
          </div>
        </div>

        {/* Sarake 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Aukioloajat</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            {openingHours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Sarake 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Seuraa meitä</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-700 mt-8 pt-4">
        <p className="text-sm text-slate-400 text-center">
          © 2026 TechBurger. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  );
}

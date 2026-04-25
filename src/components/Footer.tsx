export function Footer() {
  const openingHours = ["Mon-Fri 10-22", "Sat 12-24", "Sun Closed"];

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
        {/* Column 1 */}
        <div>
          <p className="font-semibold text-2xl">TechBurger</p>
          <p className="text-sm text-slate-300 mt-3">
            Fresh burgers, good vibes, fast delivery.
          </p>
          <div className="text-sm text-slate-400 mt-4 space-y-1">
            <p>Email: info@techburger.fi</p>
            <p>Phone: +358 40 123 4567</p>
            <p>Location: Vaasa, Finland</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Opening Hours</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            {openingHours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
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
          © 2026 TechBurger. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

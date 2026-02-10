export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold">Grawatty</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Building smarter energy solutions through gravity-driven innovation.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Get in touch</h4>
          <p className="text-sm">contact@grawatty.com</p>
          <p className="text-sm mt-2">India</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-xs">
        © {new Date().getFullYear()} Grawatty. All rights reserved.
      </div>
    </footer>
  );
}

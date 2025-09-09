import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      {/* Main Links Section */}
      <div className="container-responsive py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Get to Know Us */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                About Baskeet
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Press Releases
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Connect with Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/baskeet.shop/"
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:thebaskeet@gmail.com"
                className="flex items-center gap-2 hover:text-gray-900 transition"
              >
                <Mail className="w-4 h-4" /> thebaskeet@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Make Money */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Affiliate Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Advertise Products
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Returns Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">Baskeet.store</span> — All rights reserved.
      </div>
    </footer>
  );
}

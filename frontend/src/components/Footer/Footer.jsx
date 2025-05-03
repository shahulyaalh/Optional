import { Link } from "react-router-dom"
import { Facebook, Instagram, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react"
import logo from "../../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 theme-transition">
      <div className="container-custom mx-auto py-12 md:py-16">
        {/* Top section: Logo, text, icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo || "/placeholder.svg"} alt="Stair Ecosystem" className="h-10 w-10" />
              <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Stair Ecosystem</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Making the world a better place through sustainable energy solutions and advanced security systems.
            </p>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
              {/* Phone */}
              <a
                href="tel:+917305781227"
                className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917305781227"
                className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                className="hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourprofile"
                className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:stairecosytem@example.com"
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Products
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Our Products</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  to="/solar-brands"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Solar Panels
                </Link>
              </li>
              <li>
                <Link
                  to="/solar-categories/inverter"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Inverters
                </Link>
              </li>
              <li>
                <Link
                  to="/solar-categories/battery"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Batteries
                </Link>
              </li>
              <li>
                <Link
                  to="/cctv-brands"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> CCTV Cameras
                </Link>
              </li>
              <li>
                <Link
                  to="/cctv/wireless"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" /> Wireless Cameras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">Contact Us</h4>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-3">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>
                  No.12, 1st Floor, Sundaram, Complex, Rahman nagar, Thanjavur P&t Colony, Thanjavur-613006, Tamil Nadu.
                </span>
              </p>
              <p>
                <a href="tel:+917305781227" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  📞 +91 73057 81227
                </a>
              </p>
              <p>
                <a
                  href="mailto:stairecosystem@gmail.com"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  📧 stairecosystem@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom section: Copyright and links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Stair Ecosystem Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/sitemap"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

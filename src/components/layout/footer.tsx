import React from "react";
import Link from "next/link";
import {
  FaNewspaper,
  FaSignal,
  FaLanguage,
  FaInfoCircle,
  FaShoppingCart,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaGithub,
  FaTelegram
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#464e71] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kodular Column */}
          <div>
            <div className="mb-8 md:mb-0">
              <h5 className="text-xl font-bold mb-4 font-jost">Kodular</h5>
              <p className="text-sm">Koded with ❤️</p>
            </div>
          </div>

          {/* More Column */}
          <div>
            <h5 className="text-xl font-bold mb-4 font-jost">More</h5>
            <ul>
              <li className="mb-2">
                <Link href="https://blog.kodular.io" className="flex items-center hover:text-gray-300 transition-colors" target="_blank">
                  <FaNewspaper className="mr-3 w-4 h-4" /> Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://status.kodular.io" className="flex items-center hover:text-gray-300 transition-colors" target="_blank">
                  <FaSignal className="mr-3 w-4 h-4" /> Check server status
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://translate.kodular.io" className="flex items-center hover:text-gray-300 transition-colors" target="_blank">
                  <FaLanguage className="mr-3 w-4 h-4" /> Help us translate
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://legal.junnovate.com/kodular/tos/" className="flex items-center hover:text-gray-300 transition-colors" target="_blank">
                  <FaInfoCircle className="mr-3 w-4 h-4" /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop & Contact Column */}
          <div>
            <h5 className="text-xl font-bold mb-4 font-jost">Shop</h5>
            <p className="mb-4">
              <Link href="https://shop.kodular.io" className="flex items-center hover:text-gray-300 transition-colors" target="_blank">
                <FaShoppingCart className="mr-3 w-4 h-4" /> Buy our merch
              </Link>
            </p>

            <h5 className="text-xl font-bold mb-4 mt-6 font-jost">Contact</h5>
            <p className="mb-2">
              <Link href="mailto:support@kodular.io" className="flex items-center hover:text-gray-300 transition-colors">
                <FaEnvelope className="mr-3 w-4 h-4" /> support@kodular.io
              </Link>
            </p>
            <p>Support hours: <abbr title="Saturday">Sat</abbr> - <abbr title="Sunday">Sun</abbr></p>
          </div>

          {/* Follow Us Column */}
          <div>
            <h5 className="text-xl font-bold mb-4 font-jost">Follow Us</h5>
            <div className="flex flex-wrap gap-3">
              <Link href="https://www.facebook.com/Kodular" target="_blank"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com/KodularIO" target="_blank"
                className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaTwitter />
              </Link>
              <Link href="https://kodul.ar/discord" target="_blank"
                className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaDiscord />
              </Link>
              <Link href="https://instagram.com/Kodular" target="_blank"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaInstagram />
              </Link>
              <Link href="https://github.com/Kodular" target="_blank"
                className="bg-gray-800 hover:bg-gray-900 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaGithub />
              </Link>
              <Link href="https://telegram.me/Kodular" target="_blank"
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full flex items-center justify-center w-10 h-10 transition-colors">
                <FaTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-6">
        <div className="container mx-auto">
          Junnovate Limited © 2025 - Kodular ® | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

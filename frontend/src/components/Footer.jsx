import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="https://customer-assets.emergentagent.com/job_natuna-catalyst/artifacts/op1443fw_NAZU%20Grub.png"
              alt="NAZU Group Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 leading-relaxed mb-4">
              Katalisator transformasi ekonomi Natuna melalui teknologi dan inovasi berkelanjutan.
            </p>
            <div className="flex space-x-3">
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 rounded-lg p-2 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 rounded-lg p-2 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={contactInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 rounded-lg p-2 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', id: 'hero' },
                { label: 'Tentang Kami', id: 'about' },
                { label: 'Layanan', id: 'services' },
                { label: 'NAZU Academy', id: 'academy' },
                { label: 'Kontak', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-3 text-slate-400">
              <li>NAZU IT Solutions</li>
              <li>Finance & Management</li>
              <li>Food Frozen & Packing</li>
              <li>NAZU Farm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <a href={`tel:${contactInfo.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-slate-400">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} NAZU Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

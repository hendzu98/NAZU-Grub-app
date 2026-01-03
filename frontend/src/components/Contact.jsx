import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-4 py-2 mb-4">
            <Mail className="text-cyan-400" size={20} />
            <span className="text-cyan-400 text-sm font-semibold">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kami siap membantu mewujudkan transformasi bisnis Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              
              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-cyan-500/10 rounded-lg p-3">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Telepon</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-cyan-500/10 rounded-lg p-3">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-cyan-500/10 rounded-lg p-3">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Alamat</div>
                  <p className="text-white">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500/10 hover:bg-cyan-500 rounded-lg p-3 transition-colors group"
                >
                  <Facebook className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                </a>
                <a
                  href={contactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500/10 hover:bg-cyan-500 rounded-lg p-3 transition-colors group"
                >
                  <Instagram className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                </a>
                <a
                  href={contactInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500/10 hover:bg-cyan-500 rounded-lg p-3 transition-colors group"
                >
                  <Linkedin className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                </a>
                <a
                  href={contactInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500/10 hover:bg-cyan-500 rounded-lg p-3 transition-colors group"
                >
                  <MessageCircle className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900 border-slate-700 text-white focus:border-cyan-500"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900 border-slate-700 text-white focus:border-cyan-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-900 border-slate-700 text-white focus:border-cyan-500"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subjek *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-900 border-slate-700 text-white focus:border-cyan-500"
                    placeholder="Layanan yang diminati"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Pesan *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-900 border-slate-700 text-white focus:border-cyan-500"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg"
              >
                {isSubmitting ? 'Mengirim...' : (
                  <>
                    Kirim Pesan
                    <Send className="ml-2" size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

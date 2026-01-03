import React from 'react';
import * as LucideIcons from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'map-pin': LucideIcons.MapPin,
      'network': LucideIcons.Network,
      'handshake': LucideIcons.Handshake,
      'badge-check': LucideIcons.BadgeCheck
    };
    const Icon = iconMap[iconName] || LucideIcons.Star;
    return <Icon size={32} />;
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 rounded-full px-4 py-2 mb-4">
            <LucideIcons.Sparkles className="text-cyan-600" size={20} />
            <span className="text-cyan-700 text-sm font-semibold">Keunggulan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mengapa Bermitra dengan NAZU?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Kami memahami tantangan unik Natuna dan mengubahnya menjadi peluang
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-cyan-100 group-hover:bg-cyan-500 rounded-lg w-16 h-16 flex items-center justify-center mb-4 transition-colors">
                <div className="text-cyan-600 group-hover:text-white transition-colors">
                  {getIcon(feature.icon)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

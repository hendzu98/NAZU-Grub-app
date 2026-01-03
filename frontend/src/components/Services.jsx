import React from 'react';
import * as LucideIcons from 'lucide-react';
import { businessUnits } from '../data/mock';

const Services = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'monitor': LucideIcons.Monitor,
      'calculator': LucideIcons.Calculator,
      'package': LucideIcons.Package,
      'leaf': LucideIcons.Leaf
    };
    const Icon = iconMap[iconName] || LucideIcons.Briefcase;
    return <Icon size={32} />;
  };

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-4 py-2 mb-4">
            <LucideIcons.Briefcase className="text-cyan-400" size={20} />
            <span className="text-cyan-400 text-sm font-semibold">Layanan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pilar Bisnis NAZU Group
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empat unit bisnis terintegrasi untuk mendukung transformasi ekonomi Natuna
          </p>
        </div>

        {/* Business Units Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/20 relative"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">0{index + 1}</span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-cyan-500/10 group-hover:bg-cyan-500 rounded-xl p-4 transition-colors duration-300">
                  <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                    {getIcon(unit.icon)}
                  </div>
                </div>
                <div className="flex-1 pr-12">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">{unit.shortDesc}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {unit.description}
              </p>

              {/* Services List */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Layanan:</div>
                {unit.services.map((service, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

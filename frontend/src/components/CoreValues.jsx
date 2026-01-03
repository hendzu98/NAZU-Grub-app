import React from 'react';
import * as LucideIcons from 'lucide-react';
import { coreValues } from '../data/mock';

const CoreValues = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'shield-check': LucideIcons.ShieldCheck,
      'users': LucideIcons.Users,
      'graduation-cap': LucideIcons.GraduationCap,
      'award': LucideIcons.Award
    };
    const Icon = iconMap[iconName] || LucideIcons.Star;
    return <Icon size={40} />;
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 rounded-full px-4 py-2 mb-4">
            <LucideIcons.Heart className="text-cyan-600" size={20} />
            <span className="text-cyan-700 text-sm font-semibold">Nilai Utama</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Core Values
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Prinsip fundamental yang memandu setiap langkah kami
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 group hover:shadow-xl text-center"
            >
              {/* Icon */}
              <div className="bg-cyan-100 group-hover:bg-cyan-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <div className="text-cyan-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(value.icon)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                {value.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

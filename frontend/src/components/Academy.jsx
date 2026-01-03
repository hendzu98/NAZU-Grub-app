import React from 'react';
import { GraduationCap, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { nazuAcademy } from '../data/mock';

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="text-cyan-400" size={20} />
              <span className="text-cyan-400 text-sm font-semibold">Program CSR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {nazuAcademy.title}
            </h2>
            <p className="text-cyan-400 text-xl font-medium mb-4">{nazuAcademy.subtitle}</p>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              {nazuAcademy.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            {nazuAcademy.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Programs */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {nazuAcademy.programs.map((program, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="bg-cyan-500/10 group-hover:bg-cyan-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4 transition-colors">
                  <CheckCircle className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {program.name}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Durasi: {program.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Tertarik untuk bergabung atau mendukung program kami?
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;

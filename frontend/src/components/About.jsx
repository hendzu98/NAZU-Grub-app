import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';
import { visionMission } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 rounded-full px-4 py-2 mb-4">
            <Sparkles className="text-cyan-600" size={20} />
            <span className="text-cyan-700 text-sm font-semibold">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visi & Misi
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Komitmen kami dalam membangun ekonomi Natuna yang berkelanjutan
          </p>
        </div>

        {/* Vision */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-cyan-100 rounded-xl p-3">
                <Target className="text-cyan-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Visi Kami</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {visionMission.vision}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Missions */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-8 justify-center">
            <Compass className="text-cyan-600" size={28} />
            <h3 className="text-3xl font-bold text-slate-900">Misi Kami</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visionMission.missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {mission.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">About GetStatSure</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            We are dedicated to providing absolute statutory assurance through expert auditing and regulatory compliance services.
          </p>
          <div className="w-20 h-2 bg-orange-500 mx-auto rounded-full mt-8"></div>
        </div>

        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Meet Our Team</h2>
          </div>

          <div className="flex justify-center">
            {/* Profile Card */}
            <div className="group w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-32 h-32 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <User size={64} className="text-inherit" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">K Sarat Kumar</h3>
                <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-10">Founder & MD</p>
                <button 
                  onClick={() => {
                    navigate('/about-us/sarat-kumar');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
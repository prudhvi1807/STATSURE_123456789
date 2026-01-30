
import React from 'react';
import { Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001a33] text-blue-100 pt-24 pb-12 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <div className="flex">
                <span className="text-white">GET</span>
                <span className="text-orange-500">STAT</span>
                <span className="text-white">SURE</span>
              </div>
            </div>
            <p className="text-sm leading-loose opacity-70">
              India's premier statutory assurance firm providing ISO certifications and statutory filings for established corporations and high-growth startups.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 text-blue-100 hover:bg-orange-500 hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 text-blue-100 hover:bg-blue-400 hover:text-white transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Certifications</h4>
            <ul className="space-y-5 text-sm opacity-80">
              <li><a href="#" className="hover:text-orange-400 transition-colors">ISO 9001 (Quality)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">ISO 27001 (Security)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">ISO 14001 (Environment)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">CE Marking</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">GMP Certification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Statutory Services</h4>
            <ul className="space-y-5 text-sm opacity-80">
              <li><a href="#" className="hover:text-orange-400 transition-colors">MSME/Udyam Reg</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shop & Establishment</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Professional Tax</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">GST Audit & Filings</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Compliance Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Auditor Connect</h4>
            <ul className="space-y-6 text-sm opacity-80">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-orange-500 flex-shrink-0" />
                <span className="leading-relaxed">Assurance House, Jubilee Hills, Hyderabad, TS 500033</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-orange-500" />
                <span>1800-STAT-SURE</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-orange-500" />
                <span>assurance@getstatsure.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <p>© 2024 GETSTATSURE ASSURANCE PVT LTD. ALL STATUTORY RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

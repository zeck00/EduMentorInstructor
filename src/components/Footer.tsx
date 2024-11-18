import { HelpCircle } from 'lucide-react';
import appLogo from '/assets/applogo.png';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-3">
            <img 
              src={appLogo} 
              alt="EduMentor Logo" 
              className="h-10 w-10 rounded-[15px]"
            />
            <span className="text-xl font-semibold">
              <span className="text-black">Edu</span>
              <span className="text-primary">Mentor</span>
            </span>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href="https://sharjah.ac.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              University of Sharjah
            </a>
            <a 
              href="https://sharjah.ac.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              Help Center
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6">
          <Copyright />
        </div>
      </div>
    </footer>
  );
} 
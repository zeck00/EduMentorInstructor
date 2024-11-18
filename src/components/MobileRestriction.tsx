import { GraduationCap, Monitor } from 'lucide-react';
import appLogo from '/assets/applogo.png';
import Copyright from './Copyright';

export default function MobileRestriction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="flex flex-col items-center">
          <img 
            src={appLogo} 
            alt="EduMentor Logo" 
            className="h-16 w-16 mb-4 rounded-[15px]"
          />
          <GraduationCap className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Desktop Access Only
          </h2>
          <p className="text-gray-600 mb-6">
            Please open EduMentor Instructor Portal on your desktop for the best experience.
          </p>
          <Monitor className="h-20 w-20 text-primary/60" />
        </div>
        <Copyright />
      </div>
    </div>
  );
} 
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import appLogo from '/assets/applogo.png';
import Notification from '../components/Notification';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    // Show notification after a short delay for better UX
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center p-4">
      {/* Welcome Notification */}
      <Notification
        message="Welcome to the EduMentor Instructor Panel"
        subMessage="If you're not an instructor, please use the mobile app for students!"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg animate-fadeIn">
        {/* Logo and Title Section */}
        <div className="text-center space-y-6 animate-slideDown">
          <img 
            src={appLogo} 
            alt="EduMentor Logo" 
            className="h-24 w-24 mx-auto rounded-[15pt] animate-scaleIn"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold animate-slideRight">
              <span className="text-gray-900">Edu</span>
              <span className="text-primary">Mentor</span>
            </h1>
            <h2 className="text-xl text-gray-600 font-medium animate-slideLeft">
              Instructor Portal
            </h2>
          </div>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Links Section */}
        <div className="mt-6 flex items-center justify-center space-x-4 text-sm">
          <Link 
            to="/privacy-policy" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-300">|</span>
          <Link 
            to="/terms" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* University Attribution */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            University of Sharjah © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
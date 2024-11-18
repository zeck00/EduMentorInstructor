import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseDetails from './pages/CourseDetails';
import CoursesPage from './pages/CoursesPage';
import SettingsPage from './pages/SettingsPage';
import ProtectedRoute from './components/ProtectedRoute';
import MobileRestriction from './components/MobileRestriction';
import Footer from './components/Footer';
import { useAuthStore } from './store/authStore';
import { useThemeStore } from './store/themeStore';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

const queryClient = new QueryClient();

// Create a public route wrapper for privacy and terms pages
function PublicPageWrapper({ children }: { children: React.ReactNode }) {
  const isDark = useThemeStore((state) => state.isDark);
  
  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen flex flex-col`}>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isDark = useThemeStore((state) => state.isDark);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col">
        <MobileRestriction />
        <Footer />
      </div>
    );
  }

  // Handle public routes separately
  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen`}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/privacy-policy" element={
              <PublicPageWrapper>
                <PrivacyPolicyPage />
              </PublicPageWrapper>
            } />
            <Route path="/terms" element={
              <PublicPageWrapper>
                <TermsPage />
              </PublicPageWrapper>
            } />

            {/* Auth Routes */}
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/courses" element={
                  <ProtectedRoute>
                    <CoursesPage />
                  </ProtectedRoute>
                } />
                <Route path="/courses/:id" element={
                  <ProtectedRoute>
                    <CourseDetails />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                } />
                <Route path="/about" element={
                  <ProtectedRoute>
                    <AboutPage />
                  </ProtectedRoute>
                } />
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/login" element={<Navigate to="/dashboard" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isPublicAccess = !isAuthenticated;

  const content = (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <button
        onClick={() => navigate(isAuthenticated ? '/dashboard' : '/login')}
        className="flex items-center text-primary hover:text-primary/80 mb-4"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to {isAuthenticated ? 'Dashboard' : 'Login'}
      </button>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy for EduMentor Platform</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 16th Nov, 2024</p>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            EduMentor ("the Platform") is developed under the auspices of the University of Sharjah ("the University") to serve as a customized tutoring assistant and instructor dashboard, specifically designed for the Health and Nutrition course. The Platform is committed to protecting the privacy of its users while delivering an effective teaching and learning experience. This Privacy Policy outlines how EduMentor collects, uses, and protects your information.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">1.1 Personal Information:</h3>
          <p className="text-gray-700 mb-2">When you register or interact with the Platform, we may collect personal information such as:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li>Name</li>
            <li>Student or Instructor ID</li>
            <li>Email address</li>
            <li>Academic course details</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">1.2 Usage Data:</h3>
          <p className="text-gray-700 mb-2">The Platform automatically collects certain information about your device and usage of the Platform, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li>Device type and operating system</li>
            <li>Usage statistics and platform interaction details</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">1.3 Academic Data:</h3>
          <p className="text-gray-700 mb-2">As part of its functionality, the Platform may collect information such as:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Quiz scores</li>
            <li>Chapter performance</li>
            <li>Skill assessments (students)</li>
            <li>Class performance metrics (instructors)</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">The information collected is used for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To personalize the tutoring experience for students based on their performance and preferences.</li>
            <li>To generate customized quizzes, assessments, and class performance reports.</li>
            <li>To monitor platform usage and improve its functionality.</li>
            <li>To provide technical support for students and instructors.</li>
          </ul>
        </div>

        {/* Continue with other sections... */}
        <div className="space-y-8">
          {[
            {
              title: "3. Sharing of Information",
              content: "EduMentor does not share your personal information with third parties except within the University of Sharjah to support academic evaluation, instructional insights, and research under the University's guidelines, or if required to do so by law."
            },
            {
              title: "4. Data Security",
              content: "We employ industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic storage or transmission over the internet is 100% secure."
            },
            {
              title: "5. Data Retention",
              content: "Your personal and academic data will be retained as long as necessary to fulfill the purposes outlined in this policy. Upon graduation or completion of your instructional role, your data may be anonymized or deleted in accordance with University policies."
            },
            {
              title: "6. Your Rights",
              content: "You have the right to access your data, request corrections to any inaccuracies, and request the deletion of your personal data (subject to academic or legal constraints)."
            }
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or the Platform's practices, please contact us at:
          </p>
          <p className="text-primary font-medium mt-2">
            University of Sharjah's IT Department<br />
            Email: servicedesk@sharjah.ac.ae
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-500 italic">
          By using EduMentor, you acknowledge that you have read, understood, and agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );

  // If accessed through the dashboard, wrap in Layout
  if (isAuthenticated) {
    return <Layout>{content}</Layout>;
  }

  // If accessed publicly, return content directly
  return content;
} 
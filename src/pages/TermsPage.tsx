import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions for EduMentor Platform</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 16th Nov, 2024</p>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to EduMentor, a platform developed under the auspices of the University of Sharjah ("the University"). By accessing or using EduMentor ("the Platform"), you agree to comply with these Terms and Conditions ("Terms"). These Terms govern your use of the Platform and outline the rights and responsibilities of all parties involved. If you do not agree to these Terms, please refrain from using the Platform.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-2">By registering for and using EduMentor, you confirm that:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You are a student or staff member of the University of Sharjah or have obtained explicit permission to use the Platform.</li>
            <li>You have read and agree to be bound by these Terms and any applicable University policies.</li>
          </ul>
        </div>

        {/* Purpose */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Purpose of the Platform</h2>
          <p className="text-gray-700 leading-relaxed">
            EduMentor is designed to provide personalized tutoring and educational support for students, as well as instructional dashboards for instructors, specifically tailored for the Health and Nutrition course. The Platform's features are intended to enhance learning outcomes, facilitate academic success, and support teaching effectiveness.
          </p>
        </div>

        {/* User Accounts */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
          
          <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">3.1 Registration:</h3>
          <p className="text-gray-700 mb-4">
            You must register using valid University credentials or other approved methods. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">3.2 Account Suspension or Termination:</h3>
          <p className="text-gray-700 mb-2">The University reserves the right to suspend or terminate accounts if:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>You violate these Terms.</li>
            <li>Unauthorized activity is detected.</li>
            <li>Your enrollment or employment at the University ends.</li>
          </ul>
        </div>

        {/* Map through remaining sections */}
        {[
          {
            title: "4. User Responsibilities",
            content: [
              "Use the Platform solely for educational and instructional purposes.",
              "Provide accurate and up-to-date information.",
              "Not engage in activities that disrupt or interfere with the Platform's functionality.",
              "Respect the intellectual property rights associated with the Platform's content and features."
            ]
          },
          {
            title: "5. Prohibited Activities",
            content: [
              "Attempt to hack, reverse-engineer, or otherwise tamper with the Platform.",
              "Share or distribute copyrighted materials accessed via the Platform without proper authorization.",
              "Use the Platform for any activity that violates University policies or UAE laws."
            ]
          },
          {
            title: "6. Intellectual Property Rights",
            text: "All intellectual property related to EduMentor, including but not limited to content, features, logos, and design, is the property of the University of Sharjah or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited."
          },
          {
            title: "7. Limitation of Liability",
            content: [
              "Any loss or damage resulting from your use of the Platform.",
              "Interruptions or errors in Platform functionality.",
              "Unauthorized access to your account due to negligence in securing your credentials."
            ],
            prefix: "The University of Sharjah is not liable for:"
          }
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
            {section.text ? (
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            ) : (
              <>
                {section.prefix && <p className="text-gray-700 mb-2">{section.prefix}</p>}
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.content?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or concerns about these Terms, please contact us at:
          </p>
          <p className="text-primary font-medium mt-2">
            University of Sharjah, IT Department<br />
            Email: servicedesk@sharjah.ac.ae
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-500 italic">
          By accessing and using EduMentor, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
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
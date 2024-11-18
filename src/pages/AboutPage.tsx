import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Main About Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            EduMentor is a groundbreaking platform designed to revolutionize the educational experience for both students and instructors at the University of Sharjah (UOS) 📚💻. Tailored specifically for the Health and Nutrition course 🥗🩺, EduMentor combines personalized tutoring and advanced dashboards with cutting-edge technology 💡🔬 to assess and enhance teaching and learning outcomes.
          </p>

          {/* Our Story Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              EduMentor was developed with the generous support of a grant from the Chancellor of the University of Sharjah 🎓🤝. The project was a collaborative effort, bringing together expertise and passion 💪💼 from multiple disciplines to create a tool that truly supports academic success 🏆.
            </p>
          </div>

          {/* Supervision Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supervision and Guidance</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The development of EduMentor was supervised by:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  Dr. Ayad Turky 👨‍🏫💻, Assistant Professor in the Department of Computer Science, whose technical insights and guidance shaped the platform's functionality.
                </li>
                <li>
                  Prof. Mohamed Alameddine 👨‍⚕️📖, Dean of the College of Health Sciences, who ensured the platform's alignment with educational goals in the health sciences field.
                </li>
                <li>
                  Prof. Abbes Amira 👨‍💻🏛️, Dean of the College of Computing and Informatics, whose leadership in computing innovation supported the platform's technical excellence.
                </li>
              </ul>
            </div>
          </div>

          {/* Development Team Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Development Team</h2>
            <p className="text-gray-700 leading-relaxed">
              At the heart of EduMentor's creation is{' '}
              <a 
                href="https://linkedin.com/in/ziad-aloush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Ziad Ahmad
              </a>{' '}
              💻✨, the platform's main developer. Ziad combined his skills in programming, artificial intelligence 🤖, and user experience design 🎨 to bring the vision of EduMentor to life. His dedication and technical expertise ensured the platform meets the highest standards of quality and usability 🔝✅.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower both students and instructors with tools 🛠�� that enhance learning and teaching, provide real-time feedback ⏱️, and foster academic growth 📈. By leveraging AI-driven insights and personalized assessments 🧠📊, EduMentor aims to support the entire academic journey 🌟.
            </p>
          </div>

          {/* Acknowledgments Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acknowledgments</h2>
            <p className="text-gray-700 leading-relaxed">
              EduMentor is a testament to the collaborative spirit of the University of Sharjah 🤝🏫. We thank all faculty members, students, and staff who contributed to its development and success 🙏🎉. Together, we strive to create innovative solutions that benefit our academic community and beyond 🌍✨.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
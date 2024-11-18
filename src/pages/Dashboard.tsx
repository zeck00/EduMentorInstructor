import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Book, Users, Clock, ArrowRight, TrendingUp, ChevronDown, BookOpen, Award } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';

// Define types for our data structure
interface ChapterData {
  name: string;
  completion: number;
  avgScore: number;
  engagement: number;
}

interface CourseData {
  chapters: ChapterData[];
  totalStudents: number;
  overallProgress: number;
  topPerformers: number;
}

interface CoursePerformanceData {
  [key: string]: CourseData;
}

// Sample course data for the course cards
const activeCourses = [
  {
    id: '1',
    title: 'Clinical Anatomy & Physiology',
    students: 120,
    progress: 75,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Medical Ethics & Patient Care',
    students: 85,
    progress: 60,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Clinical Diagnostics',
    students: 95,
    progress: 45,
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// Sample data structure for course performance
const coursePerformanceData: CoursePerformanceData = {
  'Clinical Anatomy & Physiology': {
    chapters: [
      { name: 'Introduction to Anatomy', completion: 95, avgScore: 85, engagement: 90 },
      { name: 'Cardiovascular System', completion: 88, avgScore: 78, engagement: 85 },
      { name: 'Respiratory System', completion: 75, avgScore: 82, engagement: 88 },
      { name: 'Nervous System', completion: 70, avgScore: 75, engagement: 80 },
    ],
    totalStudents: 120,
    overallProgress: 75,
    topPerformers: 28,
  },
  'Medical Ethics & Patient Care': {
    chapters: [
      { name: 'Ethical Principles', completion: 92, avgScore: 88, engagement: 95 },
      { name: 'Patient Rights', completion: 85, avgScore: 82, engagement: 88 },
      { name: 'Case Studies', completion: 78, avgScore: 75, engagement: 82 },
      { name: 'Cultural Competency', completion: 72, avgScore: 78, engagement: 85 },
    ],
    totalStudents: 85,
    overallProgress: 60,
    topPerformers: 15,
  },
  'Clinical Diagnostics': {
    chapters: [
      { name: 'Laboratory Tests', completion: 88, avgScore: 82, engagement: 85 },
      { name: 'Imaging Basics', completion: 82, avgScore: 78, engagement: 80 },
      { name: 'Diagnostic Procedures', completion: 75, avgScore: 72, engagement: 78 },
      { name: 'Results Interpretation', completion: 70, avgScore: 75, engagement: 82 },
    ],
    totalStudents: 95,
    overallProgress: 45,
    topPerformers: 12,
  },
  'Emergency Medicine Basics': {
    chapters: [
      { name: 'Triage Basics', completion: 90, avgScore: 85, engagement: 92 },
      { name: 'Emergency Response', completion: 85, avgScore: 80, engagement: 88 },
      { name: 'Critical Care', completion: 78, avgScore: 75, engagement: 82 },
      { name: 'Emergency Procedures', completion: 72, avgScore: 70, engagement: 78 },
    ],
    totalStudents: 110,
    overallProgress: 65,
    topPerformers: 20,
  },
  'Pharmacology Fundamentals': {
    chapters: [
      { name: 'Drug Classifications', completion: 92, avgScore: 88, engagement: 90 },
      { name: 'Pharmacokinetics', completion: 85, avgScore: 82, engagement: 85 },
      { name: 'Drug Interactions', completion: 80, avgScore: 78, engagement: 82 },
      { name: 'Clinical Applications', completion: 75, avgScore: 72, engagement: 78 },
    ],
    totalStudents: 105,
    overallProgress: 70,
    topPerformers: 22,
  },
  'Surgical Techniques': {
    chapters: [
      { name: 'Aseptic Technique', completion: 95, avgScore: 90, engagement: 95 },
      { name: 'Basic Procedures', completion: 88, avgScore: 85, engagement: 90 },
      { name: 'Surgical Tools', completion: 82, avgScore: 80, engagement: 85 },
      { name: 'Post-Op Care', completion: 78, avgScore: 75, engagement: 80 },
    ],
    totalStudents: 75,
    overallProgress: 55,
    topPerformers: 18,
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string>('Clinical Anatomy & Physiology');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentCourseData = coursePerformanceData[selectedCourse];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Course Selector */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full md:w-96 flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-900">{selectedCourse}</span>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 w-full md:w-96 mt-2 bg-white rounded-lg shadow-lg border border-gray-100">
              {Object.keys(coursePerformanceData).map((course) => (
                <button
                  key={course}
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {course}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value={currentCourseData.totalStudents.toString()}
            icon={<Users className="h-6 w-6 text-blue-600" />}
            trend={`${currentCourseData.totalStudents > 100 ? 'High' : 'Normal'} Enrollment`}
          />
          <StatCard
            title="Overall Progress"
            value={`${currentCourseData.overallProgress}%`}
            icon={<TrendingUp className="h-6 w-6 text-green-600" />}
            trend="Based on all chapters"
          />
          <StatCard
            title="Top Performers"
            value={currentCourseData.topPerformers.toString()}
            icon={<Award className="h-6 w-6 text-yellow-600" />}
            trend="Students above 85%"
          />
          <StatCard
            title="Active Chapters"
            value={currentCourseData.chapters.length.toString()}
            icon={<Book className="h-6 w-6 text-purple-600" />}
            trend="All chapters published"
          />
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chapter Completion & Scores */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Chapter Performance Overview</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentCourseData.chapters}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar name="Completion Rate (%)" dataKey="completion" fill="#39B285" />
                  <Bar name="Average Score (%)" dataKey="avgScore" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Student Engagement Trends */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Student Engagement Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentCourseData.chapters}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    name="Engagement Rate (%)"
                    dataKey="engagement" 
                    stroke="#39B285" 
                    strokeWidth={2}
                    dot={{ fill: '#39B285' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Active Courses Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Courses</h3>
            <button 
              onClick={() => navigate('/courses')} 
              className="text-primary hover:text-primary/80 flex items-center gap-1"
            >
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
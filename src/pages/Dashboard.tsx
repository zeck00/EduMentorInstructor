import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Book, Users, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';

const performanceData = [
  { name: 'Module 1', engagement: 65 },
  { name: 'Module 2', engagement: 75 },
  { name: 'Module 3', engagement: 85 },
  { name: 'Module 4', engagement: 82 },
];

const courses = [
  {
    id: '1',
    title: 'Clinical Anatomy & Physiology',
    students: 120,
    progress: 75,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    title: 'Medical Ethics & Patient Care',
    students: 85,
    progress: 60,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    title: 'Clinical Diagnostics',
    students: 95,
    progress: 45,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    title: 'Emergency Medicine Basics',
    students: 75,
    progress: 80,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '5',
    title: 'Pharmacology Fundamentals',
    students: 110,
    progress: 65,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '6',
    title: 'Surgical Techniques',
    students: 65,
    progress: 40,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Courses"
            value="12"
            icon={<Book className="h-6 w-6 text-blue-600" />}
            trend="+2 this month"
          />
          <StatCard
            title="Total Students"
            value="450"
            icon={<Users className="h-6 w-6 text-green-600" />}
            trend="+45 this month"
          />
          <StatCard
            title="Average Engagement"
            value="85%"
            icon={<Clock className="h-6 w-6 text-purple-600" />}
            trend="+5% this month"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Student Engagement Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagement" fill="#39B285" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

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
            {courses.map((course) => (
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
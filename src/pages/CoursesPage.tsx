import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, File, Trash2, Search, Plus } from 'lucide-react';
import Layout from '../components/Layout';

const courses = [
  {
    id: '1',
    title: 'Clinical Anatomy & Physiology',
    materials: [
      { id: 1, name: 'Week 1 - Introduction to Human Anatomy.pdf', size: '2.5 MB', type: 'PDF' },
      { id: 2, name: 'Cardiovascular System Overview.pdf', size: '1.2 MB', type: 'PDF' },
    ],
  },
  {
    id: '2',
    title: 'Medical Ethics & Patient Care',
    materials: [
      { id: 3, name: 'Patient Confidentiality Guidelines.pdf', size: '3.1 MB', type: 'PDF' },
      { id: 4, name: 'Case Studies in Medical Ethics.pdf', size: '2.8 MB', type: 'PDF' },
    ],
  },
  {
    id: '3',
    title: 'Clinical Diagnostics',
    materials: [
      { id: 5, name: 'Laboratory Test Interpretations.pdf', size: '4.2 MB', type: 'PDF' },
      { id: 6, name: 'Diagnostic Imaging Basics.pdf', size: '3.5 MB', type: 'PDF' },
    ],
  },
  {
    id: '4',
    title: 'Emergency Medicine Basics',
    materials: [
      { id: 7, name: 'Triage Protocols.pdf', size: '3.8 MB', type: 'PDF' },
      { id: 8, name: 'Emergency Response Guidelines.pdf', size: '2.9 MB', type: 'PDF' },
    ],
  },
  {
    id: '5',
    title: 'Pharmacology Fundamentals',
    materials: [
      { id: 9, name: 'Drug Classifications.pdf', size: '5.1 MB', type: 'PDF' },
      { id: 10, name: 'Medication Administration.pdf', size: '3.2 MB', type: 'PDF' },
    ],
  },
  {
    id: '6',
    title: 'Surgical Techniques',
    materials: [
      { id: 11, name: 'Aseptic Technique Guidelines.pdf', size: '4.5 MB', type: 'PDF' },
      { id: 12, name: 'Basic Surgical Procedures.pdf', size: '6.2 MB', type: 'PDF' },
    ],
  }
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => {}}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Course
          </button>
        </div>

        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div
                className="p-6 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleCourse(course.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {course.materials.length} materials
                </p>
              </div>

              {expandedCourse === course.id && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-700">Course Materials</h4>
                    <button
                      onClick={() => {}}
                      className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                    >
                      <Upload className="h-4 w-4 mr-1" />
                      Upload Material
                    </button>
                  </div>

                  <div className="space-y-2">
                    {course.materials.map((material) => (
                      <div
                        key={material.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <File className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              {material.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {material.type} • {material.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {}}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Upload className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {}}
                            className="text-red-400 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
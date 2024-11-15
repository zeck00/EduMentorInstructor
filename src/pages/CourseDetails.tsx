import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Upload, File, Trash2, Users, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';

const materials = [
  { id: 1, name: 'Course Introduction.pdf', type: 'PDF', size: '2.5 MB' },
  { id: 2, name: 'Week 1 Lecture.mp4', type: 'Video', size: '156 MB' },
  { id: 3, name: 'Assignment Guidelines.docx', type: 'Document', size: '1.2 MB' }
];

export default function CourseDetails() {
  const { id } = useParams();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload here
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction to Computer Science</h2>
              <div className="mt-2 flex items-center gap-4">
                <span className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-1" />
                  120 Students
                </span>
                <span className="flex items-center text-gray-600">
                  <BookOpen className="h-5 w-5 mr-1" />
                  12 Weeks
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Course Materials</h3>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? 'border-primary bg-primary/10' : 'border-gray-300'
            }`}
            
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your files here, or{' '}
              <button className="text-indigo-600 hover:text-indigo-800">browse</button>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Support for PDF, DOC, DOCX, MP4, and more
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Uploaded Materials</h4>
            <div className="space-y-3">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <File className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{material.name}</p>
                      <p className="text-xs text-gray-500">{material.type} • {material.size}</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
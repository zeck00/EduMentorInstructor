interface CourseCardProps {
  id: string;
  title: string;
  students: number;
  progress: number;
  image: string;
  onClick: () => void;
}

export default function CourseCard({ title, students, progress, image, onClick }: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{students} Students</span>
          <span>{progress}% Complete</span>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
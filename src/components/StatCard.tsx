interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

export default function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="bg-primary/10 rounded-lg p-3">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">{trend}</p>
    </div>
  );
}
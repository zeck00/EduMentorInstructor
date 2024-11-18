import { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  subMessage?: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Notification({ message, subMessage, isVisible, onClose }: NotificationProps) {
  const [animation, setAnimation] = useState('translate-y-[-100%]');

  useEffect(() => {
    if (isVisible) {
      setAnimation('translate-y-0');
      const timer = setTimeout(() => {
        setAnimation('translate-y-[-100%] opacity-0');
        setTimeout(onClose, 300);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 max-w-sm bg-white rounded-lg shadow-lg border-l-4 border-primary transform transition-all duration-300 ${animation}`}
    >
      <div className="p-4 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{message}</p>
          {subMessage && (
            <p className="mt-1 text-sm text-gray-500">{subMessage}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
} 
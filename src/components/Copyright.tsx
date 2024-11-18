interface CopyrightProps {
  variant?: 'light' | 'dark';
}

export default function Copyright({ variant = 'dark' }: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={`text-sm text-center ${
      variant === 'light' ? 'text-gray-200' : 'text-gray-500'
    }`}>
      © {currentYear} EduMentor from University Of Sharjah. All rights reserved.
    </div>
  );
} 
import React from 'react';

interface ReferencedSection {
  id: string;
  title: string;
  url?: string;
}

interface ClickableSectionProps {
  section: ReferencedSection;
  onSectionClick: (sectionId: string, section?: ReferencedSection) => void;
  className?: string;
}

const ClickableSection: React.FC<ClickableSectionProps> = ({ 
  section, 
  onSectionClick, 
  className = '' 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSectionClick(section.id, section);
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <button
        onClick={handleClick}
        className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200 cursor-pointer"
        title={`Click to navigate to: ${section.title}`}
      >
        <svg 
          className="w-3 h-3 mr-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
          />
        </svg>
        {section.title}
      </button>
    </div>
  );
};

export default ClickableSection; 
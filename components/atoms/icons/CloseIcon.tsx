interface CloseIconProps {
  onClose: () => void;
}

export const CloseIcon = ({ onClose }: CloseIconProps) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}; 
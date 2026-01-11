import { useEffect } from "react";

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-sky-500 text-white px-5 py-3 rounded-lg shadow-lg animate-slide-in">
      {message}
    </div>
  );
};

export default Toast;

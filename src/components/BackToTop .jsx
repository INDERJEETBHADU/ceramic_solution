import { useEffect, useState } from "react";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-red text-white p-2 rounded-[50%] size-10 shadow-lg hover:bg-red-700 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;

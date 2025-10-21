import { useNavigate } from "react-router-dom";

export function useScrollToSection() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const attemptScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        requestAnimationFrame(attemptScroll); // retry next frame
      }
    };
    setTimeout(() => attemptScroll(), 200);
  };

  const goToSection = (path: string, sectionId?: string) => {
    if (sectionId) {
      navigate(path); // navigate first
      // scroll after navigation
      requestAnimationFrame(() => scrollToSection(sectionId));

    } else {
      navigate(path);

    }
  };

  return goToSection;
}

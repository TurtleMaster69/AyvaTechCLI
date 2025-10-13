import { useNavigate } from "react-router-dom";

export function useScrollToContactSection() {
const navigate = useNavigate();

const handleClick = () => {
  navigate("/contact");

  const scrollToSection = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      const y =
        window.scrollY +
        el.getBoundingClientRect().top -
        50; // offset 100px above the section
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // try again on next frame if element is not yet rendered
      requestAnimationFrame(scrollToSection);
    }
  };

  setTimeout(() => scrollToSection(), 200);
  };

  return handleClick;
}

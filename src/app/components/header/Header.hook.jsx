import { useEffect, useState } from "react";

export function useHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Products", "Solutions", "Pricing", "Resources"];

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    menuOpen,
    toggleMenu,
    navItems,
  };
}

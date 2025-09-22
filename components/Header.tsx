import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentScrollTimeout = scrollTimeout;
    
    const handleScroll = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { scrollY, scrollDirection } = customEvent.detail;

      // Track if user has scrolled for the first time
      if (!hasScrolled && scrollY > 10) {
        setHasScrolled(true);
      }

      // Set background blur effect
      setIsScrolled(scrollY > 50);

      // Navigation visibility logic with improved scroll direction tracking
      const scrollDifference = scrollY - lastScrollY.current;
      
      if (scrollY < 100) {
        // Always show at the top
        setIsVisible(true);
      } else if (scrollDirection === "up" && scrollDifference < -5) {
        // Show when scrolling up with meaningful movement
        setIsVisible(true);
      } else if (scrollDirection === "down" && scrollDifference > 5) {
        // Hide when scrolling down with meaningful movement
        setIsVisible(false);
      }
      // Don't change visibility for small movements or when direction hasn't meaningfully changed

      // Clear existing timeout
      if (currentScrollTimeout.current) {
        clearTimeout(currentScrollTimeout.current);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("premiumScroll", handleScroll);
    return () => {
      window.removeEventListener("premiumScroll", handleScroll);
      if (currentScrollTimeout.current) {
        clearTimeout(currentScrollTimeout.current);
      }
    };
  }, [hasScrolled]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-gray-200/30 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      style={{
        top: isVisible ? "0" : "-100px",
        backdropFilter: isScrolled ? "blur(12px) saturate(120%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px) saturate(120%)" : "none",
        transform: `translateY(${isVisible ? "0" : "-100%"})`,
        transition:
          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), top 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s ease-out, backdrop-filter 0.5s ease-out",
      }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer flex items-center space-x-2 h-6 w-28 sm:w-36"
        >
          <Image
            src="/logo-with-text.svg"
            alt="Lumist Logo"
            height={24}
            width={0}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <button
            onClick={() => handleNavClick("home")}
            className="cursor-pointer text-gray-600 font-medium hover:text-black transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("benefits")}
            className="cursor-pointer text-gray-600 font-medium hover:text-black transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => handleNavClick("mission")}
            className="cursor-pointer text-gray-600 font-medium hover:text-black transition-colors"
          >
            Mission
          </button>
          <button
            onClick={() => handleNavClick("bento-grid")}
            className="cursor-pointer text-gray-600 font-medium hover:text-black transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick("faq")}
            className="cursor-pointer text-gray-600 font-medium hover:text-black transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={() => window.open("https://app.lumist.ai", "_blank")}
          className="hidden md:block cursor-pointer bg-primary hover:bg-primary-hover active:bg-primary-active text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-32"
        >
          Open App
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden cursor-pointer p-2 text-gray-600 hover:text-black transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-6 space-y-4 bg-background/95 backdrop-blur-md border-t border-gray-200/30">
          <button
            onClick={() => handleNavClick("home")}
            className="block w-full text-left py-2 text-gray-600 font-medium hover:text-black transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("benefits")}
            className="block w-full text-left py-2 text-gray-600 font-medium hover:text-black transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => handleNavClick("mission")}
            className="block w-full text-left py-2 text-gray-600 font-medium hover:text-black transition-colors"
          >
            Mission
          </button>
          <button
            onClick={() => handleNavClick("bento-grid")}
            className="block w-full text-left py-2 text-gray-600 font-medium hover:text-black transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick("faq")}
            className="block w-full text-left py-2 text-gray-600 font-medium hover:text-black transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => window.open("https://app.lumist.ai", "_blank")}
            className="w-full mt-4 cursor-pointer bg-primary hover:bg-primary-hover active:bg-primary-active text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Open App
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

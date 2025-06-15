import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0b1120] shadow-lg' : 'bg-[#0b1120]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Logos */}
            <div className="flex-shrink-0 flex items-center space-x-4">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img
                  src="/bitm.png"
                  alt="Ballari Institute of Technology and Management Logo"
                  className="h-16 object-contain"
                />
              </div>
              <div className="neo">
                <img
                  src="/neonexus.png"
                  alt="NeoNexus Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            {/* Center Nav */}
            <div className="hidden md:flex flex-grow justify-center">
              <div className="flex items-center space-x-10">
                <Link
                  to="/"
                  className="text-2xl font-bold neon-text text-[var(--primary)]"
                >
                  NEONEXUS
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('tracks')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    Tracks
                  </button>
                  <button
                    onClick={() => scrollToSection('prizes')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    Prizes
                  </button>
                  <button
                    onClick={() => scrollToSection('schedule')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    Schedule
                  </button>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => scrollToSection('sponsors')}
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    Sponsors
                  </button>
                </nav>
              </div>
            </div>

            {/* Mobile Logo (Center) */}
            <div className="md:hidden flex-grow flex justify-center">
              <div className="flex items-center space-x-2">
                <img
                  src="/neonexus.png"
                  alt="NeoNexus Logo"
                  className="h-14 object-contain"
                />
                <Link
                  to="/"
                  className="text-xl font-bold neon-text text-[var(--primary)]"
                >
                  NEONEXUS
                </Link>
              </div>
            </div>

            {/* Right Logos and Register Button */}
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-xl shadow-md hidden md:block">
                <img
                  src="/sustaina-removebg.png"
                  alt="BITM Sustaina Logo"
                  className="h-14 object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-xl shadow-md hidden md:block">
                <img
                  src="/ieee-removebg.png"
                  alt="IEEE Logo"
                  className="h-14 object-contain"
                />
              </div>
              <Link to="/register" className="neon-button">
                Register Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#080812]/95 backdrop-blur-md mt-20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tracks')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              Tracks
            </button>
            <button
              onClick={() => scrollToSection('prizes')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('sponsors')}
              className="block w-full text-left py-2 text-white hover:text-[var(--primary)]"
            >
              Sponsors
            </button>
          </div>
        </div>
      )}
    </>
  );
}

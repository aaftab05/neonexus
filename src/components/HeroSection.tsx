import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

const eventDate = new Date('2025-09-06T09:00:00');

// Announcements to rotate
const announcements = [
  "Registration opens July 1, 2025",
  "₹1,00,000+ prize pool for winners",
  "36-hour hackathon on September 6-7, 2025",
  "Team size: 3-4 members per team",
  "Software & Hardware tracks available"
];

export default function HeroSection() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Countdown renderer
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span className="text-[var(--accent)]">Event has started!</span>;
    } else {
      return (
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="glass-panel w-full py-4 text-3xl md:text-5xl font-bold neon-text text-[var(--primary)]">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>
              <span className="mt-2 text-xs md:text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--background-dark)] opacity-50 z-0"></div>
      <div className="cyber-grid absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/neonexus.png" 
              alt="NeoNexus Logo" 
              className="h-32 w-auto filter drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-text text-[var(--primary)]">
            NEONEXUS
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[var(--foreground-muted)]">
            Bridging reality and digital frontiers
          </p>
          
          {/* Rotating announcement banner */}
          <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 py-2 px-4 rounded-md max-w-xl mx-auto mb-8 h-10 flex items-center justify-center overflow-hidden">
            {announcements.map((announcement, index) => (
              <p 
                key={index} 
                className={`text-[var(--primary)] font-medium absolute transition-opacity duration-500 ${
                  index === currentAnnouncement ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {announcement}
              </p>
            ))}
          </div>
          
          <h2 className="text-xl md:text-2xl mb-6 font-semibold">
            September 6-7, 2025
          </h2>
          
          <div className="mb-12">
            <Countdown date={eventDate} renderer={renderer} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="neon-button flex justify-center">
              Register Now - ₹1000 per team
            </Link>
            <button 
              className="neon-button"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 z-10 pointer-events-none"></div>
    </section>
  );
}

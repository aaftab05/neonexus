import { ArrowRight, Brain, Code, Cpu, Layers3, Tablet, Wallet } from 'lucide-react';

const tracks = [
  {
    title: "Software",
    description: "Develop innovative software solutions across various domains",
    icon: <Code className="w-8 h-8 text-[var(--secondary)]" />,
    areas: [
      { name: "Artificial Intelligence", icon: <Brain className="w-5 h-5" /> },
      { name: "Blockchain & Web3", icon: <Wallet className="w-5 h-5" /> },
      { name: "XR (AR/VR) Applications", icon: <Layers3 className="w-5 h-5" /> }
    ]
  },
  {
    title: "Hardware",
    description: "Create physical computing solutions that interact with the real world",
    icon: <Cpu className="w-8 h-8 text-[var(--accent)]" />,
    areas: [
      { name: "IoT & Smart Devices", icon: <Tablet className="w-5 h-5" /> },
      { name: "Embedded Systems", icon: <Cpu className="w-5 h-5" /> },
      { name: "Robotics & Automation", icon: <Brain className="w-5 h-5" /> }
    ]
  }
];

export default function TracksSection() {
  return (
    <section id="tracks" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">COMPETITION TRACKS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="flex items-center mb-6">
                {track.icon}
                <h3 className="text-2xl font-bold ml-3">{track.title}</h3>
              </div>
              
              <p className="mb-6 text-[var(--foreground-muted)]">
                {track.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-3">Focus Areas:</h4>
                {track.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="p-2 rounded-full bg-[var(--primary)]/10 mr-3">
                      {area.icon}
                    </div>
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button className="group-hover:translate-x-1 transition-transform text-[var(--primary)] flex items-center">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

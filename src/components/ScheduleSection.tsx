export default function ScheduleSection() {
  const scheduleDay1 = [
    { time: "08:00 AM", event: "Registration & ID Distribution" },
    { time: "09:00 AM", event: "Opening Ceremony & Keynote Speech" },
    { time: "10:30 AM", event: "Problem Statement Reveal" },
    { time: "11:00 AM", event: "Hackathon Begins" },
    { time: "01:00 PM", event: "Lunch Break" },
    { time: "05:00 PM", event: "Mentorship Session" },
    { time: "08:00 PM", event: "Dinner" },
    { time: "10:00 PM", event: "Late Night Snacks" }
  ];
  
  const scheduleDay2 = [
    { time: "07:00 AM", event: "Breakfast" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "05:00 PM", event: "Final Submissions Due" },
    { time: "05:30 PM", event: "Presentations Start" },
    { time: "08:00 PM", event: "Dinner" },
    { time: "09:00 PM", event: "Results & Prize Distribution" },
    { time: "10:00 PM", event: "Closing Ceremony" }
  ];

  return (
    <section id="schedule" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">EVENT SCHEDULE</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Day 1 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">DAY 1 - September 6, 2025</h3>
              
              <div className="space-y-6">
                {scheduleDay1.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold">
                        {index + 1}
                      </div>
                      {index < scheduleDay1.length - 1 && (
                        <div className="w-0.5 h-12 bg-[var(--primary)]/20"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-[var(--foreground-muted)]">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">DAY 2 - September 7, 2025</h3>
              
              <div className="space-y-6">
                {scheduleDay2.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold">
                        {index + 1}
                      </div>
                      {index < scheduleDay2.length - 1 && (
                        <div className="w-0.5 h-12 bg-[var(--accent)]/20"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-[var(--foreground-muted)]">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

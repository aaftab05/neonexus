import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CreditCard } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  const [registrationOpen] = useState(true); // Set to true to enable registration
  
  return (
    <div className="min-h-screen bg-[var(--background)] cyber-grid flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="neon-button inline-flex items-center mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl font-bold mb-6 neon-text text-[var(--primary)]">REGISTRATION</h1>
          </div>
          
          {registrationOpen ? (
            <div className="space-y-8">
              <div className="glass-panel p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[var(--primary)]" />
                  Team Registration
                </h2>
                
                <p className="mb-6 text-[var(--foreground-muted)]">
                  Complete your registration for NeoNexus 2025 by filling out the form below and making the payment. 
                  The registration fee is ₹1,000 per team (3-4 members).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-panel p-4 text-center">
                    <h3 className="font-bold mb-2 text-[var(--secondary)]">IMPORTANT DATES</h3>
                    <p className="text-sm">Registration Deadline: August 15, 2025</p>
                  </div>
                  <div className="glass-panel p-4 text-center">
                    <h3 className="font-bold mb-2 text-[var(--accent)]">TEAM SIZE</h3>
                    <p className="text-sm">Minimum 3 and Maximum 4 members per team</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-bold mb-3">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[var(--foreground-muted)]">
                    <li>Valid college ID for all team members</li>
                    <li>Team name (choose a creative one!)</li>
                    <li>Valid email address for confirmation</li>
                    <li>Payment of ₹1,000 registration fee</li>
                  </ul>
                </div>
              </div>
              
              <PaymentForm />
            </div>
          ) : (
            <div className="glass-panel p-8 text-center">
              <div className="flex items-center justify-center mb-8">
                <Clock className="w-10 h-10 text-[var(--secondary)] mr-3" />
                <p className="text-xl">Opening Soon</p>
              </div>
              
              <p className="mb-8 text-[var(--foreground-muted)]">
                Registration for NeoNexus 2025 will open on July 1, 2025. Check back soon!
              </p>
              
              <Link to="/" className="neon-button inline-flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

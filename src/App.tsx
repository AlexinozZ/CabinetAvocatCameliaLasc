import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  useEffect(() => {
    // Update document title
    document.title = 'Cabinet Avocat Lasc Camelia Irina - Servicii Juridice Profesionale';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
      observer.observe(section);
    });
    
    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero onOpenConsultationModal={openConsultationModal} />
      <About id="about" />
      <PracticeAreas id="practice-areas" />
      <WhyChooseUs id="why-choose-us" onOpenConsultationModal={openConsultationModal} />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Footer />
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={closeConsultationModal} 
      />
    </div>
  );
}

export default App;
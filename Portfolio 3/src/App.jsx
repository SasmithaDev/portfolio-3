import { useState, useEffect } from 'react';
import { Hero, Navbar, About, Projects, Experience, Contact, StarsBackground } from './components';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);  // Clean up timer on component unmount
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />

      <section className="relative z-0">
        <Experience />
        <StarsBackground />
      </section>

      <section className="relative z-0">
        <Projects />
        <StarsBackground />
      </section>

      <section className="relative z-0">
        <Contact />
        <StarsBackground />
      </section>
    </div>
  );
}

export default App;

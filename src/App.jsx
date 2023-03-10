import { useState, useEffect } from "react";
import {
  Intro,
  Works,
  Navbar,
  Services,
  Experience,
  Logo,
  Contact,
  About,
  Socials,
  Footer,
  BackToTop,
} from "./components";
import handleScrollAnimation from "./funcs/handleScrollAnimation";

const App = () => {
  const [logoPage, setLogoPage] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLogoPage(false);
    }, 4000);

    const handleScrollEvent = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("resize", handleScrollAnimation);
  }, []);

  useEffect(() => {
    handleScrollAnimation();
  }, [scrollY]);

  return (
    <div
      id="app"
      style={{
        maxWidth: logoPage ? "100vw" : "1500px",
        margin: "auto",
      }}
      className="min-h-screen transition-transform duration-200"
    >
      {logoPage && <Logo />}
      {!logoPage && (
        <>
          <header>
            <Navbar />
          </header>
          <Socials />
          <BackToTop />
          <main className="slide-up">
            <Intro />
            <About />
            <Works />
            <Services />
            <Experience />
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default App;

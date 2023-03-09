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
} from "./components";

const App = () => {
  const [logoPage, setLogoPage] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLogoPage(false);
    }, 4000);

    const handleScrollEvent = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScrollAnimation = () => {
    const scrollAnimElements = document.querySelectorAll(".animate-on-scroll");
    const works = document.querySelectorAll(".works");
    // Checks to see if element is in view
    const elementInView = (el, dimension = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementHeight = el.getBoundingClientRect().height;
      return (
        // Returns true or false
        Math.round(elementTop) <=
        Math.round(
          window.innerHeight - (elementHeight - dimension * elementHeight)
        )
      );
    };
    const animateOnScroll = () => {
      scrollAnimElements.forEach((element) => {
        if (element.classList.contains("box")) {
          if (elementInView(element, 1 / 2)) {
            element.style.opacity = "1";
            element.style.transition = "opacity .5s .3s";
            element.classList.add("slide-top");
          } else {
            element.style.opacity = "0";
            element.style.transition = "opacity";
            element.classList.remove("slide-top");
          }
        } else if (elementInView(element, 1 / 4)) {
          element.style.opacity = "1";
          element.style.transition = "opacity .5s .3s";
          element.classList.add("slide-top");
        } else {
          element.style.opacity = "0";
          element.style.transition = "opacity";
          element.classList.remove("slide-top");
        }
      });
    };
    animateOnScroll();
  };

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

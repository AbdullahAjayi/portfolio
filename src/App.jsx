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
  // const [screenSize, setScreenSize] = useState();
  // const [smallScreen, setSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize < 425) {
  //     setSmallScreen(true);
  //   } else {
  //     setSmallScreen(false);
  //   }
  // }, [screenSize]);

  const [logoPage, setlogoPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setlogoPage(false);
    }, 4000);
  }, []);

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
          <main>
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

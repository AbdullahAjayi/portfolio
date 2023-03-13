import ProfilePic from "../asset/images/ProfilePic.png";
import { globalStyles } from "../styles/globalStyles";
import { useEffect } from "react";

const styles = {
  flexContainer:
    "flex flex-col-reverse items-center md:flex-row justify-between",
  flexLeft: "md:w-500 text-center md:text-left",
  flexRight: "w-300 flex justify-center",
};

const Intro = () => {
  return (
    <section className={`${globalStyles.section} pt-0`}>
      <div className={styles.flexContainer}>
        <div className={`${styles.flexLeft}`}>
          <div>
            <h1 className={`${globalStyles.subheading} font-semibold`}>
              Hi there!, I am Abdullah, a
            </h1>
            <h1 className={`${globalStyles.heading}  mt-2`}>
              Frontend Developer.
            </h1>
          </div>
          <p className={`${globalStyles.sectionParagraph} text-lg md:text-xl`}>
            I like to craft cutting-edge user interfaces with intuitively
            implemented UX.
          </p>
          <p className={`${globalStyles.sectionParagraph} text-lg md:text-xl`}>
            I'm passionate about solving problems and bringing ideas to life.
          </p>
          <div
            className={`${globalStyles.btn} px-10 w-full md:w-fit p-3 mt-8 text-lg`}
          >
            <a href="mailto:hafizajayi2308@gmail.com">Let's work together</a>
          </div>
        </div>
        <div className={`${styles.flexRight} mb-5 md:mb-0`}>
          <figure className="w-40 md:w-48 cursor-pointer">
            <img
              className="w-full"
              src={ProfilePic}
              draggable="false"
              alt="Abdullah Ajayi"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Intro;

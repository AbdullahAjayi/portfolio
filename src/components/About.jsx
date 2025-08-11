import useMedia from "../hooks/mediaQuery"
import { globalStyles } from "../styles/globalStyles"
import { about } from "../data/dummy"

const About = () => {
  return (
    <section id="about" className={`${globalStyles.section}`}>
      <h2 className={`animate-on-scroll ${globalStyles.heading}`}>About me.</h2>
      <p className={`animate-on-scroll ${globalStyles.sectionParagraph} lg:w-600`}>
        {about.aboutMe}
      </p>
      <div className="flex mt-10 flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <h2 className={`animate-on-scroll ${globalStyles.subheading}`}>Engineering</h2>
          <p className={`animate-on-scroll ${globalStyles.sectionParagraph}`}>
            {about.engineering}
          </p>
        </div>
        <div className="flex-1">
          <h2 className={`animate-on-scroll ${globalStyles.subheading}`}>Design</h2>
          <p className={`animate-on-scroll ${globalStyles.sectionParagraph}`}>
            {about.design}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

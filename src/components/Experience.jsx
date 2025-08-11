import useMedia from "../hooks/mediaQuery"

import { globalStyles } from "../styles/globalStyles"
import { technologies, experience } from "../data/dummy"

const styles = {
  techStackList: "flex flex-wrap gap-3 pt-3",
  techStacks:
    "w-24 h-24 border-2 border-[#090e50] bg-[lightBlue] rounded-lg flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300 p-1 text-center break-words",
  experience: "pb-3 mb-3 last:border-b-[0.5px] border-[#090e50] border-t-[.2px]",
  companyName: "font-bold text-blue-700 capitalize",
}

const Experience = () => {
  const { matchesWidth } = useMedia()

  return (
    <section id="services" className={globalStyles.section}>
      <h2 className={`animate-on-scroll ${globalStyles.heading}`}>Experience</h2>
      <p className={`animate-on-scroll ${globalStyles.sectionParagraph}`}>
        With over 3 years of hands-on experience in web development, I continuously refine
        my skills to stay at the forefront of industry trends and deliver impactful
        solutions.
      </p>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-5">
        <div className="box animate-on-scroll flex-1">
          <h3 className={globalStyles.smSubheading}>
            Tools I use to deliver precise and reliable results:
          </h3>
          <ul
            className={`${styles.techStackList} ${
              matchesWidth < 505 ? "justify-center" : "justify-start"
            }`}
          >
            {technologies.map((technology, index) => (
              <li key={index} className={styles.techStacks}>
                <b>{technology}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="box animate-on-scroll flex-1">
          <h3 className={globalStyles.smSubheading}>Professional Experience:</h3>
          <ul className="pt-3">
            {experience.map((item, index) => (
              <li key={index} className={styles.experience}>
                <p className="uppercase font-bold">{item.role}</p>
                <a
                  href={item.link}
                  className={styles.companyName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.company}
                </a>
                <p className={globalStyles.sectionParagraph}>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience

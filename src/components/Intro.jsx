import ProfilePic from "../asset/images/ProfilePic.png"
import { globalStyles } from "../styles/globalStyles"

const styles = {
  flexContainer: "flex flex-col-reverse items-center md:flex-row justify-between",
  flexLeft: "md:w-500 text-center md:text-left",
  flexRight: "w-300 flex justify-center",
}

const Intro = () => {
  return (
    <section className={`${globalStyles.section} pt-0`}>
      <div className={styles.flexContainer}>
        <div className={`${styles.flexLeft}`}>
          <div>
            <h1 className={`${globalStyles.subheading} font-semibold`}>
              Hey there, I’m Abdullah —
            </h1>
            <h1 className={`${globalStyles.heading} mt-2`}>
              Web Developer & Digital Experience Builder
            </h1>
          </div>

          <p className={`${globalStyles.sectionParagraph} text-lg md:text-xl`}>
            I help creators and personal brands turn their story into a website that
            builds trust and drives action.
          </p>

          <p className={`${globalStyles.sectionParagraph} text-lg md:text-xl`}>
            <bold className="font-bold">My focus:</bold> clear messaging, credible design,
            and conversion-ready experiences that make visitors believe in what you do.
          </p>

          <div className={`${globalStyles.btn} px-10 w-full md:w-fit p-3 mt-8 text-lg`}>
            <a href="#contact">Let’s bring your next powerful idea to life</a>
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
  )
}

export default Intro

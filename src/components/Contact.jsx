import useMedia from "../hooks/mediaQuery";
import { FiArrowRight } from "react-icons/fi";
import { globalStyles } from "../styles/globalStyles";

const styles = {
  input:
    "flex-1 w-full h-10 p-5 outline-none bg-blue-100 rounded-md text-[#090e50]",
  btn: "px-12 w-fit p-3 mt-8 text-lg flex items-center justify-center gap-1 h-full",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${globalStyles.section} flex flex-col items-center text-center`}
    >
      <h1 className={`animate-on-scroll ${globalStyles.heading}`}>
        Get In Touch.
      </h1>
      <p
        className={`animate-on-scroll ${globalStyles.sectionParagraph} md:text-center`}
      >
        I am looking forward to working with a team of creative designers and
        developers working towards bringing an idea to life. If you think we
        might be a good fit for each other, or just want to say hello, go ahead!
        Send me a mail.
      </p>
      <form className="box animate-on-scroll mt-10 w-full max-w-[500px] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row  gap-3">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <textarea
            required
            className={`${styles.input} h-[150px] resize-none`}
            type="text"
            placeholder="Your message"
          />
        </div>
        <div className="flex flex-1 justify-center items-center cursor-pointer">
          <button className={`btn ${globalStyles.btn} ${styles.btn}`}>
            <input
              className="text-sm font-semibold uppercase"
              type="button"
              value="Shoot"
            />
            <FiArrowRight className="arrow text-xl hover:translate-x-1" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

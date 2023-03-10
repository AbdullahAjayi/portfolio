import { globalStyles } from "../styles/globalStyles";

const styles = {
  input: "flex-1 w-full h-10 p-5 outline-none bg-blue-100 rounded-md",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${globalStyles.section} flex flex-col md:items-center text-center`}
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
        <div className="flex gap-3">
          <input className={styles.input} type="text" placeholder="John Doe" />
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="w-full">
          <input
            required
            className={`${styles.input} h-[150px]`}
            type="text"
            placeholder="Hi, seems we need a product lead designer to join our team at company XYZ"
          />
        </div>
        <div>
          <input
            className={`${globalStyles.btn} px-10 w-fit p-3 mt-8 text-lg`}
            type="button"
            value="Shoot"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowRight } from "react-icons/fi";
import { globalStyles } from "../styles/globalStyles";

const styles = {
  input:
    "flex-1 w-full h-10 p-5 outline-none bg-blue-100 rounded-md text-[#090e50]",
  btn: "px-12 w-fit p-3 mt-8 text-lg flex items-center justify-center gap-1 h-full",
};

const Contact = () => {
  const [loading, setLoading] = useState("shoot");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // template_8d3jq4u
  // service_budamta
  // 6-R2BF5L9TNq91ZNS

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Shooting");
    emailjs
      .send(
        "service_budamta",
        "template_8d3jq4u",
        {
          from_name: form.name,
          to_name: "Abdullah",
          from_email: form.email,
          to_email: "hafizajayi2308@gmail.com",
          message: form.message,
        },
        "6-R2BF5L9TNq91ZNS"
      )
      .then(
        () => {
          alert("Thank you! I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });

          setLoading("Shoot");
        },
        (error) => {
          alert(
            "Sorry, something went wrong. Pls email us at hafizajayi2308@gmail.com"
          );
        }
      );
  };
  return (
    <section
      id="contact"
      className={`${globalStyles.section} flex flex-col items-center text-center`}
    >
      <h2 className={`animate-on-scroll ${globalStyles.heading}`}>
        Get In Touch.
      </h2>
      <p
        className={`animate-on-scroll ${globalStyles.sectionParagraph} md:text-center`}
      >
        I am looking forward to working with a team of creative designers and
        developers working towards bringing an idea to life. If you think we
        might be a good fit for each other, or just want to say hello, go ahead!
        Send me a mail.
      </p>
      <form
        onSubmit={handleSubmit}
        className="box animate-on-scroll mt-10 w-full max-w-[500px] flex flex-col gap-5"
      >
        <div className="flex flex-col gap-3">
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <textarea
            className={`${styles.input} h-[150px] resize-none`}
            type="text"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
        </div>
        <div className="flex flex-1 justify-center items-center cursor-pointer">
          <button className={`btn ${globalStyles.btn} ${styles.btn}`}>
            <input
              className="text-sm font-semibold uppercase"
              type="button"
              value={loading}
            />
            <FiArrowRight className="arrow text-xl hover:translate-x-1" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

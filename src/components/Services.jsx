import { useEffect } from "react";
import { services } from "../data/dummy";
import useMedia from "../hooks/mediaQuery";
import { globalStyles } from "../styles/globalStyles";

const styles = {
  servicesList: "mt-10 grid gap-3 gap-y-10",
  listItem: "border border-[#090e50] rounded-md p-2 pb-4",
  image: "h-40 border border-[#090e50] overflow-hidden rounded-md",
};

const Services = () => {
  const [matches] = useMedia();
  return (
    <section id="services" className={globalStyles.section}>
      <h2 className={globalStyles.heading}>What I do.</h2>
      <ul
        className={`${styles.servicesList} ${
          matches < 560
            ? "grid-cols-1"
            : matches < 1000
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
        {services.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <div
              className={`${
                styles.image
              } cursor-pointer mb-2 flex justify-center w-full ${
                matches > 550 && matches < 1300 ? "flex items-center" : ""
              }`}
              style={{ backgroundColor: "lightblue" }}
            >
              <object
                className="cursor-pointer"
                data={item.svg}
                type="image/svg+xml"
              ></object>
            </div>
            <h3 className={globalStyles.subheading}>{item.title}</h3>
            <p className="mt-3">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="text-lg mt-5 border border-orange-300 bg-yellow-50 p-3 rounded-md w-fit">
        💡Have an idea?{" "}
        <a
          href="mailto:hafizajayi230@gmail.com"
          className={globalStyles.secondaryBtn}
        >
          Tell me about it
        </a>
      </div>
    </section>
  );
};

export default Services;

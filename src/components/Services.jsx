import { useEffect, useState } from "react";
import { services } from "../data/dummy";
import elementInView from "../funcs/elementInView";
import useMedia from "../hooks/mediaQuery";
import { globalStyles } from "../styles/globalStyles";

const styles = {
  servicesList: "mt-10 grid gap-3 gap-y-10",
  listItem:
    "list-item box animate-on-scroll border border-[#090e50] rounded-md p-2 pb-4",
  image: "h-40 border border-[#090e50] overflow-hidden rounded-md",
};

const Services = () => {
  const { matchesWidth } = useMedia();
  const [scrollY, setScrollY] = useState(0);

  function handleListItemInView() {
    let listItemsInView = [];
    const listItems = [...document.getElementsByClassName("list-item")];
    function inView() {
      for (let i = 0; i < listItems.length; i++) {
        if (elementInView(listItems[i], 2 / 3)) {
          const inview = true;
          listItemsInView.push(inview);
        } else {
          const inview = false;
          listItemsInView.push(inview);
        }
      }
    }
    inView();
    return listItemsInView;
  }

  const inView = handleListItemInView();

  useEffect(() => {
    const handleScrollEvent = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScrollEvent);
  }, []);
  useEffect(() => {
    handleListItemInView();
  }, [scrollY]);

  return (
    <section id="services" className={globalStyles.section}>
      <h2 className={`animate-on-scroll ${globalStyles.heading}`}>
        What I do.
      </h2>
      <ul
        className={`${styles.servicesList} ${
          matchesWidth < 560
            ? "grid-cols-1"
            : matchesWidth < 1000
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
                matchesWidth > 550 && matchesWidth < 1300
                  ? "flex items-center"
                  : ""
              }`}
              style={{ backgroundColor: "lightblue" }}
            >
              {/* Animate svgs when in view */}
              {inView[index] && (
                <object
                  className="cursor-pointer"
                  data={item.svg}
                  type="image/svg+xml"
                ></object>
              )}
              {/* // !Svg still shows (but without animation) if js doesn't load as a result for any reason */}
              {/* {!inView[index] && (
                <object
                  className="cursor-pointer"
                  data={item.svg}
                  type="image/svg+xml"
                ></object>
              )} */}
            </div>
            <h3 className={globalStyles.subheading}>{item.title}</h3>
            <p className="mt-3">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="text-sm sm:text-md md:text-lg animate-on-scroll mt-5 border border-orange-300 bg-yellow-50 p-3 rounded-md w-full sm:w-fit">
        💡 Need help with any of these?{" "}
        <a
          href="https://wa.me/+2348120388157"
          target="_blank"
          className={globalStyles.secondaryBtn}
        >
          Send me a DM
        </a>
      </div>
    </section>
  );
};

export default Services;

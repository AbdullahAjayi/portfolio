import { useState } from "react"

import { navItems } from "../data/dummy"
import logo from "../asset/svg/logo.svg"
import { globalStyles } from "../styles/globalStyles"

const styles = {
  navbar: "nav h-[100px] flex justify-between px-5 sm:px-10 md:px-32 items-center",
  logo: "text-5xl text-[#090e50] cursor-pointer",
  navLists: "flex flex-col md:flex-row gap-3 md:gap-5 text-[#090e50]",
  navItems: "h-full cursor-pointer hover:text-blue-700 text-lg md:text-xs font-semibold",
  btn: "mt-0 py-[5px] px-3 text-[13px] font-semibold nav-btn-slide-top",
  navDiv: "hidden md:flex items-center gap-3",
  menuBtn: "menu-button w-fit relative md:hidden h-1/2 cursor-pointer flex items-center",
  hamburgerContainer: "relative div h-2/3 flex cursor-pointer items-center justify-start",
  menuSidebar:
    "menu-sidebar absolute w-210 h-300 -z-20 -top-2 pt-16 -right-2 bg-blue-100 rounded-lg flex flex-col items-center gap-5",
}

const MenuSidebar = () => (
  <div className={styles.menuSidebar}>
    <ol className={styles.navLists}>
      {navItems.map((navItem, index) => (
        <a key={index} href={navItem.navigation} className="nav-slide-top">
          <li className={styles.navItems}>{navItem.title}</li>
        </a>
      ))}
    </ol>
    <h2 className={`${globalStyles.btn} ${styles.btn}`}>
      <a href="#contact">Work With Me</a>
    </h2>
  </div>
)

const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false)

  const handleClick = () => {
    setMenuSidebar(!menuSidebar)
    const hamburger = document.querySelector(".menu-button")
    hamburger.classList.toggle("open")
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <object data={logo} type="image/svg+xml"></object>
      </div>
      <div className={styles.navDiv}>
        <ol className={styles.navLists}>
          {navItems.map((navItem, index) => (
            <a key={index} href={navItem.navigation} className="nav-slide-top">
              <li className={styles.navItems}>{navItem.title}</li>
            </a>
          ))}
        </ol>
        <div className={`${globalStyles.btn} ${styles.btn}`}>
          <a href="#contact">Work With Me</a>
        </div>
      </div>
      <button className={styles.menuBtn} onClick={() => handleClick()}>
        <div className={styles.hamburgerContainer}>
          <div className="ham-menu"></div>
        </div>
        {menuSidebar && <MenuSidebar />}
      </button>
    </nav>
  )
}

export default Navbar

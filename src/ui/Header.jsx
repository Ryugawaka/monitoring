import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex sticky top-0 justify-between w-full py-4 h-[60px] px-8 border-b border-black bg-cyan-600 text-white z-40 font-bold">
      <Link to="/">
        <p className="hover:border-b">Устоановка видеонаблюдения</p>
      </Link>
      <nav className="w-[40%] max-md:hidden">
        <ul className="flex justify-between self-end">
          <li className="hover:border-b">
            <Link to="/about">О нас</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/service">Услуги</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/portfolio">Наши работы</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden w-[30px]">
        <img src="../assets/icons/menu.svg" alt="menu" />
      </button>
    </header>
  );
};

export default Header;

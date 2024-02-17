import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full px-8 py-4 max-md:py-12 max-md:gap-4 bg-cyan-700 text-white max-md:flex-col-reverse">
      <div className="flex flex-col gap-2">
        © 2024. Установка системы безопасности
      </div>
      <div>
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/service">Услуги</Link>
          </li>
          <li>
            <Link to="/portfolio">Наши работы</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-bold">Телефон:</span> +1 (234) 567-89-01
        </div>
        <div>
          <span className="font-bold">Email:</span> info@monitoring.ru
        </div>
        <div>
          <span className="font-bold">Адрес:</span> г.Краснодар
          ул.Красная 21/5 123004
        </div>
        <div className="flex gap-4 font-bold">
          Мы в соцсетях:
          <a href="https://vk.com/" target="_blank" rel="noreferrer">
            <img
              src="../assets/icons/vk.png"
              alt="vk"
              className="w-[20px]"
            />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/icons/yt.png"
              alt="yt"
              className="w-[20px]"
            />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/icons/wa.png"
              alt="wa"
              className="w-[20px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

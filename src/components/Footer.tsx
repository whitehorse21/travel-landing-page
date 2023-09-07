import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container sm:flex justify-between items-center m-auto">
        <h1 className="px-2">
          Travel by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/whitehorse21"
          >
            whitehorse21
          </a>
        </h1>
        <ul className="flex flex-wrap">
          <li className="p-0 px-2">
            <a href="">Home</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Destinations</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Travel</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Views</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Book</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

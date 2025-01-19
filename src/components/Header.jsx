import React from "react";
import MenuIcon from "../assets/MenuIcon.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Desktopnavbar />
      <Mobilenvbar />
    </>
  );
}

function Desktopnavbar() {
  return (
    <header className="bg-blue-600 block max-[745px]:hidden">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4 px-6">
        <RouterLink
          to="/"
          className="text-white text-xl font-semibold no-underline hover:text-blue-300"
        >
          Cancer Care Community
        </RouterLink>

        <nav className="space-x-4">
          <RouterLink to="/" className="text-white hover:text-blue-200">
            Home
          </RouterLink>
          <RouterLink to="/mentors" className="text-white hover:text-blue-200">
            Mentors
          </RouterLink>
          <RouterLink to="/members" className="text-white hover:text-blue-200">
            Healthcare Professional
          </RouterLink>
          <RouterLink
            to="/volunteer"
            className="text-white hover:text-blue-200"
          >
            Volunteer
          </RouterLink>
        </nav>
      </div>
    </header>
  );
}

function Mobilenvbar() {
  const [show, setShow] = React.useState(false);
  return (
    <header className="bg-blue-600 hidden max-[745px]:block">
      <div
        onClick={() => setShow(!show)}
        className={`bg-[#2a2a2aad] h-full w-full fixed ${
          show ? "block" : "hidden"
        }`}
      />
      <div
        onClick={() => setShow(!show)}
        className={`text-white fixed right-7 top-[14px] font-semibold text-2xl ${
          show ? "block" : "hidden"
        }`}
      >
        X
      </div>
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4 px-6">
        <RouterLink
          to="/"
          className="text-white text-xl font-semibold no-underline"
        >
          Cancer Care Community
        </RouterLink>

        <img
          src={MenuIcon}
          alt="icon"
          onClick={() => setShow(!show)}
          className={`${show ? "hidden" : "block"}`}
        />
        <nav
          className={`${
            show
              ? "fixed flex flex-col items-center justify-center h-40 top-[40%] right-0 w-full"
              : "hidden"
          }`}
        >
          <RouterLink
            to="/"
            className="text-[#ffffff] font-bold"
            onClick={() => setShow(!show)}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/mentors"
            className="text-[#fff] font-bold"
            onClick={() => setShow(!show)}
          >
            Mentors
          </RouterLink>
          <RouterLink
            to="/members"
            className="text-[#fff] font-bold"
            onClick={() => setShow(!show)}
          >
            Healthcare Professional
          </RouterLink>
          <RouterLink
            to="/volunteer"
            className="text-[#fff] font-bold"
            onClick={() => setShow(!show)}
          >
            Volunteer
          </RouterLink>
        </nav>
      </div>
    </header>
  );
}

import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PrivateLinks } from "../assets/Data";
import PageTitle from "./PageTitle";

const Contact = () => {
  return (
    <section id="Contact">
      <PageTitle text="Contact" />
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-center gap-10 h-screen items-center">
        <div className="flex flex-col gap-20 min-w-12 max-w-lg basis-2/4 h-4/5 justify-center">
          {PrivateLinks.map((link) => {
            const { id, icon, text } = link;
            return (
              <article
                className=" bg-sky-300 mx-auto flex flex-col justify-center items-center w-2/5 py-2 rounded-2xl py-5 px-3 hover:bg-white border-sky-300 duration:3000  "
                key={id}
              >
                <p className="mb-3 text-4xl text-slate-600 hover:text-black">
                  {icon}{" "}
                </p>
                <h3>{text} </h3>
              </article>
            );
          })}
        </div>

        <div className="gap-4 min-w-12 max-w-lg text-center px-5 bg-sky-400 rounded-2xl basis-2/4 h-4/5">
          <PageTitle text="contact form" />
          <form className="flex flex-col mx-auto gap-5 justify-center h-full w-3/4 items-center">
            <input
              type="text"
              placeholder="name"
              className="w-full px-4 text-black text-xl mb-2  placeholder:text-black bg-sky-200 h-10 outline-none rounded-2xl"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full px-4 text-black text-xl mb-2 placeholder:text-black bg-sky-200 h-10  outline-none rounded-2xl"
            />
            <textarea
              placeholder="message"
              className="w-full px-4 text-black text-xl mb-2 placeholder:text-black bg-sky-200 h-20 outline-none rounded-2xl"
            />
            <button
              type="submit"
              className="text-xl text-slate-900 bg-orange-500 py-2 px-2 w-max"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

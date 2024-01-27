import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PrivateLinks } from "../assets/Data";
import PageTitle from "./PageTitle";

const Contact = () => {
  return (
    <section id="Contact" className="h-screen max-sm:h-max">
      <PageTitle text="Contact" />
      <div className="mx-auto max-w-7xl px-4 flex justify-between gap-10 h-[80%] max-sm:flex-col max-sm:mb-10 ">
        <div className="  bg-neutral  w-[50%] h-full rounded-xl max-sm:w-full max-sm:py-8">
          <div className="flex flex-col gap-y-10 justify-center h-full  ">
            {PrivateLinks.map((link) => {
              const { id, icon, text, href } = link;
              return (
                <a
                  href={href}
                  className=" bg-neutral text-accent mx-auto flex flex-col  w-48  justify-center items-center  py-10 rounded-2xl border-2 border-neutral-content hover:border-neutral-900 "
                  key={id}
                >
                  <p className="mb-3 text-accent text-4xl">{icon} </p>
                  <p className="text-center max-w-32 max-sm:text-pretty max-sm:min-h-12  ">
                    {text}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center bg-neutral text-accent rounded-xl  w-[50%] h-full max-sm:w-full max-sm:py-8">
          <form
            action="https://formsubmit.co/vaibhavjoshi119@gmail.com"
            method="POST"
            className=" h-full w-[70%] flex flex-col justify-center items-center  gap-y-8  "
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-full px-4  text-xl mb-2 h-10 outline-none rounded-xl bg-neutral-content text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4  text-xl mb-2 h-10  outline-none rounded-xl bg-neutral-content text-black "
            />
            <textarea
              placeholder="message"
              name="messgae"
              className="w-full px-4 text-xl mb-2  h-36 outline-none rounded-xl bg-neutral-content text-black "
            />
            <button
              type="submit"
              className=" btn btn-accent text-xl py-2 px-4 mx-auto w-max rounded-xl text-center inline-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { Fragment } from "react";
import { ContactCard } from "../components/index";

const ContactPage = () => {
  return (
    <Fragment>
      <div className="pt-24 lg:pt-32 page-container">
        <h2 className="py-5 mb-5 text-4xl font-bold text-center lg:text-5xl lg:mb-10">
          Contact Information
        </h2>
        <div className="grid p-5 border border-gray-300 rounded-lg lg:p-5 contact-container ">
          <div className="flex flex-col p-5 pb-5 border-b border-gray-300 lg:p-5 lg:border-b-0 lg:border-r gap-y-4">
            <p className="text-2xl font-extrabold text-gray-600">
              KTB COLLECTION
            </p>
            <div className="flex items-center group gap-x-4">
              <i className="flex items-center justify-center w-10 h-10 transition-all border border-gray-800 rounded-full group-hover:bg-black group-hover:text-white fa-solid fa-phone-flip"></i>
              <p>(+84) 79 809 8876</p>
            </div>
            <div className="flex items-center group gap-x-4">
              <i className="flex items-center justify-center w-10 h-10 transition-all border border-gray-800 rounded-full group-hover:bg-black group-hover:text-white fa-solid fa-envelope"></i>
              <p>khoabt94@gmail.com</p>
            </div>
            <div className="flex items-center group gap-x-4">
              <i className="flex items-center justify-center w-10 h-10 transition-all border border-gray-800 rounded-full group-hover:bg-black group-hover:text-white fa-solid fa-location-dot"></i>
              <p>Ninh Kieu, TP.Can Tho</p>
            </div>
            <div className="flex items-center group gap-x-4">
              <i className="flex items-center justify-center w-10 h-10 transition-all border border-gray-800 rounded-full group-hover:bg-black group-hover:text-white fa-brands fa-github"></i>
              <p>Github's Repository</p>
            </div>
          </div>
          <div className="flex flex-col p-5 lg:pl-10 gap-y-4">
            <p className="text-2xl font-extrabold text-gray-600">
              LEAVE US QUESTIONS
            </p>
            <ContactCard></ContactCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;

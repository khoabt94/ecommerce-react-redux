import React, { Fragment } from "react";
import { ContactCard } from "../components/index";

const ContactPage = () => {
  return (
    <Fragment>
      <div className="pt-32 pb-5 page-container">
        <h2 className="py-5 mb-10 text-5xl font-bold text-center">
          Contact Information
        </h2>
        <div className="grid p-5 border border-gray-300 rounded-lg contact-container page-container ">
          <div className="flex flex-col p-5 border-r border-gray-300 gap-y-4">
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
          <div className="flex flex-col p-5 gap-y-4">
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

import Link from "next/link";
import React from "react";
import { FaPhone, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  { name: "Phone", value: "+98 992 666 7069", icon: <FaPhone />, link: "tel:+989123456789" },
  { name: "Telegram", value: "@vosooghi_amir", icon: <FaTelegramPlane />, link: "https://t.me/vosooghi_amir" },
  { name: "Email", value: "amir11.vosoughi@gmail.com", icon: <FaEnvelope />, link: "mailto:your@email.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-[50vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="my-10 xl:mt-[80px] text-3xl">Contact</h1>
        <div className="flex flex-col gap-6">
          {contactInfo.map((contact, index) => (
            <Link
              key={index}
              href={contact.link}
              className="flex items-center gap-4 text-lg hover:text-blue-500 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-2xl">{contact.icon}</div>
              <span>{contact.value}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { buttonStyle } from "@/styles/button-style";
import { contactDetails, contactIcons } from "@/utils/contact-details";

export const ContactDetails = () => (
  <section className="border-grey space-y-10 border p-5 md:grid md:grid-cols-2 md:gap-10 md:p-18">
    <div className="flex h-full flex-col">
      <h3 className="text-secondary font-redonda mb-8 text-2xl font-bold md:mb-10 md:text-3xl">
        Contact Details:
      </h3>
      <ul className="mb-10">
        {contactDetails.map(({ content, label }) => (
          <li
            key={label}
            className="text-secondary font-redonda text-lg md:text-xl"
          >
            {label}: <span className="opacity-70">{content}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        {contactIcons.map((icon, index) => (
          <FontAwesomeIcon
            key={`contact-details-icon-${index}`}
            icon={icon}
            className="text-secondary size-6"
          />
        ))}
      </div>
      <p className="text-secondary font-redonda mt-10 text-lg md:mt-auto md:text-xl">
        We typically respond within 12 hours.
      </p>
    </div>
    <div className="space-y-10">
      <h3 className="text-secondary font-redonda text-2xl font-bold capitalize md:text-3xl">
        Send us a message
      </h3>
      <form className="bg-dark-grey border-grey flex flex-col gap-2 p-4 md:p-10">
        <label htmlFor="email" className="text-secondary">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="text-secondary placeholder:text-secondary/60 border-b border-orange-500 py-2 pr-2 outline-0"
        />
        <label htmlFor="message" className="text-secondary">
          Message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          className="text-secondary placeholder:text-secondary/60 border-b border-orange-500 py-2 pr-2 outline-0"
        />
        <button
          className={buttonStyle({
            className: "mt-10 w-full bg-orange-500 hover:bg-orange-600",
          })}
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

import { FaWhatsapp } from "react-icons/fa";

function ButtonPrimary({ children, className = "", ...props }) {
  return (
    <button
      className={`${className} bg-btn-primary text-eve-white font-semibold px-4 py-1.5 rounded-full`}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonWhite({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-btn-white text-btn-primary font-semibold border border-border-gray px-4 py-1.5 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonLightBlue({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-btn-blue text-eve-white font-semibold px-4 py-1.5 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonWhatsApp({ ...props }) {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=628995226188"
      target="_blank"
      className="font-semibold capitalize bg-eve-wa rounded-full w-max px-5 text-white py-1.5 flex items-center space-x-2.5"
      {...props}
    >
      <FaWhatsapp className="font-bold text-xl" />
      <span>Hubungi kami</span>
    </a>
  );
}

export { ButtonPrimary, ButtonWhite, ButtonLightBlue, ButtonWhatsApp };

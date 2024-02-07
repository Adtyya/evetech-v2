function ButtonPrimary({ children, className, ...props }) {
  return (
    <button
      className={`${className} bg-btn-primary text-eve-white font-semibold px-4 py-1.5 rounded-full`}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonWhite({ children, className, ...props }) {
  return (
    <button
      className={`bg-btn-white text-btn-primary font-semibold border border-border-gray px-4 py-1.5 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonWhite };

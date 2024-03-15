export default function Container({ children, className = "", ...props }) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-3.5 lg:px-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

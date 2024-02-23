export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}

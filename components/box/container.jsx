export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-3 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}

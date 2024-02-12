export default function Heading({
  variant,
  className = "",
  children,
  ...props
}) {
  const Tag = variant || "h1";
  let defaultClassname;

  switch (variant) {
    case "h1":
      defaultClassname = "text-5xl lg:text-7xl";
      break;
    case "h2":
      defaultClassname = "text-4xl lg:text-5xl";
      break;
    case "h3":
      defaultClassname = "text-3xl lg:text-4xl";
      break;
    case "h4":
      defaultClassname = "text-2xl lg:text-3xl";
      break;
    case "h5":
      defaultClassname = "text-5xl lg:text-7xl";
      break;
    default:
      defaultClassname = "text-2xl lg:text-3xl";
      break;
  }

  return (
    <Tag {...props} className={`${defaultClassname} ${className}`}>
      {children}
    </Tag>
  );
}

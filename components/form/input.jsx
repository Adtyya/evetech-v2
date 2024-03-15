export default function Input({ type, ...other }) {
  return (
    <input
      type={type}
      {...other}
      className="px-3 py-2 focus:outline-border-gray outline-2 rounded-full border border-border-gray bg-white w-full max-w-sm"
    ></input>
  );
}

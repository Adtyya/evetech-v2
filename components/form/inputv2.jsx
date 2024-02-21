function InputWithLabel({ label = "", required = false, ...props }) {
  return (
    <div className="flex flex-col space-y-2.5">
      <label className="text-eve-gray capitalize">
        {label}
        {required ? "*" : null}
      </label>
      <input
        className="focus:outline-none py-2.5 px-3 rounded-xl border-2 border-transparent focus:border-border-gray placeholder:capitalize"
        required={required}
        {...props}
      ></input>
    </div>
  );
}

function InputSelect({
  label = "",
  required = false,
  listOption = [],
  children,
  ...props
}) {
  return (
    <div className="flex flex-col space-y-2.5">
      <label className="text-eve-gray capitalize whitespace-nowrap">
        {label}
        {required ? "*" : null}
      </label>
      <select
        {...props}
        required={required}
        className="focus:outline-none py-2.5 px-3 rounded-xl border-2 border-transparent focus:border-border-gray text-eve-gray"
      >
        {children}
      </select>
    </div>
  );
}

function InputInvisibleLabel({ ...props }) {
  return (
    <div className="flex flex-col space-y-2.5">
      <label className="text-transparent">iam supposed to be transparent</label>
      <input
        className="focus:outline-none py-2.5 px-3 rounded-xl border-2 border-transparent focus:border-border-gray"
        {...props}
      ></input>
    </div>
  );
}

export { InputWithLabel, InputInvisibleLabel, InputSelect };

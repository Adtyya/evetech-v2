import React from "react";

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

function InputWithIcon({ icon, required, children, ...props }) {
  return (
    <div className="flex bg-white py-1.5 px-4 space-x-3 items-center rounded-2xl focus-within:border focus-within:border-border-gray border border-transparent">
      <span className="text-eve-input">{icon}</span>
      {/* <input
        className="w-full text-btn-primary placeholder:capitalize placeholder:text-eve-input focus:outline-none"
        {...props}
      /> */}
      <select
        {...props}
        required={required}
        className="focus:outline-none py-0 px-3 rounded-xl border-2 border-transparent focus:border-border-transparent text-eve-gray capitalize"
      >
        {children}
      </select>
    </div>
  );
}

const InputRounded = React.forwardRef(({ label, required, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-2.5">
      <label className="text-btn-primary capitalize">
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        ref={ref}
        className="focus:outline-none py-2.5 px-3 rounded-full border-2 focus:border-btn-primary/40 border-border-gray"
        required={required}
        {...props}
      ></input>
    </div>
  );
});

InputRounded.displayName = "RoundedInput";

export {
  InputWithLabel,
  InputInvisibleLabel,
  InputSelect,
  InputWithIcon,
  InputRounded,
};

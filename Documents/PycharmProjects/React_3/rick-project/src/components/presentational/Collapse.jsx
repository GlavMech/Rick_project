import React, { useState } from "react";

export const Collapse = ({ className, title, open: controlledOpen, setOpen, children }) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = controlledOpen ?? uncontrolledOpen;
  const toggleOpen = setOpen ?? setUncontrolledOpen;

  return (
    <div className={className}>
      <h3
        onClick={() => toggleOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {title}
      </h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

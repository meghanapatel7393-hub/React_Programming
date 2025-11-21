import type { ReactNode } from "react";

interface Props {
  //   text: string; // first way to pass props
  //   children: string; //instead of text we can use children prop. this not allow html elements
  children: ReactNode; // to allow any valid react element as children
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

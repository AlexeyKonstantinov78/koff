import _ from "./Container.module.scss";

export const Container = ({ children, className }) =>
(className ? (
  <div className={`${_.container} ${className}`}>{children}</div>
) : (
  <div className={_.container}>{children}</div>
));

// export const Container = ({ children, className = "" }) => (
//   <div className={_.container + " " + className}>{children}</div>
// );

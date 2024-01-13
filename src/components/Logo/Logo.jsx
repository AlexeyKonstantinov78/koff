import _ from "./Logo.module.scss";
import logoSvg from "./img/logo.svg";

export const Logo = ({ className = "" }) => (
  <a href="/">
    <img
      className={_.logo + " " + className}
      src={logoSvg}
      alt="Логотип мебельного маркета Koff" />
  </a>
);

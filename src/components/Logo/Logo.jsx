import _ from "./Logo.module.scss";
import logoSvg from "./img/logo.svg";

export const Logo = () => (
  <a className={_.link} href="/">
    <img
      className={_.logo}
      src={logoSvg}
      alt="Логотип мебельного маркета Koff"
    />
  </a>
);

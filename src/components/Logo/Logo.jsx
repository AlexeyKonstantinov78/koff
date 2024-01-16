import { Link } from "react-router-dom";
import _ from "./Logo.module.scss";
import logoSvg from "./img/logo.svg";

export const Logo = () => (
  <Link className={_.link} to="/">
    <img
      className={_.logo}
      src={logoSvg}
      alt="Логотип мебельного маркета Koff"
    />
  </Link>
);

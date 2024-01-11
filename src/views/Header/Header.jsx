import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";
import _ from "./Header.module.scss";

export const Header = () => (
  <header className={_.header}>
    <Container className={_.container}>
      <div className={_.logo}>
        <Logo />
      </div>
      <div className={_.search}>
        <SearchForm />
      </div>
      <div className={_.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);

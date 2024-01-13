import { Contacts } from "../../components/Contacts/Contacts.jsx";
import { Copyright } from "../../components/Copyright/Copyright.jsx";
import { Developer } from "../../components/Developer/Developer.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";
import { Container } from "../Container/Container.jsx";
import _ from "./Footer.module.scss";

export const Footer = () => (
  <footer className={_.footer}>
    <Container className={_.container}>
      <div className={_.logo}>
        <Logo />
      </div>
      <div className={_.contacts}>
        <Contacts />
      </div>
      <div className={_.developer}>
        <Developer />
      </div>
      <div className={_.copyright}>
        <Copyright />
      </div>
    </Container>
  </footer>
);

import { Container } from "../../views/Container/Container";
import _ from "./Loader.module.scss";
import { CircleLoader } from "react-spinners";

export const Loader = () => (
  <Container className={_.loader}>
    <CircleLoader
      color="#36d7b7"
      cssOverride={{
        margin: "0 auto",
      }}
    />
  </Container>
);

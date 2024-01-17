import { useRouteError } from "react-router-dom";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const PagesError = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
      <main>
        <Container>
          <h1>OPS NotFond</h1>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
};

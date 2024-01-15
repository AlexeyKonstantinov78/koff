import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer.jsx";
import { Header } from "./views/Header/Header.jsx";
import { Main } from "./views/Main/Main.jsx";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice.js";
import { Container } from "./views/Container/Container.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (error) {
    return <Container>Ошибка получения token: {error}</Container>;
  }

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div>Загрузка...</div>}
      <Footer />
    </>
  );
};

export default App;

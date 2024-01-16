import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer.jsx";
import { Header } from "./views/Header/Header.jsx";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice.js";
import { Container } from "./views/Container/Container.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog.jsx";
import { Goods } from "./views/Goods/Goods.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Card } from "./components/Card/Card.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        {/* {!loading && accessToken ? <Main /> : <div>Загрузка...</div>} */}
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return <Container>Загрузка...</Container>;
  }

  if (error) {
    return <Container>Ошибка получения token: {error}</Container>;
  }

  return <RouterProvider router={router} />;
};

export default App;

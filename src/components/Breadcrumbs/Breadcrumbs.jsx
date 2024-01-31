import { Link, useSearchParams } from "react-router-dom";
import _ from "./Breadcrumbs.module.scss";
import { useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";

export const Breadcrumbs = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const data = useSelector((state) => state.product.data);

  if (category || data?.category) {
    return (
      <div className={_.breadcrumbs}>
        <Container>
          <ul className={_.list}>
            <li className={_.item}>
              <Link to="/">Главная</Link>
              <span className={_.separator}>&gt;</span>
            </li>
            <li className={_.item}>
              <Link to={`/category?category=${category || data?.category}`}>
                {category || data?.category}
              </Link>
              <span className={_.separator}>&gt;</span>
            </li>
            {!category && data?.name && (
              <li className={_.item}>
                <a>{data?.name}</a>
                <span className={_.separator}>&gt;</span>
              </li>
            )}
          </ul>
        </Container>
      </div>
    );
  }
};

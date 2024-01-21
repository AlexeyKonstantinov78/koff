import { Link } from "react-router-dom";
import _ from "./CategoryItem.module.scss";

export const CategoryItem = ({ title }) => (
  <Link className={_.catalog__link} to={`/category?category=${title}`}>
    {title}
  </Link>
);

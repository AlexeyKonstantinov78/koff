import _ from "./CategoryItem.module.scss";

export const CategoryItem = ({ title }) => (
  <a className={_.catalog__link} href={`/category?slug=${title}`}>
    {title}
  </a>
);

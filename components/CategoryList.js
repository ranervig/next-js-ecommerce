import Link from "next/link";

import Category from "./Category";
import categoryListStyles from "../styles/CategoryList.module.css";

const CategoryList = ({ categories }) => {
  if (!categories) return null;
  return (
    <ul className={categoryListStyles.list}>
      {categories.map(category => (
        <li key={category.id}>
          <Link href={`/categories/${category.slug}`}>
            <a>
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;

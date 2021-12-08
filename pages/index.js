import Link from "next/link";
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  return {
    props: { categories },
  };
}

const HomePage = ({ categories }) => {
  return (
    <>
      <h1>Welcome to Astro Supply</h1>
      <h3>
        Go to the <Link href="/store">Store </Link> Or select from a category
        below
      </h3>
      <CategoryList categories={categories} />
    </>
  );
};

export default HomePage;

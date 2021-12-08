import Link from "next/link";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <h1>Astro Supply</h1>
      </Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        {/* <li>
          <Link href="/cart">
            <button>Cart</button>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;

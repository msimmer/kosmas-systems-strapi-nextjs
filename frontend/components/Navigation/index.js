import Link from "next/link";
import dynamic from "next/dynamic";
import Press from "./Press";
import Shop from "./Shop";
import Sculptures from "./Sculptures";
import Comics from "./Comics";

const RandomTitle = dynamic(() => import("./RandomTitle"), {
  ssr: false,
});

const Navigation = () => (
  <nav className="uk-navbar-container">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link href="/">
            <a>
              <RandomTitle />
            </a>
          </Link>
        </li>

        <Press />
        <Shop />
        <Sculptures />
        <Comics />

        <li>
          <Link href="/about">
            <a className="uk-link-reset">About</a>
          </Link>
        </li>
        <li>
          <Link href="/swirl">
            <a className="uk-link-reset">Swirl</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;

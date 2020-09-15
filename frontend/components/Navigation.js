import Link from "next/link";
import dynamic from "next/dynamic";
import ListItem from "./ListItem";

const RandomTitle = dynamic(() => import("./RandomTitle"), {
  ssr: false,
});

const Navigation = () => (
  <nav className="k-nav">
    <ul>
      <li className="k-list-item-home uk-margin-small-bottom">
        <Link href="/">
          <strong>
            <a>
              <RandomTitle />
            </a>
          </strong>
        </Link>
      </li>

      <ListItem title="Press" />
      <ListItem title="Shop" />
      <ListItem title="Sculptures" />
      <ListItem title="Comix" />
      <ListItem title="About" />
      <ListItem title="Swirl" />
    </ul>
  </nav>
);

export default Navigation;

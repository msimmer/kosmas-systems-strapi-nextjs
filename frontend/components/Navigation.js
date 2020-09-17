import Link from "next/link";
import dynamic from "next/dynamic";
import DropdownListItem from "./DropdownListItem";
import ListItem from "./ListItem";

const RandomTitle = dynamic(() => import("./RandomTitle"), {
  ssr: false,
});

const Navigation = () => (
  <nav className="k-nav">
    <ul>
      <li style={{ visibility: "hidden", height: 0 }}>
        <h1>Kosmas Systems</h1>
      </li>
      <li className="k-list-item-home uk-margin-large-bottom">
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
      <DropdownListItem title="Comix" />
      <ListItem title="About" />
      <ListItem title="Swirl" />
    </ul>
  </nav>
);

export default Navigation;

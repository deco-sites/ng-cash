import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { EditableProps as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  onlyMobile?: boolean;
  // children?: Array<{
  //   label: string;
  //   href: string;
  //   children?: Array<{
  //     label: string;
  //     href: string;
  //   }>;
  // }>;
  // image?: {
  //   src?: Image;
  //   alt?: string;
  // };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  mainButton?: NavItem;

  floatMenu?: Array<{ label: string; href: string }>;

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;
}

function Header(
  {
    searchbar: _searchbar,
    products,
    navItems = [],
    floatMenu,
    suggestions,
    mainButton,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions };
  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-base-100 fixed w-full z-50 bg-black">
          <Navbar
            items={navItems}
            mainButton={mainButton}
            searchbar={searchbar}
            floatMenu={floatMenu}
          />
        </div>

        <Modals
          menu={{ items: navItems }}
          searchbar={searchbar}
        />
      </header>
    </>
  );
}

export default Header;

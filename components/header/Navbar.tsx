import Searchbar from "deco-sites/fashion/islands/HeaderSearchbar.tsx";
import Buttons from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <Buttons variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={78} height={50} />
        </a>

        <div class="flex gap-1">
          <Buttons variant="search" />
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-100 w-full  h-[70px]">
        <div class="flex-none w-44">
          <a
            href="/"
            aria-label="Store logo"
            class="block py-3 pl-12 w-[160px] text-white"
          >
            <Icon id="Logo" width={78} height={50} />
          </a>
        </div>
        <div class="flex justify-end h-full divide-x divide-white border-l border-white">
          {items.map((item) => (
            <li
              class={`group flex items-center h-full font-semibold py-3 px-14 ${
                item.highlight ? "bg-[#7d2cff] hover:bg-[#5710c9]" : ""
              }`}
            >
              <a
                href={item.href}
                class="px-4 py-3 text-xl text-white uppercase"
              >
                <span class="group-hover:text-[#7d2cff]">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </div>
        {
          /* <div class="flex-none w-44 flex items-center justify-end gap-2">
          <Buttons variant="search" />
          <Searchbar searchbar={searchbar} />
          <a
            class="btn btn-square btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>
          <a
            class="btn btn-square btn-ghost"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={20}
              strokeWidth={2}
              fill="none"
            />
          </a>
          <Buttons variant="cart" />
        </div> */
        }
      </div>
    </>
  );
}

export default Navbar;

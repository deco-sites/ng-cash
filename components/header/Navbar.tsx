import Searchbar from "deco-sites/fashion/islands/HeaderSearchbar.tsx";
import Buttons from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, mainButton, floatMenu }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  mainButton?: INavItem;
  floatMenu?: Array<{ label: string; href: string }>;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full py-6 pl-4 pr-3 gap-2"
      >
        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Icon id="LogoMobile" width={37} height={37} />
        </a>
        {floatMenu && floatMenu?.length > 0 && (
          <div class="flex justify-center flex-grow">
            <div class="flex items-center">
              {floatMenu.map((item, index) => (
                <a
                  href={item.href}
                  class={`flex gap-3 items-center uppercase text-[4.5vw] font-medium  px-2 py-3 ${
                    index === 0 ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {index === 0 && (
                    <div class="rounded-full bg-white w-2 h-2"></div>
                  )}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
        <div class="flex-grow flex justify-end">
          <details class="group/details">
            <summary class="bg-neutral-900 rounded-full w-9 h-9 flex items-center justify-center">
              <Icon id="Plus" class="text-white" size={25} strokeWidth={1} />
            </summary>
            <div class="absolute left-0 right-0 top-[70px]  grid grid-rows-[0fr]  group-open/details:grid-rows-[1fr] transition-all">
              <div class="group-open/details: bg-white flex flex-col divide-y divide-black overflow-hidden">
                {items.map((item) => (
                  <li
                    class={`group flex justify-end h-full font-semibold ${
                      item.highlight ? "bg-[#7d2cff] hover:bg-[#5710c9]" : ""
                    } ${item.onlyMobile ? "flex lg:hidden" : ""}`}
                  >
                    <a
                      href={item.href}
                      class="px-8 py-6 text-[4.5vw] text-black uppercase leading-none"
                    >
                      <span class="group-hover:text-[#7d2cff]">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
      {mainButton && (
        <div
          class={`md:hidden group border border-white justify-center fixed bottom-0 left-0 right-0 flex items-center font-semibold py-3 px-14 bg-[#7d2cff] hover:bg-[#5710c9] h-[70px]`}
        >
          <a
            href={mainButton.href}
            class="text-[6vw] text-white uppercase"
          >
            <span class="group-hover:text-[#7d2cff]">
              {mainButton.label}
            </span>
          </a>
        </div>
      )}

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-100 w-full h-[70px]">
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
              } 
              ${item.onlyMobile ? "flex lg:hidden" : ""}
              `}
            >
              <a
                href={item.href}
                class="text-[1.2vw] text-white uppercase"
              >
                <span class="group-hover:text-[#7d2cff]">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
          {mainButton && (
            <li
              class={`group flex items-center h-full font-semibold py-3 px-14 bg-[#7d2cff] hover:bg-[#5710c9]`}
            >
              <a
                href={mainButton.href}
                class="px-4 py-3 text-[1.2vw] text-white uppercase"
              >
                <span class="group-hover:text-[#7d2cff]">
                  {mainButton.label}
                </span>
              </a>
            </li>
          )}
        </div>
      </div>
      {floatMenu && floatMenu?.length > 0 && (
        <div class="hidden md:flex right-0 left-0 justify-center">
          <div class="fixed group bottom-8  mx-auto z-40 flex items-center border-2 border-white rounded-2xl bg-black overflow-hidden shadow-[12px_12px_50px_8px_rgba(0,_0,_0,_.75)]">
            {floatMenu.map((item, index) => (
              <a
                href={item.href}
                class={`flex gap-3 items-center uppercase text-[1.6vw] font-medium  px-6 py-3 ${
                  index === 0
                    ? "text-black bg-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {index === 0 && (
                  <div class="rounded-full bg-black w-3 h-3"></div>
                )}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

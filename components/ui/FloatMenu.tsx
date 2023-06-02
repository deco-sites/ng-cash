export interface Props {
  menu: Array<{
    label: string;
    href: string;
  }>;
}

function FloatMenu({ menu }: Props) {
  if (!menu.length) {
    return null;
  }

  return (
    <div class="right-0 left-0 flex justify-center">
      <div class="fixed group bottom-8  mx-auto z-40 flex items-center border-2 border-white rounded-2xl bg-black overflow-hidden shadow-[12px_12px_50px_8px_rgba(0,_0,_0,_.75)]">
        {menu.map((item, index) => (
          <a
            href={item.href}
            class={`flex gap-3 items-center uppercase text-[1.6vw] font-medium  px-6 py-3 ${
              index === 0
                ? "text-black bg-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {index === 0 && <div class="rounded-full bg-black w-3 h-3"></div>}
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FloatMenu;

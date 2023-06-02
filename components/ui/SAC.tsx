import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

export interface Props {
  href?: string;
}

function SAC({ href }: Props) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      class="hidden md:flex fixed group bottom-[18%] right-0 z-40 bg-white items-center border border-black"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="text-black p-2 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Icon id="SAC" size={40} />
      </button>
      <span class="hidden group-hover:block uppercase text-center max-w-[80px]">
        Central de Ajuda
      </span>
    </a>
  );
}

export default SAC;

import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  qrCode: LiveImage;
  banner: {
    src: LiveImage;
    href: string;
  };
}

export default function Hero({
  qrCode,
  banner,
}: Props) {
  return (
    <section class=" w-full px-0 mx-auto grid grid-cols-[4fr_240px_auto] grid-rows-[auto_auto_auto] text-white">
      <span class="col-span-2 text-[6.5vw] font-bold uppercase border border-base-100 flex items-center pl-9">
        Você no controle
      </span>
      <span class="col-start-1 row-start-2 text-[6.5vw] font-bold uppercase border border-base-100 flex items-center pl-9">
        da sua grana.
      </span>
      <div class="col-start-2 row-start-2 flex border border-base-100">
        <span class="flex hover:text-[#7d2cff] [writing-mode:vertical-rl] rotate-180 uppercase justify-center border border-base-100 text-xl font-semibold px-1">
          Baixe Agora
        </span>{" "}
        <div class="px-3 flex items-center">
          <Image
            src={qrCode}
            alt="qrcode"
            width={180}
            height={180}
            class="w-full"
          />
        </div>
      </div>
      <div class="col-start-3 row-span-2 h-[440px] w-[476px] border border-base-100">
        card
      </div>
      <div class="col-start-1 row-start-3 col-span-3 border border-base-100">
        <a href={banner.href}>
          <Image
            src={banner.src}
            width={1000}
            height={540}
            class="w-full"
          />
        </a>
      </div>
    </section>
  );
}

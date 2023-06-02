import Image from "deco-sites/std/components/Image.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  qrCode: { image: LiveImage; href: string };
  banner: {
    desktop: LiveImage;
    /** @description mobile otimized image */
    mobile: LiveImage;
    src: LiveImage;
    href: string;
    alt: string;
  };
}

export default function Hero({ qrCode, banner }: Props) {
  return (
    <section class=" w-full px-0 mx-auto flex flex-col lg:grid  lg:grid-cols-[4fr_240px_auto] lg:grid-rows-[auto_auto_auto] text-white">
      <span class="col-span-2 text-[9vw] sm:text-[6.5vw] font-bold uppercase border-y border-base-100 flex items-center py-2 px-4 sm:pl-9">
        Você no controle
      </span>
      <span class="col-start-1 row-start-2 text-[9vw] sm:text-[6.5vw] font-bold uppercase border-y border-base-100 flex items-center py-2 px-4 sm:pl-9">
        da sua grana.
      </span>
      <div class="hidden sm:flex col-start-2 row-start-2 border-y border-base-100">
        <span class="flex hover:text-[#7d2cff] [writing-mode:vertical-rl] rotate-180 uppercase justify-center border border-base-100 text-xl font-semibold px-1">
          <a href={qrCode.href}>
            Baixe Agora
          </a>
        </span>
        <div class="px-3 flex items-center">
          <a href={qrCode.href}>
            <Image
              src={qrCode.image}
              alt="qrcode"
              width={180}
              height={180}
              class="w-full"
            />
          </a>
        </div>
      </div>
      <div class="col-start-3 row-span-2 max-h-[440px] max-w-[476px] border-y sm:border border-base-100 relative overflow-hidden">
        <script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          defer
        />
        {/* @ts-ignore */}
        <lottie-player
          src="https://uploads-ssl.webflow.com/6385128589ca38c0cb82b578/63c97aa31e909cd708a4e345_card_girando_475x340%20(2).json"
          background="transparent"
          speed="1"
          style="width: 130%;"
          autoplay
        />
      </div>
      <div class="col-start-1 row-start-3 col-span-3 border-y border-base-100">
        <a href={banner.href}>
          <Picture>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"auto"}
              src={banner.mobile}
              width={475}
              height={545}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"auto"}
              src={banner.desktop}
              width={1920}
              height={545}
            />
            <img
              class="object-cover w-full"
              loading={"lazy"}
              src={banner.desktop}
              alt={banner.alt}
            />
          </Picture>
        </a>
      </div>
    </section>
  );
}

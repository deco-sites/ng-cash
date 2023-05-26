import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  title: string;
  bannerLeft: Banner;
  bannerScreen1: Banner;
  bannerScreen2: Banner;
}

export default function BannerWithText({
  bannerLeft,
  bannerScreen1,
  bannerScreen2,
}: Props) {
  return (
    <section
      class={`justify-center flex pl-[5%] pr-[10%] py-14  w-full mx-auto`}
    >
      <div
        class={`flex items-center `}
      >
        <Picture class="">
          <Source
            media="(max-width: 767px)"
            src={bannerLeft.srcMobile}
            width={100}
            height={100}
          />
          <Source
            media="(min-width: 768px)"
            src={bannerLeft.srcDesktop
              ? bannerLeft.srcDesktop
              : bannerLeft.srcMobile}
            width={732}
            height={498}
          />
          <img
            class="w-full"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={bannerLeft.srcMobile}
            alt={bannerLeft.alt}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      </div>
      <div class="flex gap-8">
        <Picture class="w-[320px]">
          <Source
            media="(max-width: 767px)"
            src={bannerScreen2.srcMobile}
            width={100}
            height={100}
          />
          <Source
            media="(min-width: 768px)"
            src={bannerScreen2.srcDesktop
              ? bannerScreen2.srcDesktop
              : bannerScreen2.srcMobile}
            width={425}
            height={803}
          />
          <img
            class="w-full"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={bannerScreen2.srcMobile}
            alt={bannerScreen2.alt}
            decoding="async"
            loading="lazy"
          />
        </Picture>
        <Picture class="w-[320px]">
          <Source
            media="(max-width: 767px)"
            src={bannerScreen1.srcMobile}
            width={100}
            height={100}
          />
          <Source
            media="(min-width: 768px)"
            src={bannerScreen1.srcDesktop
              ? bannerScreen1.srcDesktop
              : bannerScreen1.srcMobile}
            width={425}
            height={803}
          />
          <img
            class="w-full"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={bannerScreen1.srcMobile}
            alt={bannerScreen1.alt}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      </div>
    </section>
  );
}

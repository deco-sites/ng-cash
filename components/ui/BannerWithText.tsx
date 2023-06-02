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
  banner: Banner;
  backgroundImg: {
    srcMobile: LiveImage;
    srcDesktop?: LiveImage;
  };
}

export default function BannerWithText({
  title,
  banner,
  backgroundImg,
}: Props) {
  return (
    <section
      class={`relative w-full mx-auto isolate`}
    >
      <Picture>
        <Source
          media="(max-width: 767px)"
          src={backgroundImg.srcMobile}
          width={500}
          height={500}
        />
        <Source
          media="(min-width: 768px)"
          src={backgroundImg.srcDesktop
            ? backgroundImg.srcDesktop
            : backgroundImg.srcMobile}
          width={1000}
          height={400}
        />
        <img
          class=" inset-0 w-full lg:max-w-full absolute -z-10"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={backgroundImg.srcMobile}
          decoding="async"
          loading="lazy"
        />
      </Picture>
      <div class="py-16 px-8 sm:px-[200px] sm:py-[10%] items-center flex flex-col lg:flex-row lg:grid lg:grid-cols-[.25fr_auto] gap-5  lg:gap-[130px] ">
        <div
          class={`grid gap-4 md:gap-6 w-[170px] lg:w-[320px] `}
        >
          <a
            href={banner.href}
            class={`overflow-hidden`}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={banner.srcMobile}
                width={170}
                height={321}
              />
              <Source
                media="(min-width: 768px)"
                src={banner.srcDesktop ? banner.srcDesktop : banner.srcMobile}
                width={425}
                height={803}
              />
              <img
                class="w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={banner.srcMobile}
                alt={banner.alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        </div>
        {title &&
          (
            <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6 text-white">
              <h2 class="text-[6vw] lg:text-[3vw] font-medium">
                {title}
              </h2>
            </div>
          )}
      </div>
    </section>
  );
}

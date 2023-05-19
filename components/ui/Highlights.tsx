import Image from "deco-sites/std/components/Image.tsx";
import Slider from "deco-sites/fashion/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  hoverSrc: LiveImage;
  alt: string;
  title: string;
  subtitle: string;
  button?: {
    label?: string;
    href?: string;
  };
}

export interface Props {
  highlights?: Highlight[];
}

function Highlights({ highlights = [] }: Props) {
  return (
    <div class="container py-10">
      <Slider class="carousel carousel-center sm:carousel-end gap-6">
        {highlights.map((
          { src, alt, title: itemTitle, subtitle, hoverSrc, button },
          index,
        ) => {
          const hasAction = button?.label && button.href;
          return (
            <Slider.Item
              index={index}
              class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 w-[700px]"
            >
              <div class="card card-compact  border-base-100 border h-[656px] rounded-2xl overflow-hidden">
                <figure class="h-[350px] border-b border-base-100 group relative">
                  <Image
                    class="h-full w-full"
                    src={src}
                    alt={alt}
                    width={300}
                    height={139}
                  />
                  <Image
                    class="absolute h-full w-full invisible group-hover:visible"
                    src={hoverSrc}
                    alt={alt}
                    width={300}
                    height={139}
                  />
                </figure>
                <div class="text-base-100 bg-black p-8 flex flex-col items-start">
                  <h2
                    class={`card-title font-bold ${
                      hasAction ? "text-6xl" : "text-7xl"
                    } uppercase mb-[20px]`}
                  >
                    {itemTitle}
                  </h2>
                  <div class="text-[27px] font-light w-[70%]">
                    {subtitle}
                  </div>
                  {hasAction && (
                    <a
                      href={button.href}
                      class="border rounded-xl py-4 px-8 flex leading-none mt-4"
                    >
                      {button.label}
                    </a>
                  )}
                </div>
              </div>
            </Slider.Item>
          );
        })}
      </Slider>
    </div>
  );
}

export default Highlights;

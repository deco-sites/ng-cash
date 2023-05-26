import Image from "deco-sites/std/components/Image.tsx";
import Slider from "deco-sites/fashion/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

export interface Rating {
  title: string;
  subtitle: string;
}

export interface Props {
  title: string;
  googlePlay: number;
  appStore: number;
  ratings?: Rating[];
}

function ratings({ title, ratings = [], appStore, googlePlay }: Props) {
  return (
    <div class="container py-10 m-8 border border-base-100">
      {title &&
        (
          <div class="py-2 px-8  md:pb-[40px] flex items-center border-b border-base-100">
            <h2 class="text-[6.6vw] text-white font-semibold uppercase">
              {title}
            </h2>
          </div>
        )}
      <div class="flex text-white">
        <div class="border border-base-100 text-[1.7vw] py-4 px-8 font-bold">
          <span>
            <Icon id="Star" size={18} class="inline mr-4" /> {googlePlay}{" "}
            Google Play
          </span>
        </div>
        <div class="border border-base-100 text-[1.7vw] py-4 px-8 font-bold">
          <span>
            <Icon id="Star" size={18} class="inline mr-4" /> {appStore}{" "}
            App Store
          </span>
        </div>
      </div>
      <Slider class="carousel carousel-center sm:carousel-end gap-8 py-[100px] px-8">
        {ratings.map((
          { title: itemTitle, subtitle },
          index,
        ) => {
          return (
            <Slider.Item
              index={index}
              class="carousel-item  w-[440px]"
            >
              <div class="card card-compact py-12 px-8 border-base-100 border h-[340px] rounded-2xl overflow-hidden">
                <div class="text-base-100 bg-black flex flex-col items-start">
                  <h2
                    class={` font-bold text-[2vw] mb-[10px] inline-block`}
                  >
                    {itemTitle}
                  </h2>
                  <div class="font-light text-[1.4vw]">
                    {subtitle}
                  </div>
                </div>
              </div>
            </Slider.Item>
          );
        })}
      </Slider>
    </div>
  );
}

export default ratings;

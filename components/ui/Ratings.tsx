import Slider from "deco-sites/fashion/components/ui/Slider.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import SliderJS from "deco-sites/fashion/islands/SliderJS.tsx";
import { useId } from "preact/hooks";

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
  const id = useId();
  return (
    <div
      id={id}
      class="container lg:py-10 mx-4 lg:mx-8 m-8 border border-base-100 max-w-[calc(100%_-_2rem)]"
    >
      {title &&
        (
          <div class="py-2 px-4 lg:px-8 md:pb-[40px] flex items-center border-b border-base-100">
            <h2 class="text-[8vw] lg:text-[6.6vw] text-white font-semibold uppercase">
              {title}
            </h2>
          </div>
        )}
      <div class="flex text-white w-full">
        <div class="border border-base-100 text-[4.3vw] lg:text-[1.7vw] p-[10px] lg:py-4 lg:px-8 font-bold w-1/2 lg:w-auto">
          <span>
            <Icon
              id="Star"
              size={18}
              class="inline lg:mr-4 mr-2 max-w-[12px] lg:max-w-none"
            />
            {googlePlay} Google Play
          </span>
        </div>
        <div class="border border-base-100 text-[4.3vw] lg:text-[1.7vw] p-[10px] lg:py-4 lg:px-8 font-bold w-1/2 lg:w-auto">
          <span>
            <Icon
              id="Star"
              size={18}
              class="inline lg:mr-4 mr-2 max-w-[12px] lg:max-w-none"
            />
            {appStore} App Store
          </span>
        </div>
      </div>
      <Slider class="carousel carousel-center sm:carousel-end gap-8 py-10 lg:py-[100px] px-8">
        {ratings.map((
          { title: itemTitle, subtitle },
          index,
        ) => {
          return (
            <Slider.Item
              index={index}
              class="carousel-item lg:w-[440px] w-[230px]"
            >
              <div class="card card-compact px-4 pt-6 pb-8 lg:py-12 lg:px-8 border-base-100 border lg:h-[340px] rounded-2xl overflow-hidden">
                <div class="text-base-100 bg-black flex flex-col items-start">
                  <h2
                    class={` font-bold text-[4.5vw] lg:text-[2vw] mb-[10px] inline-block`}
                  >
                    {itemTitle}
                  </h2>
                  <div class="font-light text-[3.8vw] lg:text-[1.4vw]">
                    {subtitle}
                  </div>
                </div>
              </div>
            </Slider.Item>
          );
        })}
      </Slider>
      <SliderJS rootId={id} />
    </div>
  );
}

export default ratings;

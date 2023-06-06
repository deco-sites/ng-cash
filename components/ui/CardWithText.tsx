import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  card: LiveImage;
}

export default function CardWithText({
  card,
}: Props) {
  return (
    <section class="w-full px-0 flex flex-col lg:flex-row text-white isolate pt-16 pb-4 items-center lg:items-stretch">
      <div class="px-3 flex items-center justify-center lg:max-w-[440px] max-w-[90%] -mb-3 lg:mb-0 lg:-mt-4 ">
        <Image
          src={card}
          alt="qrcode"
          width={180}
          height={180}
          class="w-full"
        />
      </div>
      <div class="w-full z-[-1]">
        <span class="text-[8vw] lg:text-[6vw] py-2 lg:py-0 font-bold uppercase border-y lg:border border-base-100 flex items-center px-4 lg:pl-9">
          NG.Card
        </span>
        <span class="text-[8vw] lg:text-[6vw] py-2 lg:py-0 lg:ml-[-111px] px-4 md:pr-0 lg:pl-[140px] font-bold uppercase border-y lg:border-l border-base-100 flex items-center text-transparent [-webkit-text-stroke:_1px_white]">
          Nome personalizado
        </span>
        <span class="text-[8vw] lg:text-[6vw] py-2 lg:py-0 font-bold uppercase border-y lg:border border-base-100 flex items-center px-4 lg:pl-9 text-transparent [-webkit-text-stroke:_1px_white]">
          Aproximação
        </span>
        <div class="flex items-center lg:ml-[-100px]">
          <span class="text-[8vw] lg:text-[6vw] py-2 lg:py-0 font-bold uppercase flex items-center px-4 lg:px-9 text-transparent [-webkit-text-stroke:_1px_white]">
            +Segurança
          </span>
          <ul>
            <li class="text-[3.5vw] lg:text-[1.8vw] font-thin leading-none">
              Crédito pré pago
            </li>
            <li class="text-[3.5vw] lg:text-[1.8vw] font-thin leading-none">
              Cartão virtual
              <br /> para compras online
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

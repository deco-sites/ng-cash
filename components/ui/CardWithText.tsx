import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  card: LiveImage;
}

export default function CardWithText({
  card,
}: Props) {
  return (
    <section class="  w-full px-0 flex text-white isolate pt-16 pb-4">
      <div class="px-3 flex items-center max-w-[440px] -mt-4">
        <Image
          src={card}
          alt="qrcode"
          width={180}
          height={180}
          class="w-full"
        />
      </div>
      <div class="w-full z-[-1]">
        <span class=" text-[6vw] font-bold uppercase border border-base-100 flex items-center pl-9">
          NG.Card
        </span>
        <span class="text-[6vw] ml-[-111px] pl-[140px] font-bold uppercase border-y border-l border-base-100 flex items-center text-transparent [-webkit-text-stroke:_1px_white]">
          Nome personalizado
        </span>
        <span class="text-[6vw] font-bold uppercase border border-base-100 flex items-center pl-9  text-transparent [-webkit-text-stroke:_1px_white]">
          Aproximação
        </span>
        <div class="flex items-center ml-[-100px]">
          <span class="text-[6vw] font-bold uppercase flex items-center px-9  text-transparent [-webkit-text-stroke:_1px_white]">
            +Segurança
          </span>
          <ul>
            <li class="text-[1.8vw] font-thin leading-none">
              Crédito pré pago
            </li>
            <li class="text-[1.8vw] font-thin leading-none">
              Cartão virtual
              <br /> para compras online
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

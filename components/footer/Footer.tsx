import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type IconItem = { icon: AvailableIcons };

export type IconWithLink = { href: string } & IconItem;
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-white">
      {isIcon(item)
        ? (
          <div class="border-base-100 border rounded-2xl border-solid p-3 lg:p-4 ">
            <Icon
              id={item.icon}
              width={68}
              height={68}
              strokeWidth={0.01}
              class="max-w-[38px] max-h-[38px] lg:max-h-none lg:max-w-none "
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
  socials?: IconWithLink[];
  qrCode: LiveImage;
  logo: LiveImage;
  ngCardCustomizavel: LiveImage;
  institutionalImage1: LiveImage;
  institutionalImage2: LiveImage;
}

function Footer(
  {
    sections = [],
    socials,
    qrCode,
    logo,
    ngCardCustomizavel,
    institutionalImage1,
    institutionalImage2,
  }: Props,
) {
  return (
    <footer class="w-full flex flex-col pb-36 ">
      <div>
        <div class="w-full flex flex-col text-white">
          <FooterContainer class="grid grid-cols-[1.25fr_1fr] grid-flow-row md:grid-cols-[1fr_.5fr_1.25fr_1.25fr_.25fr_1.5fr] md:grid-rows-2 gap-4 ">
            <a
              href="https://www.ng.cash/duvidas-frequentes"
              class="block font-bold text-[6vw] md:text-[2vw] px-6 py-8 uppercase border border-white rounded-2xl leading-none col-span-2 md:col-span-1 font-mono"
            >
              Dúvidas frequentes
            </a>
            <div class="border border-white rounded-2xl md:row-span-2  flex-col justify-between row-start-2 md:row-start-auto col-span-2 md:col-span-1 contents md:flex">
              <a
                href="/termos-de-uso"
                class="flex flex-col gap-4 py-8 p-6 leading-none border border-white rounded-2xl md:border-none "
              >
                <span class="uppercase font-semibold text-[6vw] md:text-[2vw] font-mono">
                  Termos de uso
                </span>
                <div>
                  <Image
                    src={institutionalImage1}
                    alt="Termos de uso"
                    width={180}
                    height={180}
                    class="w-full max-w-[90%]"
                  />
                </div>
              </a>
              <div class="bg-white h-[1px] hidden md:block" />
              <a
                href="/politica-de-privacidade"
                class="flex flex-col gap-8 align-bottom  pt-8 px-6 leading-none  border border-white rounded-2xl  lg:border-none "
              >
                <span class="uppercase font-semibold text-[6vw] md:text-[2vw]">
                  Política de Privacidade
                </span>
                <div>
                  <Image
                    src={institutionalImage2}
                    alt="Política de Privacidade"
                    width={180}
                    height={180}
                    class="w-full"
                  />
                </div>
              </a>
            </div>
            <div class="border border-white rounded-2xl md:row-start-2 md:col-start-3 col-span-2 divide-white divide-y">
              <div class="uppercase py-4 px-6 text-[6vw] md:text-[2vw] font-bold leading-none font-mono">
                Se Der Beyblade:
              </div>
              <div class="py-4 px-6">
                <div>
                  <a href="text-bold underline font-bold">
                    Clique aqui para a central de atendimento
                  </a>
                </div>
                <div>
                  <span>
                    Entre em contato com{" "}
                    <a href="mailto:suporte@ng.cash">suporte@ng.cash</a>
                  </span>
                </div>
              </div>
              <div class="py-4 px-6 text-[1.2vw]">
                <div>
                  <span>Não conseguiu resolver o seu problema?</span>
                </div>
                <div>
                  <span>
                    Entre em contato com{" "}
                    <a href="mailto:suporte@ng.cash">suporte@ng.cash</a>
                  </span>
                </div>
                <div>
                  <span class="text-[1vw]">
                    Atendimento de segunda a sexta, das 9h às 18h - exceto
                    feriados.
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 sm:p-8 flex items-center border border-base-100 rounded-2xl lg:py-8 lg:pl-8 lg:pr-11">
              <Image
                src={logo}
                alt="logo"
                width={180}
                height={180}
                class="w-full"
              />
            </div>
            <ul class="grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-2 lg:gap-4 justify-self-start content-start justify-items-start">
              {socials?.map((item) => (
                <li class="max-w-[80px] max-h-[80px] lg:max-w-[100px] lg:max-h-[100px]">
                  <SectionItem item={item} />
                </li>
              ))}
            </ul>
            <div class="flex hover:text-[#7d2cff] text-white md:[writing-mode:vertical-rl] md:rotate-180 uppercase justify-center border border-base-100 text-[6vw] h-[60px] md:h-auto md:text-[1.8vw] font-semibold px-1 rounded-2xl items-center col-span-2 md:col-span-1 row-start-4 md:row-start-auto">
              Baixe Agora
            </div>
            <div class="hidden md:flex px-3 items-center justify-center border border-base-100 rounded-2xl">
              <Image
                src={qrCode}
                alt="qrcode"
                width={180}
                height={180}
                class="w-full max-w-[288px]"
              />
            </div>
            <div class="flex flex-col border border-white rounded-2xl p-4 text-white md:col-start-5 col-span-2 gap-4">
              <a
                href="https://app.ng.cash/UB8S/rho4elo5"
                class="block border border-white rounded-2xl p-6 text-[4vw] md:text-[1.6vw]"
              >
                Baixar na <br /> APP Store
              </a>
              <a
                href="https://app.ng.cash/UB8S/rho4elo5"
                class="block border border-white rounded-2xl p-6 text-[4vw] md:text-[1.6vw]"
              >
                Baixar na<br /> Google play
              </a>
            </div>
            <div class="hidden lg:flex col-start-1 row-start-2 align-bottom justify-center">
              <Image
                src={ngCardCustomizavel}
                alt="NG Card Customizavel"
                width={147}
                height={150}
                class="w-full max-w-[85%]"
              />
            </div>
          </FooterContainer>
        </div>
      </div>

      <div>
        <div class="container w-full bg-white overflow-hidden">
          <style
            dangerouslySetInnerHTML={{
              __html: `@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}`,
            }}
          >
          </style>
          <div
            className="loop-slider"
            style={{
              "--duration": `5000ms`,
              "--direction": "reverse",
            }}
          >
            <div className="flex w-fit 
              [animation-name:_loop;]
              [animation-timing-function:_linear;]
              [animation-iteration-count:_infinite;]
              [animation-direction:_var(--direction);]
              [animation-duration:_var(--duration);]">
              <span class="uppercase text-2xl whitespace-nowrap  mr-1">
                Ng Cast Instituição de pagamento ltda. - cnpj 40.710.595 /0001-
                93 &copy;
              </span>
              <span class="uppercase text-2xl whitespace-nowrap mr-1">
                Ng Cast Instituição de pagamento ltda. - cnpj 40.710.595 /0001-
                93 &copy;
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useId } from "preact/hooks";

const script = (id: string) => `
const callback = () => {
  const KEY = 'store-cookie-consent';
  const ACCEPTED = 'accepted';
  const HIDDEN = "translate-y-[200%]";
  
  const consent = localStorage.getItem(KEY);
  const elem = document.getElementById("${id}");
  
  if (consent !== ACCEPTED) {
    elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
      localStorage.setItem(KEY, ACCEPTED);
      elem.classList.add(HIDDEN);
    });
    elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
      elem.classList.add(HIDDEN);
    });
    elem.classList.remove(HIDDEN);
  }
};

window.addEventListener('scroll', callback, { once: true });
`;

function CookieConsent() {
  const id = `cookie-consent-${useId()}`;

  return (
    <>
      <div
        id={id}
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 w-screen z-50 bg-base-100"
      >
        <div class="px-4 py-6 mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow max-w-[1000px]">
          <span class="text-sm leading-4">
            Ao clicar em{" "}
            <span class="font-semibold">“Aceitar”</span>, você concorda com o
            armazenamento de cookies em seu dispositivo para aprimorar a
            navegação no site, analisar o uso do site e auxiliar em nossos
            esforços de marketing. Veja nossa{" "}
            <a href="https://www.deco.cx">
              <span class="underline text-sm">
                política de privacidade
              </span>
            </a>{" "}
            para mais informações.
          </span>

          <div class="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              data-button-cc-close
              class="btn-outline rounded-full py-[10px] px-5 normal-case min-w-[96px] w-full max-w-[140px]"
            >
              Recusar
            </Button>
            <Button
              data-button-cc-accept
              class="rounded-full py-[10px] px-5 normal-case min-w-[96px] w-full max-w-[140px]"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;

import { kyraChatCards } from "@/utils/kyra-chat-cards";

import { TextArea } from "./text-area";

export const KyraChat = () => (
  <section className="flex w-full flex-1 items-center justify-center p-8">
    <article className="flex max-w-(--breakpoint-lg) flex-col">
      <h2 className="font-redonda w-full bg-linear-to-r from-orange-600 to-orange-950 bg-clip-text text-3xl leading-tight text-transparent lg:text-5xl">
        Hi there, I{"'"}m Kyra <br />
        What would you like to know?
      </h2>
      <h3 className="font-redonda text-grey mb-15 w-full text-xl">
        Use one of the most common prompts below or use or own to begin
      </h3>
      <ul className="mb-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kyraChatCards.map(({ text }, index) => (
          <li
            key={index}
            className="border-grey text-secondary flex-1 border px-2.5 py-4 pb-6 lg:pb-10"
          >
            <p>{text}</p>
          </li>
        ))}
      </ul>
      <TextArea />
    </article>
  </section>
);

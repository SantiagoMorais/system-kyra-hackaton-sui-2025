import { kyraChatCards } from "@/utils/kyra-chat-cards";

export const KyraChat = () => (
  <main className="flex h-fit flex-1 items-center justify-center p-8 md:min-h-dvh">
    <section className="flex max-w-(--breakpoint-lg) flex-col">
      <h2 className="font-redonda w-full bg-linear-to-r from-orange-600 to-orange-950 bg-clip-text text-3xl leading-tight text-transparent md:text-5xl">
        Hi there, Kyra <br />
        What would like you know?
      </h2>
      <h3 className="font-redonda text-grey mb-15 w-full text-xl">
        Use one of the most common prompts below or use or onw to begin
      </h3>
      <ul className="flex w-full flex-col gap-4 md:flex-row">
        {kyraChatCards.map(({ text }, index) => (
          <li
            key={index}
            className="border-grey flex-1 border px-2.5 py-4 pb-6 text-white md:pb-10"
          >
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

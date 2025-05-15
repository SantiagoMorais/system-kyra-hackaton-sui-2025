import Image from "next/image";

import { kyraDiscoverNewsData } from "@/utils/kyra-discover-news-data";

export const KyraDiscoverContent = () => (
  <section className="flex h-full flex-col space-y-9 pb-4">
    <ul className="space-y-9">
      {kyraDiscoverNewsData.map(({ banner, title }, index) => (
        <li key={index} className="relative h-45 w-full">
          <Image src={banner} alt="News banner" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 flex h-20 w-full flex-col justify-between p-2.5 py-1 backdrop-blur-lg">
            <p className="text-secondary relative z-20 text-sm uppercase">
              Last News
            </p>
            <p className="font-redonda line-clamp-2 text-sm text-white">
              {title}
            </p>
          </div>
        </li>
      ))}
    </ul>
    <div className="border-grey/60 mt-auto border px-6 py-4.5">
      <button className="text-secondary w-full bg-orange-600 p-2 text-center uppercase duration-300 hover:bg-orange-500">
        Save your preferences
      </button>
    </div>
  </section>
);

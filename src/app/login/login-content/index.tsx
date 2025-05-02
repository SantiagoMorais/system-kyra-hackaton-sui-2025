import { loginListItem } from "@/styles";
import { listContent } from "@/utils/login-content-list";

export const LoginContent = () => (
  <section className="flex flex-col items-center gap-3 p-4">
    <div className="bg-off-white/30 flex flex-col items-center gap-3 rounded-md p-4 md:bg-none">
      <h2 className="font-redonda text-[40px] leading-13 font-normal text-orange-600">
        Connect Wallet
      </h2>
      <p className="text-grey text-center leading-6">
        By connecting your waller, you agree yo our{" "}
        <a href="#" target="_blank" className="text-orange-600">
          Terms of Service
        </a>{" "}
        and our{" "}
        <a href="#" target="_blank" className="text-orange-600">
          Privacy Policy.
        </a>
      </p>
      <ul className="w-full space-y-4">
        {listContent.map((item) => (
          <li key={item} className={loginListItem()}>
            {item}
          </li>
        ))}
      </ul>
      <button className="text-orange-600">Forget Password?</button>
    </div>
  </section>
);

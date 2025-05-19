import { orderedRemindersList } from "@/utils/reminders-list";

export const KyraRemindersContent = () => (
  <section className="flex h-full flex-col gap-3 pt-4 pb-4">
    <div className="flex justify-between gap-2">
      <p className="text-grey/60 text-sm font-medium uppercase">DATE</p>
      <p className="text-grey/60 text-sm font-medium uppercase">BALANCE</p>
    </div>
    <ul className="grid grid-cols-1 gap-3">
      {orderedRemindersList.map(({ balance, date }, index) => (
        <li
          key={index}
          className="hover:bg-dark-grey/50 bg-dark-grey flex justify-between p-3 duration-300 select-none"
        >
          <p className="text-light-grey text-sm font-medium uppercase">
            {date}
          </p>
          <p className="text-light-grey text-sm font-medium uppercase">
            {balance}
          </p>
        </li>
      ))}
    </ul>
    <div className="border-grey/60 mt-auto border px-6 py-4.5">
      <button className="text-secondary w-full bg-orange-600 p-2 text-center uppercase duration-300 hover:bg-orange-500">
        reminders
      </button>
    </div>
  </section>
);

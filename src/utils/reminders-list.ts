export const remindersList: { date: string; balance: string }[] = [
  { date: "01/06", balance: "12.33 XRP" },
  { date: "04/06", balance: "8 SUI" },
  { date: "08/06", balance: "0.000876 BTC" },
  { date: "14/06", balance: "1.2 ETH" },
  { date: "14/06", balance: "4 SOL" },
  { date: "22/06", balance: "0.0564 BTC" },
  { date: "03/07", balance: "0.00000987 BTC" },
  { date: "08/07", balance: "0.09 SOL" },
  { date: "09/07", balance: "0.98 ETH" },
  { date: "22/08", balance: "1.2 SUI" },
  { date: "03/09", balance: "4 LINK" },
  { date: "09/09", balance: "0.08 ETH" },
];

export const orderedRemindersList = remindersList.sort((a, b) => {
  const [dayA, monthA] = a.date.split("/").map(Number);
  const [dayB, monthB] = b.date.split("/").map(Number);

  const dateA = new Date(2024, monthA - 1, dayA);
  const dateB = new Date(2024, monthB - 1, dayB);

  return dateA.getTime() - dateB.getTime();
});

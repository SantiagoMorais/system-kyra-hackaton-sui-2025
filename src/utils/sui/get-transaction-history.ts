import { suiClient } from "@/lib/sui/suiClient";

export const getTransactionHistory = async (address: string) => {
  // Consultar transações enviadas
  const sentTransactions = await suiClient.queryTransactionBlocks({
    filter: { FromAddress: address },
    options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
      showBalanceChanges: true,
    },
  });

  // Consultar transações recebidas
  const receivedTransactions = await suiClient.queryTransactionBlocks({
    filter: { ToAddress: address },
    options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
      showBalanceChanges: true,
    },
  });

  // Combinar e ordenar transações por timestamp
  const transactions = [...sentTransactions.data, ...receivedTransactions.data];

  return transactions;
};

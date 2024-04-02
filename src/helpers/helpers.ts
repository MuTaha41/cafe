import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";

// Assuming PizzaData is a new type you have created that represents the food data structure
export const storePizzaData = async (data: PizzaData): Promise<void> => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        // Encoding food data instead of weather data
        const note = algosdk.encodeObj(data);

        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Still sending the transaction to oneself
            amount: 1000, // The minimum amount can stay the same unless you have a reason to change it
            note: note,
            suggestedParams: suggestedParams,
        });

        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();

        console.log("Transaction ID:", sendTxn.txId);
    } catch (error) {
        console.error("Failed to store pizza data:", error);
    }
};

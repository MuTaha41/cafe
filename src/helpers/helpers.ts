import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";
//import { RestaurantData } from "../types/global"; // Import the RestaurantData type
import { RestaurantData } from "../types/global.js";


export const storeRestaurantData = async (data: RestaurantData): Promise<void> => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        // Encode the restaurant data instead of weather data
        const note = algosdk.encodeObj(data);
        
        // Construct a transaction with the encoded note
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });

        // Sign the transaction
        const signedTxn = txn.signTxn(account.sk);
        
        // Send the transaction
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        
        console.log("Transaction ID:", sendTxn.txId);
    } catch (error) {
        console.error("Failed to store restaurant data:", error);
    }
};

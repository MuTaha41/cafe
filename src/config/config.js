"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
var algosdk_1 = require("algosdk");
var algodToken = "a".repeat(64);
var server = "http://localhost";
var port = "4001";
var mnemonic = "scissors chuckle arctic manage erase hello crisp range piano hope session laundry unknown doll blade rain snack mind volume wrap spawn screen gate abstract corn";
// "canoe mule cart impulse debris bachelor pelican case rocket apart donkey blanket loan grief upper lake pyramid turtle amused amateur alcohol safe armor abandon lumber";
function getClient() {
    var client = new algosdk_1.default.Algodv2(algodToken, server, port);
    return client;
}
exports.getClient = getClient;
function getAccount() {
    var account = algosdk_1.default.mnemonicToSecretKey(mnemonic);
    return account;
}
exports.getAccount = getAccount;

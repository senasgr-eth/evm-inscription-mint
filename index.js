const { ethers } = require("ethers");
const config = require("./config")

// Connect to the node
const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);

// Create wallet.
const wallet = new ethers.Wallet(config.privateKey.trim(), provider);

// Convert to hexadecimal
const convertToHexa = (str = '') =>{
   const res = [];
   const { length: len } = str;
   for (let n = 0, l = len; n < l; n ++) {
      const hex = Number(str.charCodeAt(n)).toString(16);
      res.push(hex);
   };
   return `0x${res.join('')}`;
}

// Retrieve the current account's nonce
async function getCurrentNonce(wallet) {
  try {
    const nonce = await wallet.getTransactionCount("pending");
    console.log("Nonce:", nonce);
    return nonce;
  } catch (error) {
    console.error("Error fetching nonce:", error.message);
    throw error;
  }
}

// Retrieve the current mainnet gas price.
async function getGasPrice() {
  const gasPrice = await provider.getGasPrice();
  return gasPrice;
}

// Fetch real-time data from the blockchain, gasLimit
async function getGasLimit(hexData, address) {
  const gasLimit = await provider.estimateGas({
    to: address,
    value: ethers.utils.parseEther("0"),
    data: hexData,
  });

  return gasLimit.toNumber();
}

// Transfer transaction
async function sendTransaction(nonce) {
  const hexData	= convertToHexa(config.tokenJson.trim());
  // Retrieve real-time gasPrice
  const currentGasPrice = await getGasPrice();
  // Increase by a certain multiple on the current gasPrice.
  const gasMultiple = parseInt(String(config.increaseGas * 100))
  const increasedGasPrice = currentGasPrice.div(100).mul(gasMultiple);
  // Get wallet address
  //const address = await wallet.getAddress();
  const sendaddr = await config.sendaddr // Retrieve the sendaddr variable from config file
  // Retrieve the current gasLimit limit
  const gasLimit = await getGasLimit(hexData, sendaddr);

  const transaction = {
    to: sendaddr,
	// Replace with the amount you want to transfer.
    value: ethers.utils.parseEther("0"),
    // Hexadecimal data
    data: hexData,
    // Configure nonce
    nonce: nonce,
    // Set gas price
    gasPrice: increasedGasPrice,
	// Limit gasLimit according to the current network transfer settings. If you're unsure, check a block explorer to see the successful gasLimit of others' transactions.
    gasLimit: gasLimit,
  };

  try {
    const tx = await wallet.sendTransaction(transaction);
    console.log(`Transaction with nonce ${nonce} hash:`, tx.hash);
  } catch (error) {
    console.error(`Error in transaction with nonce ${nonce}:`, error.message);
  }
}

// Send multiple transactions.
async function sendTransactions() {
  const currentNonce = await getCurrentNonce(wallet);
  const gasPrice = await getGasPrice();

  for (let i = 0; i < config.repeatCount; i++) {
    await sendTransaction(currentNonce + i, gasPrice);
  }
}

sendTransactions();

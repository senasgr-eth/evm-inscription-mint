# Automated Rune Mint Script Compatible with EVM Chains

## 🛠 Usage Instructions

### Step 1: Install Node.js

First, download and install the version of Node.js that corresponds to your computer's operating system from the Node.js official website:

```bash
https://nodejs.org/en
```

Check if the installation was successful by running:


```bash
node -v
npm -v
```

If you prefer using Yarn, install it with:

```bash
npm i -g yarn
```

### Step 2: Download the Script Source Code

Clone the source code to your local machine using git:

```bash
git clone https://github.com/sfter/evm-inscription-mint.git

cd evm-inscription-mint
```
If you are using a Windows computer and don't have Git installed, download and install Git from the following website:

```bash
https://gitforwindows.org
```

### Step 3: Modify the config.js Configuration File in the Current Directory

```javascript
const config = {
    // Set the number you want to mint here. It is recommended not to exceed 50 at a time, otherwise it may not be successfully recorded on the chain.

    repeatCount: 1,

    // Increase by how many times on the current gas base.
    increaseGas: 1.2,

    //  Your wallet's private key.
    privateKey: "",

    // Walllet to send inscribe tx to
    sendaddr:"",

    // JSON data (replace with the JSON-formatted data of the runes you want to inscribe).
    tokenJson: 'data:,{"p":"fair-20","op":"mint","tick":"fair","amt":"1000"}',

    //  RPC node (compatible with any EVM chain). Use the node address of the chain you want to interact with.
    // eth =>  https://mainnet.infura.io/v3
    // arb => https://arb1.arbitrum.io/rpc
    // polygon => https://polygon-rpc.com
    // op => https://mainnet.optimism.io
    // linea => https://mainnet.infura.io/v3
    // scroll => https://rpc.scroll.io
    // zks => https://mainnet.era.zksync.io
    rpcUrl: "https://arb1.arbitrum.io/rpc"
}
```

### Step 4: Install Dependencies

```bash
npm i
```
or
```bash
yarn install
```

Step 5: Run the Mint Script Program
```shell
node index.js
```
or
```shell
yarn start
```
or
```shell
npm run start
```

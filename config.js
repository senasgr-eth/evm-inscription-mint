const config = {
    // Set the number you want to mint here. It is recommended not to exceed 50 at a time, otherwise it may not be successfully recorded on the chain.

    repeatCount: 10,

    // Increase by how many times on the current gas base.
    increaseGas: 1.2,

    // The private key of your walle
    privateKey: "*****",
    sendaddr: "0x00000",

    // inscription JSON data (replace with the JSON-formatted data of the runes you want to engrave)
    tokenJson: 'data:,{"a":"NextInscription","p":"oprc-20","op":"mint","tick":"NI","amt":"10000"}',

    // RPC结点（兼容 evm 链都行）打哪条链就用哪条链的节点地址
    // eth =>  https://mainnet.infura.io/v3
    // arb => https://arb1.arbitrum.io/rpc
    polygon => https://polygon-rpc.com
    // op => https://mainnet.optimism.io
    // linea => https://mainnet.infura.io/v3
    // scroll => https://rpc.scroll.io
    // zks => https://mainnet.era.zksync.io
    //rpcUrl: "https://arb1.arbitrum.io/rpc"
}

module.exports = config

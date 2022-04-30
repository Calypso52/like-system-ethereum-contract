const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'crack long crew pause sustain museum dad author unknown slender wish source';

module.exports = {
   contracts_build_directory: './frontend/src/contracts',

  networks: {
    rsk: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://public-node.testnet.rsk.co'
      ),
      network_id: 31,
      skipDryRun: true
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",
    }
  }
};
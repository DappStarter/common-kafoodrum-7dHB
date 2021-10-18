require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue remember machine social hunt castle outer swap'; 
let testAccounts = [
"0x840dd423a15ff45debebf6225a165bf698b2aed69c3dcca432169418309e7ebe",
"0xc4d727df0a9cccd277c69cdb67b9a094ec4f1f7eb700b07ce1d2ba5f2752c5ff",
"0x9f79dfba9861b03c57f5d8a9d849664ce7a48def1aa183ca96c2dd045fd5ecb6",
"0xf37ece9603598165985e1a416096adac1c74fe3e2cadb7597edac0ad64e8f59e",
"0x65da60bfdcbd2bbf8fb4a39af5867227fd6a1b015c747941f6da4ab3e7f2700b",
"0xc30f41869261dee314babf3601b612ec0ec961c18957cf67de1d14783dc67213",
"0x200309776d0ecc3476bec90be1ae921c35d6008b5949cb0beaaf6f2d0e4581c3",
"0xaaafeaf520635769b60ec9e598fe8680946bfa5bc94c747bab640cfbbe949fc8",
"0xd680ed685e8dd5d15fb8b57737cecf465c9c891f6d09028a80b16dc90b1395c5",
"0x5efae2a8a1a82b3f040ff48b04346c8a4e3ad00ea36a2830c71eda22f8c06feb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



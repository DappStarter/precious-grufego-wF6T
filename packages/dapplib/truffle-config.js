require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain unusual install creek flush tenant'; 
let testAccounts = [
"0x4ddb4ce007a7e3994511ceebaab39bd647cf0a247da983264be283ebb87650a5",
"0x4be23484ae9962050e43430c16a0fb30c28db627323f551087eeca806dc5060e",
"0x0c8cdbf3d8a3e9d93f5bf70ff3cd6970d6366a29206f44597f9bf4111b9653e4",
"0xc42a9e37b8655de94a7cd083fe3703fadc6743d470256a47372737b214442822",
"0xf5cbcc9023684012df80bdeb010fb64082b1abbe2eeeeaab5bf89adfa07dbb21",
"0xd87a4621a870545c51401fd0ca56c8825a1ae752df11534979e90c9dacc389ff",
"0x456798fcb9b9d7031e10a3e8608492c8ae2a87a13cafdfc4d644f5c0b8ae85ed",
"0x7bfdf6c175eeb0dad4ae1256a38d5fa37b42ea964b13a5ce63aab5b350dee21b",
"0x8e2814a01b28580983133b9efea36994e2ef582ff98be8f5e59117a3ca5cb057",
"0xdf83feb2c824da24ff91067416b52e32bcba53a0f9e27d1092f2e0e1bc6913b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


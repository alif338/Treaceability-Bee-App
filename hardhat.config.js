require("@nomiclabs/hardhat-waffle");

module.exports = { 
   defaultNetwork: "mumbai", 
   networks: { 
      mumbai: { 
         //Masukkan URL untuk HTTP Alchemy disini 
         url: "https://polygon-mumbai.g.alchemy.com/v2/h7mKAJVX1qk9c1kGf8yNcUGIs8D7FclC", 
         //Masukkan Private Key Wallet Metamask 
         accounts: ["9a23e10fc51bffce7c166194ea0df8505568e9eb23fc4d5f5629e06f1ba692b0"] 
      } 
   }, 
   solidity: { 
      version: "0.8.9", 
      settings: { 
         optimizer: { 
            enabled: true, 
            runs: 200 
         } 
      } 
   }, 
   paths: { 
      sources: "./contracts", 
      tests: "./test", 
      cache: "./cache", 
      artifacts: "./artifacts" 
   }, 
};
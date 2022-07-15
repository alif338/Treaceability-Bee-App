const hre = require("hardhat"); 

async function main() { 
   const Treaceability = await hre.ethers.getContractFactory("Treaceability"); 
   const treaceability = await Treaceability.deploy(); 
   const txHash = treaceability.deployTransaction.hash; 
   const txReceipt = await ethers.provider.waitForTransaction(txHash); 

   await treaceability.deployed(); 

   console.log("Treaceability deployed to address:",  txReceipt.contractAddress); 
} 

main() 
   .then(() => process.exit(0)) 
   .catch((error) => { 
      console.error(error); 
      process.exit(1); 
   });
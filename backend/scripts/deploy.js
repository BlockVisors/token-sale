const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { RESERV_VIP_PASS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const reservVIPPassNFTContract = RESERV_VIP_PASS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const reservTokenContract = await ethers.getContractFactory(
    "ReservToken"
  );

  // deploy the contract
  const deployedReservTokenContract = await reservTokenContract.deploy(
    reservVIPPassNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Reserv Token Contract Address:",
    deployedReservTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
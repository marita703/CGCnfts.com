import { nftCollectionContract } from "@/src/config/Addresses/nftCollectionAddress";
import NFTABI from "@/src/ABIS/nftCollectionAbi.json";
import { ethers } from "ethers";
import web3modal from "web3modal";

export async function connectWallet() {
  const web3Modal = new web3modal();
  const connection = await web3Modal.connect();
  //since we are using web3modal to see what wallet is conected, we pass as an argument the const connection to ethers so he use this wallet that is connected and we can now interact with it
  const provider = new ethers.BrowserProvider(connection);
  console.log("Provider: ", provider);
  // this function will retrive the wallet that is connected
  const signer = await provider.getSigner();
  console.log("type of Signer: ", typeof signer);
  console.log("signer: ", signer);

  //this function will retrive the raw wallet, normally this would return a promise, but I think they changed it...
  const addressRaw = await signer.getAddress();
  console.log("addressRaw: ", addressRaw);

  //this function will stringify the address
  const addressStr = addressRaw.valueOf();
  console.log("addressStr", addressStr);

  //Normally this should accept as a parameter, the signer, but somehow with this new feature from ethers, (new ethers.BrowserProvider(connection)), the signer step is not necessary. so I can pass as a parameter the provider directly... lets see if it work.

  let contract = new ethers.Contract(nftCollectionContract, NFTABI, signer);
  console.log("contract", contract);

  let getIds = await contract.walletOfOwner(addressStr);
  console.log("getIds pos 0: ", getIds[0]?.length);
}

import { nftCollectionContract } from "@/src/config/Addresses/nftCollectionAddress";
import NFTABI from "@/src/ABIS/nftCollectionAbi.json";
import { BrowserProvider, ethers } from "ethers";
import web3modal from "web3modal";
import { useRouter } from "next/router";
import { useState } from "react";

export async function connectWallet(setWeb3Provider: (provider: any) => void) {
  try {
    const web3Modal = new web3modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log("addres: ", address);
    if (provider) {
      setWeb3Provider(provider);
    }
  } catch (err) {
    console.error(err);
  }
}

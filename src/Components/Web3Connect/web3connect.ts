import { BrowserProvider, ethers, Signer } from "ethers";
import web3modal from "web3modal";

let signer: Signer | null = null;
let address: string | null = null;

export async function connectWallet(setWeb3Provider: (provider: any) => void) {
  try {
    const web3Modal = new web3modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log("addres: ", address);
    if (provider) {
      setWeb3Provider(address);
    }
  } catch (err) {
    console.error(err);
  }
}

export { signer, address };

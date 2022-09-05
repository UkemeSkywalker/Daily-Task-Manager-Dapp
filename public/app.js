const {ethers: etherjs} = ethers;
import abi from "./utils/abi.js"

import { CONTRACTADDRESS, RPC_URL } from "./utils/constant.js";

const provider = await etherjs.providers.JsonRpcProvider(RPC_URL);
const signerProvider = await etherjs.providers.Web3Provider(window.ethereum);

const signer = signerProvider.getSigner();

async function getContract(address, contractAbi = abi, isSigner = false){
    const provider = await etherjs.providers.JsonRpcProvider(RPC_URL);
    const signerProvider = await etherjs.providers.Web3Provider(window.ethereum);
    
    const signer = signerProvider.getSigner();

    const useProvider = isSigner ? signerProvider : provider ;

    return await new etherjs.Contract(CONTRACTADDRESS, contractAbi, useProvider);

}

as
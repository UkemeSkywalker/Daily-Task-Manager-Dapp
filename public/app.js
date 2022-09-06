const {ethers: etherjs} = ethers;
import abi from "./utils/abi.js"
// console.log(abi);
import { CONTRACTADDRESS, RPC_URL } from "./utils/constant.js";

const provider = await new etherjs.providers.JsonRpcProvider(RPC_URL);
const signerProvider = await new etherjs.providers.Web3Provider(window.ethereum);

const signer = signerProvider.getSigner();

const connectWallet = async () => {
    await signerProvider.send("eth_requestAccounts");
}

async function getContract(isSigner = true, addressContract=CONTRACTADDRESS, contractAbi = abi){
    const provider = await new etherjs.providers.JsonRpcProvider(RPC_URL);
    const signerProvider = await new etherjs.providers.Web3Provider(window.ethereum);
    
    const signer = signerProvider.getSigner();

    const useProvider = isSigner ? signer : provider ;

    const result = await new etherjs.Contract(addressContract, contractAbi, useProvider);
    return result;
}



async function todoTemplate(itemTitle, creator="Ukeme", timestamp="10:30"){
    return `<li id="1">
    <hr class="mt-2">
    <div class="my-4 flex justify-between px-1">
        <div class="flex items-center gap-2"> <span onclick="tick(${uid})" class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "><i id="checked${uid}" class="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"></i></span>
            <p class="md:max-w-[375px] truncate max-w-[280px] uppercase"><strike id="strike${uid}" class="text-gray-600 text-lg no-underline ">${itemTitle}</strike></p>
            <p class="text-sm">created by: ${creator}</p><p class="text-sm">time: ${timestamp}</p>
        </div> <span onclick="trash(${uid})" class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "><i class="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i></span>
    </div>
</li>`
}


async function createTask(){
    
    try {
        const contract = await getContract();
        const _creator = await signer.getAddress();
        console.log(_creator);
        const _itemTitle = inputTask.value;
        addTask.innerText = "Loading..."
        const res  = await contract.createTodo(_itemTitle, _creator);
        console.log("Transaction Hash:", res.hash);
        return {_creator, _itemTitle};
    } catch (error) {
        error.innerText = "An Error Occured"
        console.log(error);
    }
    finally{
        addTask.innerText = "Add task";
        loading.innerText = "Task Added"
        setTimeout(() => {
            loading.innerText = ""
        }, 8000);
    }
    
}



function convertDate(date){
    const toNumber = Number(date);
    const convertDate = Date(toNumber * 1000);
    return convertDate;
}




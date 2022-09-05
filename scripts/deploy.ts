import { ethers } from "hardhat";
import { task } from "hardhat/config";

async function main(){

    const taskManager = await ethers.getContractFactory("deleteTodo");

    const deploy = await taskManager.deploy();
    const result = await deploy.deployed();

    console.log("contract deployed at:", result);

}
main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
import { ethers } from "hardhat";
import { task } from "hardhat/config";

async function main(){

    const taskManager = await ethers.getContractFactory("taskManager");

    const deploy = await taskManager.deploy();
    const result = await deploy.deployed();

    console.log("contract deployed at:", result.address);

}
main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
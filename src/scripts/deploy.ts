import { ethers } from "hardhat";
import '@nomiclabs/hardhat-ethers'
import { task } from "hardhat/config";

async function main(){

    const taskManager = await ethers.getContractFactory("taskManager");

    const deploy = await taskManager.deploy();
    const result = await deploy.deployed();

    console.log("contract deployed at:", result.address);
    // Contract Address: 0xffcca67d7AF990D01f0Cab050f1A99F31ce78659
    // Contract Creator: 0x26427A1CbD3e28b841c503A83057df7346E8BF1f

}
main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
const hre = require("hardhat");

async function main() {

    const [owner] = await hre.ethers.getSigners();
    const MemeCoinFactory = await hre.ethers.getContractFactory("MemeCoin");
    const memecoin = await MemeCoinFactory.deploy();
    await memecoin.deployed();


    console.log("MemeCoin Contract deployed to:", memecoin.address);
    console.log("MemeCoin Contract owner address:", owner.address);
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
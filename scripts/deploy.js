// imports
const {ethers, run, network} = require("hardhat")

//asyn main
async function main() {
  const SimpleStorageContract = await ethers.deployContract("SimpleStorage");
  console.log("Deploying Contract...");
  await SimpleStorageContract.waitForDeployment();
  console.log("Deploying Contract To:", await SimpleStorageContract.getAddress());
  console.log(network.config)
}

async function verify(contractAddress, args) {
  console.log("Verifying Contract...");
  try {
    await run("verify:verify",{
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Contract Already Verified")
    }
    else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
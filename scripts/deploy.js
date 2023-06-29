// imports


//asyn main
async function main() {
  const SimpleStorageContract = await ethers.deployContract("SimpleStorage");
  console.log("Deploying Contract...");
  await SimpleStorageContract.waitForDeployment();
  console.log("Deploying Contract To:", await SimpleStorageContract.getAddress());
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
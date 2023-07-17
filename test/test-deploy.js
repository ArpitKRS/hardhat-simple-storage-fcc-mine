const {ethers} = require("hardhat");
const {expect, assert} = require("chai");

describe("SimpleStorage",() => {
    let simpleStorage, simpleStoragefactory
    beforeEach(async () => {
        simpleStoragefactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStoragefactory.deploy()
    })

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should update when we call store", async () => {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait()

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue) alternative
    })
})
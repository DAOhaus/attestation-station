import {ethers, upgrades} from 'hardhat'

async function main() {
    const address = "0x4665fffdD8b48aDF5bab3621F835C831f0ee36D7"
    const Factory = await ethers.getContractFactory('FirstAttestation')
    const instance = await Factory.deploy(address)
    const contract = await instance.waitForDeployment()
    console.log(await contract.getAddress())

    const Factory2 = await ethers.getContractFactory('ThirdPartyAttestation')
    const instance2 = await Factory2.deploy(address)
    const contract2 = await instance2.waitForDeployment()
    console.log(await contract2.getAddress())
}

void main()

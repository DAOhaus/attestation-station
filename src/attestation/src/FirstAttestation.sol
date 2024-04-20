// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ISP } from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import { ISPHook } from "@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import { Attestation } from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import { Schema } from "@ethsign/sign-protocol-evm/src/models/Schema.sol";
import { DataLocation } from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

contract FirstAttestation{
    ISP public spInstance;
    ISPHook public hookInstance;

    error ConfirmationAddressMismatch();
    mapping(uint64 => Schema) public schemaMapping;
    constructor(address instance) {
        spInstance = ISP(instance);
        hookInstance = ISPHook(instance);
     }

    function createSchema(string memory data) external returns (uint64){
        Schema memory newSchema = Schema({
            registrant: msg.sender,
            revocable: false,
            dataLocation: DataLocation.IPFS,
            maxValidFor:0,
            hook: hookInstance,
            timestamp: 0,
            data: data
        });
        uint64 schemaID = spInstance.register(newSchema, "");
        schemaMapping[schemaID] = newSchema;
        return schemaID;
    }


    function selfAttestation(uint64 schemaId, string memory data) external returns (uint64) {
        // functiion which lets the owner self-attest
        if (schemaMapping[schemaId].registrant == msg.sender) {
            bytes[] memory recipients = new bytes[](2);
            recipients[0] = abi.encode(schemaMapping[schemaId].registrant);
            recipients[1] = abi.encode(msg.sender);
            Attestation memory a = Attestation({
                schemaId: schemaId,
                linkedAttestationId: 0,
                attestTimestamp: 0,
                revokeTimestamp: 0,
                attester: address(this),
                validUntil: 0,
                dataLocation: DataLocation.IPFS,
                revoked: false,
                recipients: recipients,
                data: abi.encode(data)
            });
            uint64 attestationId = spInstance.attest(a, "", "", "");
            return attestationId;
        } else {
            revert ConfirmationAddressMismatch();
        }
    }
}
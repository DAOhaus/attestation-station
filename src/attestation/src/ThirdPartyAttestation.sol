// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ISP } from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import { ISPHook } from "@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import { Attestation } from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import { Schema } from "@ethsign/sign-protocol-evm/src/models/Schema.sol";
import { DataLocation } from "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";


contract ThirdPartyAttestation{
    ISP public spInstance;
    ISPHook public hookInstance;

    mapping(address => uint64) public attestorMapping;
    constructor(address instance) {
        spInstance = ISP(instance);
        hookInstance = ISPHook(instance);
     }


    function externalAttestation(uint64 schemaId, string memory data) external returns (uint64) {
            bytes[] memory recipients = new bytes[](1);
            recipients[0] = abi.encode(msg.sender);
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
    }
}
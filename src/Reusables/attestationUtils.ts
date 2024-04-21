'use client'

import {
  SignProtocolClient,
  SpMode,
  IndexService,
  EvmChains
} from "@ethsign/sp-sdk";
import axios from "axios";
const isDev = process.env.NODE_ENV === 'development'
const indexService = new IndexService(isDev ? 'testnet' : 'mainnet')

// Generate a function for making requests to the Sign Protocol Indexing Service
async function makeAttestationRequest(endpoint: string, options: any) {
  const url = `https://testnet-rpc.sign.global/api/${endpoint}`;
  const res = await axios.request({
    url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    ...options
  });
  // throw API errors
  if (res.status !== 200) {
    throw new Error(JSON.stringify(res));
  }
  // return original response
  return res.data;
}

export async function queryAttestations(attester) {
  const response = await makeAttestationRequest(
    "index/attestations",
    {
      method: "GET",
      params: {
        mode: "onchain", // Data storage location
        schemaId: "onchain_evm_11155111_0x51", // Your full schema's ID
        attester, // Alice's address
        indexingValue: attester.toLowerCase(), // Bob's address
      }
    }
  );

  // Make sure the request was successfully processed.
  if (!response.success) {
    return { success: false, message: response?.message ?? "Attestation query failed." };
  }

  // Return a message if no attestations are found.
  if (response.data?.total === 0) {
    return { success: false, message: "No attestation for this address found." };
  }

  // Return all attestations that match our query.
  return {
    success: true,
    attestations: response.data.rows
  };
}

export const getAttestation = indexService.queryAttestation
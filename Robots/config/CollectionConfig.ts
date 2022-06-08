import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RobotsCB',
  tokenName: 'RobotsCB',
  tokenSymbol: 'RCB',
  hiddenMetadataUri: 'ipfs://QmQpbCAUyt2CWTA54q8nWVX126fqbWNSuq2D1Js3ZdHr2e/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0x70B7c5834a04E1cA760a9c9C4C1497805A710B6c",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;

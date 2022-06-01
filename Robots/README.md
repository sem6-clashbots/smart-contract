# Prerequisites
- NPM OR YARN
- TRUFFLE
- METADATA OF NFTS
- LIST OF WHITELIST ADDRESSES

# QUICKSTART
(optional) => command to change contract name
```
npm run rename-contract {name}
```

Change config data in: ./config/CollectionConfig.ts
```
L:14 - tokenName
L:15 - tokenSymbol
L:16 - hiddenMetadataUri
L:17 - maxSupply
L:17 - whitelistSale
L:17 - preSale
L:17 - publicSale
```

Start truffle dashboard
```
truffle dashboard
```

Deploy contract 
```
npm run deploy --truffle
```

This will give an address back. Fill this in the config file in:
./config/CollectionConfig.ts

```
L:29 - contractAddress
```

Success!
import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: {
        value: "uint32",
        factoryValue: "uint32",
      },
    },
    BalanceTable: {
      keySchema: {
        owner: "address",
        item: "uint32"
      },
      schema: "uint32"
    },
    History: {
      keySchema: {
        counterValue: "uint32",
      },
      schema: {
        blockNumber: "uint256",
        time: "uint256",
      }
    },
  },
});

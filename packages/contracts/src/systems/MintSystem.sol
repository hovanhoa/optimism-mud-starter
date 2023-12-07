// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { BalanceTable } from "../codegen/Tables.sol";

contract MintSystem is System {
  function mint(uint32 item) public {
    uint32 balance = BalanceTable.get(_msgSender(), item);
    BalanceTable.set(_msgSender(), item, balance + 5);
  }
}

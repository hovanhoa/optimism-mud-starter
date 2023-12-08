// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter, History } from "../codegen/Tables.sol";

contract IncrementSystem is System {
  function increment() public returns (uint32, uint32) {
    uint32 counter = Counter.getValue();
    uint32 newValue = counter + 1;
    Counter.setValue(newValue);

    uint32 factoryCounter = Counter.getFactoryValue();
    uint32 newFactoryValue = factoryCounter + newValue;
    Counter.setFactoryValue(newFactoryValue);

    History.set(newValue, block.number, block.timestamp);

    return (newValue, newFactoryValue);
  }
}

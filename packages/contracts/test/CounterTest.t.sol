// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "forge-std/Test.sol";
import { MudV2Test } from "@latticexyz/std-contracts/src/test/MudV2Test.t.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";

import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, CounterTableId } from "../src/codegen/Tables.sol";

contract CounterTest is MudV2Test {
  IWorld public world;

  function setUp() public override {
    super.setUp();
    world = IWorld(worldAddress);
  }

  function testWorldExists() public {
    uint256 codeSize;
    address addr = worldAddress;
    assembly {
      codeSize := extcodesize(addr)
    }
    assertTrue(codeSize > 0);
  }

  function testCounter() public {
    // Expect the counter to be 1 because it was incremented in the PostDeploy script.
    uint32 counter = Counter.getValue(world);
    uint32 factoryCounter = Counter.getFactoryValue(world);
    assertEq(counter, 1);
    assertEq(factoryCounter, 1);

    // Expect the counter to be 2 after calling increment.
    world.increment();
    counter = Counter.getValue(world);
    assertEq(counter, 2);

    counter = Counter.getFactoryValue(world);
    assertEq(counter, 3);
  }
}

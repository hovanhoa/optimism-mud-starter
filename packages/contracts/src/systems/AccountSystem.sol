// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Accounts } from "../codegen/Tables.sol";

contract AccountSystem is System {
  function verifyAccount(string calldata username, string calldata password) public returns (bool){
    string memory _username = Accounts.getUsername();
    string memory _password = Accounts.getPassword();
    if ((keccak256(bytes(username)) == keccak256(bytes(_username))) && (keccak256(bytes(password)) == keccak256(bytes(_password)))) {
        return true;
    }

    return false;
  }

  function setUsername(string calldata username) public {
    Accounts.setUsername(username);
  }

  function setPassword(string calldata password) public {
    Accounts.setPassword(password);
  }
}

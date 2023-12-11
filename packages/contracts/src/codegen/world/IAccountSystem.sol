// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IAccountSystem {
  function verifyAccount(string calldata username, string calldata password) external returns (bool);

  function setUsername(string calldata username) external;

  function setPassword(string calldata password) external;
}
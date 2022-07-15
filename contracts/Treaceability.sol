// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;

contract Treaceability {

  struct State {
    string stups;
    string peternaks;
    string rumah_produksi;
    string konsumen;
    string graf;
  }

  State public state;

  function f1_movedProduct(string memory rumahProduksi, string memory konsumen, string memory peternaks) public {
    state.rumah_produksi = rumahProduksi;
    state.konsumen = konsumen;
    state.peternaks = peternaks;
  }

  function f2_addStupStatus(string memory stups) public {
    state.stups = stups;
  }

  function f3_changeRumahProduksiStatus(string memory rumahProduksi) public {
    state.rumah_produksi = rumahProduksi;
  }

  function f4_farming(string memory stups, string memory peternaks) public {
    state.stups = stups;
    state.peternaks = peternaks;
  }

  // Pembacaan data ========================================================
  function getState() public view returns (State memory) {
    return state;
  }  
}
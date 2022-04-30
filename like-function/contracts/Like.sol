// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Like {
  bool public isLiked = false;

  function manageLike() external {
    isLiked = !isLiked;
  }

  function likeStatus() external view returns(bool) {
    return isLiked;
  }
}
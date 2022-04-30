const Like = artifacts.require("Like");

module.exports = function (deployer) {
  deployer.deploy(Like);
};
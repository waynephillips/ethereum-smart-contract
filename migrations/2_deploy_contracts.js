// migrating the appropriate contracts
// var FarmerRole = artifacts.require("./FarmerRole.sol");
// var DistributorRole = artifacts.require("./DistributorRole.sol");
// var RetailerRole = artifacts.require("./RetailerRole.sol");
// var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  /* no need to deploy these role contracts because supply chain interits from the 4 roles
  deployer.deploy(FarmerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(ConsumerRole);
  */
  deployer.deploy(SupplyChain);
};

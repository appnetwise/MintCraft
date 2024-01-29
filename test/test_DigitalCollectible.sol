// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DigitalCollectible.sol";

contract TestDigitalCollectible {
    DigitalCollectible digitalCollectible;

    function beforeEach() public {
        digitalCollectible = new DigitalCollectible(address(this));
    }

    function testCreateCollectible() public {
        uint256 tokenId = digitalCollectible.createCollectible("https://example.com/token/1");
        uint256[] memory collectibles = digitalCollectible.getCollectiblesOf(address(this));

        Assert.equal(collectibles.length, 1, "Incorrect number of collectibles");
        Assert.equal(collectibles[0], tokenId, "Incorrect tokenId");
    }

    function testTransferNFT() public {
        address recipient = address(0x123);
        uint256 tokenId = digitalCollectible.createCollectible("https://example.com/token/1");

        digitalCollectible.transferNFT(recipient, tokenId);
        uint256[] memory collectibles = digitalCollectible.getCollectiblesOf(address(this));

        Assert.equal(collectibles.length, 0, "Token not transferred successfully");
    }
}
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('DigitalCollectible', function () {
  let digitalCollectible, owner, addr1, addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    digitalCollectible = await ethers.deployContract('DigitalCollectible', [
      owner.address,
    ]);
  });

  describe('Deployment', function () {
    it('Should set the right owner', async function () {
      expect(await digitalCollectible.owner()).to.equal(owner.address);
    });

    it('Should have correct name and symbol', async function () {
      expect(await digitalCollectible.name()).to.equal('DigitalCollectible');
      expect(await digitalCollectible.symbol()).to.equal('DC');
    });
  });

  describe('Transactions', function () {
    it('Should create new collectible', async function () {
      await digitalCollectible
        .connect(owner)
        .createCollectible('https://example.com');
      expect(await digitalCollectible.ownerOf(1)).to.equal(owner.address);
      expect(await digitalCollectible.tokenURI(1)).to.equal(
        'https://example.com',
      );
    });

    it('Should transfer collectible from owner to addr1', async function () {
      await digitalCollectible
        .connect(owner)
        .createCollectible('https://example.com');
      await digitalCollectible.connect(owner).transferNFT(addr1.address, 1);
      expect(await digitalCollectible.ownerOf(1)).to.equal(addr1.address);
    });

    it('Should fail if non-owner tries to transfer collectible', async function () {
      await digitalCollectible
        .connect(owner)
        .createCollectible('https://example.com');
      await expect(
        digitalCollectible.connect(addr1).transferNFT(addr2.address, 1),
      ).to.be.revertedWith('You are not the owner of this token');
    });

    it('Should fail if non-owner tries to create collectible', async function () {
      await expect(
        digitalCollectible
          .connect(addr2)
          .createCollectible('https://example.com'),
      )
        .to.be.revertedWithCustomError(
          digitalCollectible,
          'OwnableUnauthorizedAccount',
        )
        .withArgs(addr2.address);
    });
  });
});

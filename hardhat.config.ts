import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: process.env.SOLIDITY_VERSION || '0.8.23',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
};

if (process.env.NETWORK_URL && process.env.PRIVATE_KEY) {
  config.networks[process.env.NETWORK_NAME] = {
    url: process.env.NETWORK_URL,
    accounts: [process.env.PRIVATE_KEY],
  };
}

export default config;

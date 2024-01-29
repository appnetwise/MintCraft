import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const { SOLIDITY_VERSION, NETWORK_URL, PRIVATE_KEY, NETWORK_NAME } =
  process.env;

if (!NETWORK_URL || !PRIVATE_KEY || !NETWORK_NAME) {
  throw new Error('Missing required environment variable');
}

const config: HardhatUserConfig = {
  solidity: SOLIDITY_VERSION || '0.8.23',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    [NETWORK_NAME]: {
      url: NETWORK_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 50000000000, // 50 gwei
      gas: 'auto', // Automatically estimate gas
    },
  },
};

export default config;

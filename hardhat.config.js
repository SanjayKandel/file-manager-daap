require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const privateKey =
  "410990e9b0da30cef16239f9a235b0017728be4ee3c7b3c8d84abe9fbe0b7245";

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/51c85accff9e4b9297e6fcc96bbae274`,
      accounts: [privateKey],
    },
    alchemy: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Ao4G6y8WzXsmV-QYoXBcCwRLQchYjEef",
      accounts: [privateKey],
    },
  },
};

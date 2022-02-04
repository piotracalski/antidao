import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.mjs";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x7DD1EDD9109D178d35BC081e6523089838A8D02A");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "AntiDao",
      // A description for the collection.
      description: "A DAO for anti-social folks.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/antidao.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()

// RESULT:
// Successfully deployed bundleDrop module, address: 0x5593638e4871aa49B22DbC3193F29537b7DF0fe2
// bundleDrop metadata: {
//   metadata: {
//     name: 'AntiDao',
//     description: 'A DAO for anti-social folks.',
//     image: 'https://cloudflare-ipfs.com/ipfs/QmYTd2ZdhWiuAzwjhLG7xBYZxxnGzvnojQN3airi89puxp/0',
//     primary_sale_recipient_address: '0x0000000000000000000000000000000000000000'
//   },
//   address: '0x5593638e4871aa49B22DbC3193F29537b7DF0fe2',
//   type: 11
// }
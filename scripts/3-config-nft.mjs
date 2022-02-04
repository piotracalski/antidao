import sdk from "./1-initialize-sdk.mjs";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5593638e4871aa49B22DbC3193F29537b7DF0fe2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "AntiBadge",
        description: "This NFT will give you access to AntiDao!",
        image: readFileSync("scripts/assets/antidao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
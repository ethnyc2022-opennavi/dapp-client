import Image from "next/image";
import React, { useState } from "react";
import mergeImages from "merge-images";
import { ipfsService } from "../../services/ipfs";
import { tatumService } from "../../services/tatum";

function MyNaviPreview({
  chain,
  group,
  proficiency,
  handRight,
  handLeft,
  basicsOne,
  basicsTwo,
  basicsThree,
  account
}) {
  let imageb64
  let preview = mergeImages([
    `/navi-attributes/basics/${basicsOne}.png`,
    `/navi-attributes/basics/${basicsTwo}.png`,
    `/navi-attributes/basics/${proficiency}.png`,
    `/navi-attributes/basics/${chain}.png`,
    `/navi-attributes/basics/${handRight}.png`,
    `/navi-attributes/basics/${handLeft}.png`,
    `/navi-attributes/basics/${basicsThree}.png`,
    `/navi-attributes/basics/${group}.png`,
  ]).then((b64) => {
    let element = document.createElement("img");
    element.src = b64;
    if (!document.querySelector("#foo > img")) {
      document.querySelector("#foo").appendChild(element);
    }
    imageb64 = b64
  });
  

  const handleMint = async () => {
    // mint PFP
    console.log("b64: ", imageb64);
    const nftResult = await ipfsService.storeb64ToNFT(preview, 'composoable-nft.png', 'some awesome swag')
    console.log("nft result: ", nftResult)

    const pfpOutput = tatumService.mintNft(account, nftResult.url)
    console.log(`pfpOutput `, pfpOutput)
  };

  {
    /* <div className="font-mont pt-10">
    <div>{basicsOne}</div>
    <div>{basicsTwo}</div>
    <div>{chain}</div>
    <div>{proficiency}</div>
    <div>{handRight}</div>
    <div>{handLeft}</div>
    <div>{basicsThree}</div>
    <div>mouth</div>
    <div>{group}</div>
  </div>; */
  }

  return (
    <div className="pt-20 pl-10">
      <div className="p-12" id="foo"></div>
      <div className="-pt-10">
        <button
          onClick={() => handleMint()}
          className="border p-2 border-gray-400 rounded-lg hover:bg-gray-100"
        >
          Mint PFP
        </button>
      </div>
    </div>
  );
}

export default MyNaviPreview;

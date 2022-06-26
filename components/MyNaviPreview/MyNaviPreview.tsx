import Image from "next/image";
import React, { useState } from "react";
import mergeImages from "merge-images";

function MyNaviPreview({
  chain,
  group,
  proficiency,
  handRight,
  handLeft,
  basicsOne,
  basicsTwo,
  basicsThree,
}) {
  let preview = mergeImages([
    `/navi-attributes/basics/${basicsOne}.png`,
    `/navi-attributes/basics/${basicsTwo}.png`,
    `/navi-attributes/basics/${chain}.png`,
    `/navi-attributes/basics/${proficiency}.png`,
    `/navi-attributes/basics/${handRight}.png`,
    `/navi-attributes/basics/${handLeft}.png`,
    `/navi-attributes/basics/${basicsThree}.png`,
    `/navi-attributes/basics/${group}.png`,
  ]).then((b64) => (document.querySelector("img").src = b64));

  console.log("preview:", preview);

  return (
    <div>
      <div className="font-mont pt-10">
        <div>{basicsOne}</div>
        <div>{basicsTwo}</div>
        <div>{chain}</div>
        <div>{proficiency}</div>
        <div>{handRight}</div>
        <div>{handLeft}</div>
        <div>{basicsThree}</div>
        <div>mouth</div>
        <div>{group}</div>
      </div>

      <div>
        {/* <Image
          src={`/navi-attributes/basics/${group}.png`}
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        {/* <img src={preview}></img> */}
      </div>
    </div>
  );
}

export default MyNaviPreview;

import Image from "next/image";
import React, { useState } from "react";

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
  return (
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
  );
}

export default MyNaviPreview;

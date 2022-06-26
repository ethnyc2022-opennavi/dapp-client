import { compose } from "@mui/system";
import { access } from "fs";
import Image from "next/image";
import React, { useState } from "react";

function MySkillsSelector() {
  const NaviAttributes = [
    ["Basics 1", "BACKGROUND", ["bgOne", "bgTwo", "bgThree"]],
    ["Basics 2", "SKIN", ["skinOne", "skinTwo", "skinThree"]],
    ["Basics 3", "EYES", ["eyesOne", "eyesTwo", "eyesThree"]],
    [
      "Language",
      "HANDLEFT",
      ["handLeftJs", "handLeftPy", "handLeftRust", "handLeftSol"],
    ],
    [
      "Language",
      "HANDRIGHT",
      ["handRightJs", "handRightPy", "handRightRust", "handRightSol"],
    ],
    ["Chain Affiliation", "CHAIN", ["chainOne", "chainTwo", "chainThree"]],
    ["Group Affiliation", "HAT", ["hatOne"]],
    ["Proficiency Level", "JACKET", ["jacketOne", "jacketTwo", "jacketThree"]],
  ];

  const [chainAffiliation, setChainAffiliation] = useState("chainOne");
  const [groupAffilation, setGroupAffilation] = useState("hatOne");
  const [proficiencyLevel, setProficiencyLevel] = useState("jacketOne");

  const [handLeft, setHandLeft] = useState("handLeftJs");
  const [handRight, setHandRight] = useState("handRightJs");
  const [basicsOne, setBasicsOne] = useState("bgOne");
  const [basicsTwo, setBasicsTwo] = useState("skinOne");
  const [basicsThree, setBasicsThree] = useState("eyesOne");

  const selectSkill = (a) => {
    if (a[1].toLocaleLowerCase() === "handleft") {
      a[2] === handLeft ? setHandLeft(null) : setHandLeft(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "handright") {
      a[2] === handRight ? setHandRight(null) : setHandRight(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "background") {
      a[2] === basicsOne ? setBasicsOne(null) : setBasicsOne(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "skin") {
      a[2] === basicsTwo ? setBasicsTwo(null) : setBasicsTwo(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "eyes") {
      a[2] === basicsThree ? setBasicsThree(null) : setBasicsThree(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "chainOne") {
      a[2] === chainAffiliation
        ? setChainAffiliation(null)
        : setChainAffiliation(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "hatOne") {
      a[2] === groupAffilation
        ? setGroupAffilation(null)
        : setGroupAffilation(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "jacketOne") {
      a[2] === proficiencyLevel
        ? setProficiencyLevel(null)
        : setProficiencyLevel(a[2]);
    }
  };

  return (
    <div className="font-mont text-black">
      <main className="pt-8">
        <ul className="text-left">
          {NaviAttributes.map((a, i) => {
            return (
              <div key={i}>
                <ul className="flex flex-row items-center space-x-3 pt-10 pb-2">
                  {a.map((ac, i) => {
                    return i < 2 ? (
                      <div>
                        <div key={i} className="text font-semibold">
                          {ac}
                        </div>
                      </div>
                    ) : null;
                  })}
                </ul>

                {a[2].map((traits) => {
                  return (
                    <button
                      onClick={() => selectSkill(a)}
                      className={`border border-2 ${
                        (basicsOne === a[2] && a[1] === "BACKGROUND") ||
                        (handLeft === a[2] && a[1] === "HANDLEFT") ||
                        (handRight === a[2] && a[1] === "HANDRIGHT") ||
                        (basicsTwo === a[2] && a[1] === "SKIN") ||
                        (basicsThree === a[2] && a[1] === "EYES") ||
                        (chainAffiliation === a[2] && a[1] === "CLOTH") ||
                        (groupAffilation === a[2] && a[1] === "CLOTH") ||
                        (proficiencyLevel === a[2] && a[1] === "CLOTH")
                          ? "border-red-500"
                          : null
                      } px-1 w-fit`}
                    >
                      {console.log("urls", traits)}
                      <Image
                        src={`/navi-attributes/basics/${traits}.png`}
                        height={40}
                        width={40}
                        alt={"metamask logo"}
                      />
                    </button>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default MySkillsSelector;

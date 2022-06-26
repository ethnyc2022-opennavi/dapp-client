import { compose } from "@mui/system";
import { access } from "fs";
import Image from "next/image";
import React, { useState } from "react";

function MySkillsSelector({
  onChainAffiliation,
  onGroupAffiliation,
  onProficiencyLevel,
  onHandLeft,
  onHandRight,
  onBasicsOne,
  onBasicsTwo,
  onBasicsThree,
  onBasicsFour,
}) {
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
    ["Basics 4", "FACE", ["faceOne", "faceTwo", "faceThree"]],
  ];

  const [chainAffiliation, setChainAffiliation] = useState("chainOne");
  const [groupAffiliation, setGroupAffilation] = useState("hatOne");
  const [proficiencyLevel, setProficiencyLevel] = useState("jacketOne");

  const [handLeft, setHandLeft] = useState("handLeftJs");
  const [handRight, setHandRight] = useState("handRightJs");
  const [basicsOne, setBasicsOne] = useState("bgOne");
  const [basicsTwo, setBasicsTwo] = useState("skinOne");
  const [basicsThree, setBasicsThree] = useState("eyesOne");
  const [basicsFour, setBasicsFour] = useState("faceOne");

  const selectSkill = (traits) => {
    if (NaviAttributes[3][2].includes(traits)) {
      if (traits === handLeft) {
        setHandLeft(null);
      } else {
        onHandLeft(traits);
        setHandLeft(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[4][2].includes(traits)) {
      if (traits === handRight) {
        setHandRight(null);
      } else {
        onHandRight(traits);
        setHandRight(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[0][2].includes(traits)) {
      if (traits === basicsTwo) {
        setBasicsOne(null);
      } else {
        onBasicsOne(traits);
        setBasicsOne(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[2][2].includes(traits)) {
      if (traits === basicsThree) {
        setBasicsThree(null);
      } else {
        onBasicsThree(traits);
        setBasicsThree(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[1][2].includes(traits)) {
      console.log("triggered");
      if (traits === basicsTwo) {
        setBasicsTwo(null);
      } else {
        onBasicsTwo(traits);
        setBasicsTwo(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[8][2].includes(traits)) {
      if (traits === proficiencyLevel) {
        setBasicsFour(null);
      } else {
        onBasicsFour(traits);
        setBasicsFour(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[5][2].includes(traits)) {
      if (traits === chainAffiliation) {
        setChainAffiliation(null);
      } else {
        onChainAffiliation(traits);
        setChainAffiliation(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[6][2].includes(traits)) {
      if (traits === groupAffiliation) {
        setGroupAffilation(null);
      } else {
        onGroupAffiliation(traits);
        setGroupAffilation(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
    if (NaviAttributes[7][2].includes(traits)) {
      if (traits === proficiencyLevel) {
        setProficiencyLevel(null);
      } else {
        onProficiencyLevel(traits);
        setProficiencyLevel(traits);
        if (document.querySelector("#foo > img")) {
          document.querySelector("#foo > img").remove();
        }
      }
    }
  };

  return (
    <div className="font-mont text-black pr-12">
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

                {a[2].map((traits, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => selectSkill(traits)}
                      className={`border border-2 ${
                        (basicsOne == traits && a[1] === "BACKGROUND") ||
                        (handLeft === traits && a[1] === "HANDLEFT") ||
                        (handRight === traits && a[1] === "HANDRIGHT") ||
                        (basicsTwo === traits && a[1] === "SKIN") ||
                        (basicsThree === traits && a[1] === "EYES") ||
                        (chainAffiliation === traits && a[1] === "CHAIN") ||
                        (groupAffiliation === traits && a[1] === "HAT") ||
                        (proficiencyLevel === traits && a[1] === "JACKET") ||
                        (basicsFour === traits && a[1] === "FACE")
                          ? "border-red-500"
                          : null
                      } px-1 w-fit`}
                    >
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

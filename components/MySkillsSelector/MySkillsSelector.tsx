import { compose } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";

function MySkillsSelector() {
  const NaviAttributes = [
    ["PersonaOne", "BACKGROUND", 1],
    ["PersonaTwo", "SKIN", 1],
    ["PersonaThree", "EYES", 1],
    ["Language", "HAND", 1],
    ["Chain Affiliation", "CLOTH", 1],
    ["Group Affiliation", "CLOTH", 1],
    ["ProficiencyLevel", "CLOTH", 1],
  ];

  const [chainAffiliation, setChainAffiliation] = useState("cloth");
  const [groupAffilation, setGroupAffilation] = useState("cloth");
  const [proficiencyLevel, setProficiencyLevel] = useState("cloth");

  const [hand, setHand] = useState("hand");
  const [personaOne, setPersonaOne] = useState("background");
  const [personaTwo, setPersonaTwo] = useState("skin");
  const [personaThree, setPersonaThree] = useState("eyes");

  const selectSkill = (a) => {
    if (a[1].toLocaleLowerCase() === "hand") {
      a[2] === hand ? setHand("0") : setHand(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "background") {
      console.log("trigger");
      a[2] === personaOne ? setPersonaOne("0") : setPersonaOne(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "eyes") {
      a[2] === personaTwo ? setPersonaTwo("0") : setPersonaTwo(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "skin") {
      a[2] === personaThree ? setPersonaThree("0") : setPersonaThree(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "cloth") {
      a[2] === chainAffiliation
        ? setChainAffiliation("0")
        : setChainAffiliation(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "cloth") {
      a[2] === groupAffilation
        ? setGroupAffilation("0")
        : setGroupAffilation(a[2]);
    }
    if (a[1].toLocaleLowerCase() === "cloth") {
      a[2] === proficiencyLevel
        ? setProficiencyLevel("0")
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
                    return i < 1 ? (
                      <div key={i} className="font-semibold">
                        {ac}
                      </div>
                    ) : (
                      <div key={i} className="text-xs">
                        {ac}
                      </div>
                    );
                  })}
                </ul>
                <button
                  onClick={() => selectSkill(a)}
                  className={`border border-2 ${
                    (personaOne === a[2] && a[1] === "BACKGROUND") ||
                    (hand === a[2] && a[1] === "HAND") ||
                    (personaTwo === a[2] && a[1] === "EYES") ||
                    (personaThree === a[2] && a[1] === "SKIN") ||
                    (chainAffiliation === a[2] && a[1] === "CLOTH") ||
                    (groupAffilation === a[2] && a[1] === "CLOTH") ||
                    (proficiencyLevel === a[2] && a[1] === "CLOTH")
                      ? "border-red-500"
                      : null
                  } px-1 w-fit`}
                >
                  <Image
                    src={`/navi-attributes/basics/${a[1].toLowerCase()}.png`}
                    height={40}
                    width={40}
                    alt={"metamask logo"}
                  />
                </button>
              </div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default MySkillsSelector;

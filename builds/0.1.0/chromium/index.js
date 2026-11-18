console.log("[YTNH] index.js loaded.");
const ytPolicy = window.trustedTypes?.createPolicy("ytPolicy", {
  createHTML: (input) => input,
});
// or we can say, let debugMode = false; same job.
let theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode = false;

// const settingsReady = browser.storage.local.get("debugMode").then((result) => {
//     theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode =
//         result.debugMode ?? false;
// });

let observer;

const likePathNotFilled =
  "m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z";

const likePathFilled =
  "M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z";

const safePathNotFilled = ytPolicy
  ? ytPolicy.createHTML(likePathNotFilled)
  : likePathNotFilled;
const safePathFilled = ytPolicy
  ? ytPolicy.createHTML(likePathFilled)
  : likePathFilled;

let likeButtonParent, theSvgPath, theSvg, svgButton;

// this function finds like button by waiting til it load.
async function findHeresy() {
  do {
    likeButtonParent = document.querySelector("like-button-view-model");
    if (!likeButtonParent) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  } while (!likeButtonParent);

  if (
    theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
    true
  ) {
    console.log("[YTNH] likeButtonParent:", likeButtonParent);
  }
}

// this one finds the svg by waiting til it load. sometimes the button is there but the svg is still not.
async function findHeresySvg() {
  do {
    theSvg = likeButtonParent?.querySelector("button svg");
    if (!theSvg) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  } while (!theSvg);

  if (
    theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
    true
  ) {
    console.log("[YTNH] theSvg:", theSvg);
  }
}

// you know. runs the two functions.
async function init() {
  do {
    await findHeresy();
    await findHeresySvg();
  } while (!theSvg);
}

// replaces the svg, yes. its that simple. KillPid was a desperate arg to kill the observer so it dont stack observers around. it was hard coming up wtih that idea. Its not called because it was put as a defense if my code is bad and i cant kill the observer. so it was just a lock that was bought but never used to lock a locked door. i got a little confused now...
const EmpowerTheRemovalOfHeresy = (killPid) => {
  // the function actually replacing the svg.
  const enforceRemovalOfHeresy = () => {
    init();
    const button = likeButtonParent?.querySelector("button");
    const path = button?.querySelector("svg path");
    if (!button || !path) return;
    const isPressed = button.getAttribute("aria-pressed") === "true";
    const targetPath = isPressed ? safePathFilled : safePathNotFilled;
    const currentD = path.getAttribute("d") || "";
    if (currentD !== String(targetPath)) {
      path.setAttribute("transform", "translate(24 24) scale(-1 -1)");
      path.setAttribute("d", targetPath);
    }
  };
  enforceRemovalOfHeresy();
  observer?.disconnect();
  observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" || mutation.type === "childList") {
        enforceRemovalOfHeresy();
      }
    }
  });
  observer.observe(document.querySelector("like-button-view-model"), {
    childList: true,
    attributes: true,
    attributeFilter: ["d", "aria-pressed"],
    subtree: true,
  });
  if (killPid === 1) {
    observer?.disconnect();
    observer = null;
  } else {
    return null;
  }
};
init().then(() => {
  if (
    theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
    true
  ) {
    console.log("[YTNH] found likeButton");
    console.log("[YTNH] likeButtonParent:", likeButtonParent);
  }
  EmpowerTheRemovalOfHeresy();
});

// this function make sure the svg actually goes to the other short and not be isolated in one short, still not optimized though.
async function reEnforceTheRemovalOfHeresy() {
  let success = false;
  let attempts = 0;
  const maxAttempts = 15;
  do {
    try {
      attempts++;
      await init();
      EmpowerTheRemovalOfHeresy();
      const button = likeButtonParent?.querySelector("button");
      const path = button?.querySelector("svg path");
      const isPressed = button?.getAttribute("aria-pressed") === "true";
      const targetPath = isPressed ? safePathFilled : safePathNotFilled;
      const currentD = path?.getAttribute("d") || "";
      if (currentD === String(targetPath)) {
        for (let i = 0; i < 50; i++) {
          setTimeout(EmpowerTheRemovalOfHeresy, i * 50);
          if (
            theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
            true
          ) {
            console.log("[YTNH] forcount", i);
          }
        }
        success = true;
        if (
          theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode
        ) {
          console.log(`[YTNH] Heresy murdered on attempt ${attempts}.`);
        }
      } else {
        for (let i = 0; i < 50; i++) {
          setTimeout(EmpowerTheRemovalOfHeresy, i * 50);
          if (
            theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
            true
          ) {
            console.log("[YTNH] forcount", i);
          }
        }
        if (
          theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
          true
        ) {
          console.log(
            `[YTNH] Attempt ${attempts}: Path mismatch, killing heresy...`,
          );
        }
      }
    } catch {
      for (let i = 0; i < 50; i++) {
        setTimeout(EmpowerTheRemovalOfHeresy, i * 50);
        if (
          theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode ===
          true
        ) {
          console.log("[YTNH] forcount", i);
        }
      }
      if (
        theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode
      ) {
        console.log(
          `[YTNH] Attempt ${attempts} missed, retrying to kill heresy...`,
        );
      }
    }
    if (!success) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  } while (!success && attempts < maxAttempts);
}

document.addEventListener("yt-navigate-finish", () => {
  if (
    theRequirementOfCravingTheEmpowermentOfTheEnforcementOfTheKnowledgeOfTheHeresyRemovalCode
  ) {
    console.log("[YTNH] doomscrolling infists.");
  }
  reEnforceTheRemovalOfHeresy();
});

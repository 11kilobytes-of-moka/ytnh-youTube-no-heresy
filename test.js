// this is a test code, its buggy,and unoptimized by myself. this is will be optimized later or not, this is for test purposes and will not be in the final code. any optimized code will be still here but will be comment out and the actual final code would be in script.js.

// code to saving the button to to the console memeory alowing changes to be made

// (() => {
//   const actionbar = document.querySelector(
//     ".ytReelPlayerOverlayViewModelActionsContainer",
//   );

//   let likeButton = null;

//   const findLikeButton = () => {
//     const buttons = actionbar.querySelectorAll(
//       "button[aria-pressed][aria-label]",
//     );
//     for (const button of buttons) {
//       const label = button.getAttribute("aria-label") || "";
//       const isLikeButton =
//         /^like\b/i.test(label) || /^\d[\d,.]*\s+likes?$/i.test(label);

//       if (!isLikeButton) continue;

//       likeButton = button;

//       const isPressed = button.getAttribute("aria-pressed");
//       const state = isPressed === "true" ? "liked" : "not liked";

//       console.log("Found like button", {
//         button: likeButton,
//         label,
//         isPressed,
//         state,
//       });
//       break;
//     }
//   };

//   if (!actionbar) {
//     console.error("Actionbar not found!");
//   } else {
//     findLikeButton();
//   }
// })();

// one linear version, wont be used at all (not comment because it may be useful for fture reference):

// ignored the up comment, after revision. this is code misses some of the security features, it dont have the if condetions for the edge cases and so on. so its not gonna be used and will be commented here. 

// let likeButton = Array.from(
//   document.querySelectorAll(
//     ".ytReelPlayerOverlayViewModelActionsContainer button[aria-pressed][aria-label]",
//   ),
// ).find(
//   (b) =>
//     /^like\b/i.test(b.getAttribute("aria-label")) ||
//     /^\d[\d,.]*\s+likes?$/i.test(b.getAttribute("aria-label")),
// );

// console.log(likeButton);


// This is to actually make my own code trusted, This code was found on the interned, tweaked by me a little. now we have to actually optimize it later and 
//put it in our code. comments explain how this done so i can actually use it later

// this code is not useful anymore. 

// // 1. Create a custom trusted types policy named 'mySvgPolicy'
// const myPolicy = trustedTypes.createPolicy('mySvgPolicy', {
//   createHTML: (inputString) => {
//     // You could add sanitization logic here if needed, 
//     // or just return the string since it's your own SVG.
//     return inputString;
//   }
// });

// // 2. Use your policy to turn your SVG string into trusted HTML
// const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

// const trustedSvg = myPolicy.createHTML(svgString);

// // 3. Now you can safely use innerHTML without triggering CSP errors!
// const currentSvg = window.likeButton.querySelector("svg");
// if (currentSvg) {
//   currentSvg.outerHTML = trustedSvg; // Browser trusts this because it's a TrustedHTML object!
// }

// ----------------------------------


// this is a code that actually worked, using trusted type to actually inject the like button in, but it still have some bugs, issues, and its literary shit code. so imma fix it just for me understand it later, collecting samples of the itnernet and understing it. and the like hell. i need css. 

// 1. Define a named Trusted Types policy to satisfy YouTube's CSP requirements
const ytPolicy = window.trustedTypes?.createPolicy("yt-no-heresy", {
  createHTML: (input) => input
}) || { createHTML: (input) => input };

// 2. Verified SVG strings with the correct matrix transform
const thumbsUpSVGs = {
  unliked: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
      <g transform="matrix(-1 0 0 -1 24 24)">
        <path fill="currentColor" d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path>
      </g>
    </svg>
  `,
  liked: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
      <g transform="matrix(-1 0 0 -1 24 24)">
        <path fill="currentColor" d="M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z"></path>
      </g>
    </svg>
  `
};

// 3. Process the Shorts action bar element to swap icons
function processShortsActionBar(actionBar) {
  const button = actionBar.querySelector('button.ytSpecButtonShapeNextHost[aria-label^="like"]');
  if (!button) return;

  const iconContainer = button.querySelector(".ytSpecButtonShapeNextIcon");
  if (!iconContainer) return;

  // Determine current like state based on aria-pressed attribute
  const isLiked = button.getAttribute("aria-pressed") === "true";
  const targetSvg = isLiked ? thumbsUpSVGs.liked : thumbsUpSVGs.unliked;

  // Prevent redundant innerHTML overwrites if it's already swapped
  if (iconContainer.dataset.ytnhProcessed === String(isLiked)) return;

  // Inject safely using our trusted types policy
  iconContainer.innerHTML = ytPolicy.createHTML(targetSvg);
  iconContainer.dataset.ytnhProcessed = String(isLiked);
}

// 4. High-performance MutationObserver to catch SPA scrolls instantly
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if the added node is the shorts action overlay or contains it
        const actionBars = node.matches?.("ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer") 
          ? [node] 
          : node.querySelectorAll?.("ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer") || [];

        for (const bar of actionBars) {
          processShortsActionBar(bar);
        }
      }
    }
  }
});

// Start observing the document body right away
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Run an initial pass incase elements are already loaded on refresh
document.querySelectorAll("ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer").forEach(processShortsActionBar);

// IT WORKED, WTF WTF WTF WTF, I FINALLY GOT A SAMPLE THAT WORKS. KNOW I HAVE TO OPTIMIZE IT AND MAKE IT BETTER cuz i dont want to use some shitty code that I dont understand. I will optimize it later, but for now, this is a working sample that actually works and injects the like button in the shorts overlay.

(function () {
  // Prevent duplicate observers if injected multiple times
  if (window.__ytnhInitialized) {
    console.log("YTNH already running!");
    return;
  }
  window.__ytnhInitialized = true;

  // 1. Inject custom styling to lock down dimensions
  const styleId = "ytnh-custom-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .ytReelPlayerOverlayViewModelActionsContainer yt-icon,
      ytd-reel-player-overlay-renderer yt-icon {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .ytReelPlayerOverlayViewModelActionsContainer svg,
      ytd-reel-player-overlay-renderer svg {
        width: 24px !important;
        height: 24px !important;
        fill: currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Safe Trusted Types Policy initialization (avoids re-creation errors)
  let ytPolicy;
  try {
    ytPolicy = window.trustedTypes?.createPolicy("yt-no-heresy", {
      createHTML: (input) => input,
    }) || { createHTML: (input) => input };
  } catch (e) {
    ytPolicy = window.trustedTypes?.policy;
  }

  // 3. Verified SVG strings with correct matrix transforms
  const thumbsUpSVGs = {
    unliked: `
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" focusable="false">
        <g transform="matrix(-1 0 0 -1 24 24)">
          <path fill="currentColor" d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path>
        </g>
      </svg>
    `,
    liked: `
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" focusable="false">
        <g transform="matrix(-1 0 0 -1 24 24)">
          <path fill="currentColor" d="M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z"></path>
        </g>
      </svg>
    `,
  };

  // 4. Processing logic
  function processShortsActionBar(actionBar) {
    const button = actionBar.querySelector(
      'button.ytSpecButtonShapeNextHost[aria-label^="like"]',
    );
    if (!button) return;

    const iconContainer = button.querySelector(".ytSpecButtonShapeNextIcon");
    if (!iconContainer) return;

    const isLiked = button.getAttribute("aria-pressed") === "true";
    const targetSvg = isLiked ? thumbsUpSVGs.liked : thumbsUpSVGs.unliked;

    if (iconContainer.dataset.ytnhState === String(isLiked)) return;

    iconContainer.innerHTML = ytPolicy.createHTML(targetSvg);
    iconContainer.dataset.ytnhState = String(isLiked);
  }

  // 5. Observer setup
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-pressed"
      ) {
        const targetButton = mutation.target.closest(
          "button.ytSpecButtonShapeNextHost",
        );
        const actionBar = targetButton?.closest(
          "ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer",
        );
        if (actionBar) {
          processShortsActionBar(actionBar);
        }
        continue;
      }

      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const actionBars = node.matches?.(
            "ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer",
          )
            ? [node]
            : node.querySelectorAll?.(
                "ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer",
              ) || [];

          for (const bar of actionBars) {
            processShortsActionBar(bar);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-pressed"],
  });

  document
    .querySelectorAll(
      "ytd-reel-player-overlay-renderer, .ytReelPlayerOverlayViewModelActionsContainer",
    )
    .forEach(processShortsActionBar);
})();

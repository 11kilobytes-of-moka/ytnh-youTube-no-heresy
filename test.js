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
let likeButton = Array.from(
  document.querySelectorAll(
    ".ytReelPlayerOverlayViewModelActionsContainer button[aria-pressed][aria-label]",
  ),
).find(
  (b) =>
    /^like\b/i.test(b.getAttribute("aria-label")) ||
    /^\d[\d,.]*\s+likes?$/i.test(b.getAttribute("aria-label")),
);

console.log(likeButton);

// This is to actually make my own code trusted, This code was found on the interned, tweaked by me a little. now we have to actually optimize it later and 
put it in our code. comments explain how this done so i can actually use it later

// 1. Create a custom trusted types policy named 'mySvgPolicy'
const myPolicy = trustedTypes.createPolicy('mySvgPolicy', {
  createHTML: (inputString) => {
    // You could add sanitization logic here if needed, 
    // or just return the string since it's your own SVG.
    return inputString;
  }
});

// 2. Use your policy to turn your SVG string into trusted HTML
const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

const trustedSvg = myPolicy.createHTML(svgString);

// 3. Now you can safely use innerHTML without triggering CSP errors!
const currentSvg = window.likeButton.querySelector("svg");
if (currentSvg) {
  currentSvg.outerHTML = trustedSvg; // Browser trusts this because it's a TrustedHTML object!
}

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


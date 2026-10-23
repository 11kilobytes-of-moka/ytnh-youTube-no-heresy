const actionbar = document.querySelector(
  ".ytReelPlayerOverlayViewModelActionsContainer",
);
let buttons, label, button, isLikeButton, isPressed, state;
const findLikeButton = () => {
  buttons = actionbar.querySelectorAll("button[aria-pressed][aria-label]");
  for (button of buttons) {
    label = button.getAttribute("aria-label") || "";
    isLikeButton =
      /^like\b/i.test(label) || /^\d[\d,.]*\s+likes?$/i.test(label);
    if (!isLikeButton) continue;
    window.likeButton = button;
    isPressed = button.getAttribute("aria-pressed");
    state =
      button.getAttribute("aria-pressed") === "true" ? "liked" : "not liked";
    console.log(`Found like button`, { button, label, isPressed, state });
    break;
  }
};
!actionbar
  ? console.error(
      "ur youtube have been touched by the errors and thine actionbar that contain thy like and comment and other goodies have been lost, kind sir. hast thou checked on the result (error/try to refresh the page)?",
    )
  : findLikeButton();

// For quick injection in the console, use this:
(() => {
  const actionbar = document.querySelector(
    ".ytReelPlayerOverlayViewModelActionsContainer",
  );
  let buttons, button, label, isLikeButton, isPressed, state;
  const findLikeButton = () => {
    buttons = actionbar.querySelectorAll("button[aria-pressed][aria-label]");
    for (button of buttons) {
      label = button.getAttribute("aria-label") || "";
      isLikeButton =
        /^like\b/i.test(label) || /^\d[\d,.]*\s+likes?$/i.test(label);
      if (!isLikeButton) continue;
      window.likeButton = button;
      isPressed = button.getAttribute("aria-pressed");
      state =
        button.getAttribute("aria-pressed") === "true" ? "liked" : "not liked";
      console.log(`Found like button`, { button, label, isPressed, state });
      break;
    }
  };
  !actionbar
    ? console.error(
        "ur youtube have been touched by the errors and thine actionbar that contain thy like and comment and other goodies have been lost, kind sir. hast thou checked on the result (error/try to refresh the page)?",
      )
    : findLikeButton();
})();

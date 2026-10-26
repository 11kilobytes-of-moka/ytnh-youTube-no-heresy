const actionbar = document.querySelector(
  ".ytReelPlayerOverlayViewModelActionsContainer",
);
const ytPolicy = window.trustedTypes?.createPolicy("ytPolicy", {
  createHTML: (input) => input,
});
let buttons, button, label, isLikeButton, isPressed, state, btnSvg;
const likeSvgNotFilled =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path></g></svg>';
const likeSvgFilled =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z"></path></g></svg>';
const findLikeButton = () => {
  buttons = actionbar.querySelectorAll("button[aria-pressed][aria-label]");
  for (button of buttons) {
    label = button.getAttribute("aria-label") || "";
    isLikeButton =
      /^like\b/i.test(label) || /^\d[\d,.]*\s+likes?$/i.test(label);
    if (!isLikeButton) continue;
    window.likeButton = button;
    isPressed = button.getAttribute("aria-pressed");
    window.isLikeButtonPressed = isPressed;
    state =
      button.getAttribute("aria-pressed") === "true" ? "liked" : "not liked";
    break;
  }
};
const findButtonSvg = () => {
  !window.likeButton ? findLikeButton() : null;
  btnSvg = window.likeButton.querySelector("svg");
  window.likeButtonSvg = btnSvg;
};
const updateLikeButton = () => {
  !window.likeButton ? findLikeButton() : null;
  !window.likeButtonSvg ? findButtonSvg() : null;
  window.isLikeButtonPressed === "true"
    ? (window.likeButtonSvg.outerHTML = ytPolicy.createHTML(likeSvgFilled))
    : (window.likeButtonSvg.outerHTML = ytPolicy.createHTML(likeSvgNotFilled));
};
const removeHeresy = () => {
  findLikeButton();
  findButtonSvg();
  updateLikeButton();
};
removeHeresy();

// For quick injection in the console, use this (outdated):
(() => {
  const actionbar = document.querySelector(
    ".ytReelPlayerOverlayViewModelActionsContainer",
  );
  const ytPolicy = window.trustedTypes?.createPolicy("ytPolicy", {
    createHTML: (input) => input,
  });
  let buttons, button, label, isLikeButton, isPressed, state, btnSvg;
  const likeSvgNotFilled =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path></g></svg>';
  const likeSvgFilled =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z"></path></g></svg>';
  const findLikeButton = () => {
    buttons = actionbar.querySelectorAll("button[aria-pressed][aria-label]");
    for (button of buttons) {
      label = button.getAttribute("aria-label") || "";
      isLikeButton =
        /^like\b/i.test(label) || /^\d[\d,.]*\s+likes?$/i.test(label);
      if (!isLikeButton) continue;
      window.likeButton = button;
      isPressed = button.getAttribute("aria-pressed");
      window.isLikeButtonPressed = isPressed;
      state =
        button.getAttribute("aria-pressed") === "true" ? "liked" : "not liked";
      // console.log(`Found like button`, { button, label, isPressed, state });
      break;
    }
  };
  const findButtonSvg = () => {
    !window.likeButton ? findLikeButton() : null;
    btnSvg = window.likeButton.querySelector("svg");
    window.likeButtonSvg = btnSvg;
  };
  const updateLikeButton = () => {
    !window.likeButton ? findLikeButton() : null;
    !window.likeButtonSvg ? findButtonSvg() : null;
    window.isLikeButtonPressed === "true"
      ? (window.likeButtonSvg.outerHTML = ytPolicy.createHTML(likeSvgFilled))
      : (window.likeButtonSvg.outerHTML =
          ytPolicy.createHTML(likeSvgNotFilled));
  };
  const removeHeresy = () => {
    findLikeButton();
    findButtonSvg();
    updateLikeButton();
  };
  removeHeresy();
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        if (
          window.likeButtonSvg.innerHTML.includes(
            "m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152",
          ) ||
          window.likeButtonSvg.innerHTML.includes(
            "M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1",
          )
        ) {
          continue;
        } else {
          removeHeresy();
        }
      }
    }
  });
  observer.observe(window.likeButton, { childList: true, subtree: true });
})();

// for quick injection in the console, use this (updated):
(() => {
  const likeButtonParent = document.querySelector(
    ".ytSpecButtonShapeWithLabelHost",
  );
  const likeButton = likeButtonParent.querySelector("button");
  window.likeBtn = likeButton;
  const likeButtonSvg = likeButton.querySelector("svg");
  window.likeSvg = likeButtonSvg;
  const ytPolicy = window.trustedTypes?.createPolicy("ytPolicy", {
    createHTML: (input) => input,
  });
  const likeSvgNotFilled =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path></g></svg>';
  const likeSvgFilled =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><g transform="matrix(-1 0 0 -1 24 24)"><path d="M11.313 2.002c2.088 0 4.14.546 5.953 1.583l.273.156a2 2 0 00.993.264H21a1 1 0 011 1V11a1 1 0 01-1.002 1l-2.787-.005a1 1 0 00-.946.67l-3.02 8.628a.815.815 0 01-.966.522 3.262 3.262 0 01-2.35-4.062l.707-2.477a1 1 0 00-.961-1.274h-5.29a2.24 2.24 0 01-2.004-1.238l-.18-.359a1.784 1.784 0 01.601-2.278.446.446 0 00.198-.37v-.07a.578.578 0 00-.116-.347 2.374 2.374 0 01.412-3.278l.498-.399a.379.379 0 00.123-.415l-.07-.207a2.1 2.1 0 01.313-1.923A2.798 2.798 0 017.4 2l3.913.002Z"></path></g></svg>';
  const safeSvgNotFilled = ytPolicy
    ? ytPolicy.createHTML(likeSvgNotFilled)
    : likeSvgNotFilled;
  const safeSvgFilled = ytPolicy
    ? ytPolicy.createHTML(likeSvgFilled)
    : likeSvgFilled;
  const editHeresy = () => {
    const isPressed = window.likeBtn.getAttribute("aria-pressed") === "true";
    const targetSvg = isPressed ? safeSvgFilled : safeSvgNotFilled;
    if (!likeButtonParent.querySelector("button").querySelector("svg").outerHTML.includes("m11.31 2")) {
      likeButtonParent.querySelector("button").querySelector("svg").outerHTML = targetSvg;
    }
  };
  editHeresy();
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      editHeresy();
    }
  });
  observer.observe(likeButtonParent.querySelector("button"), {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-pressed"],
  });
})();
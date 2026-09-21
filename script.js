const homeBtn =
  document.getElementById(
    "homeBtn"
  );

const aboutBtn =
  document.getElementById(
    "aboutBtn"
  );

const exploreBtn =
  document.getElementById(
    "exploreBtn"
  );

const duckPlayBtn =
  document.getElementById(
    "duckPlayBtn"
  );

const aboutModal =
  document.getElementById(
    "aboutModal"
  );

const closeAbout =
  document.getElementById(
    "closeAbout"
  );

// HOME

homeBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);

// EXPLORE

exploreBtn.addEventListener(
  "click",
  () => {

    document
      .getElementById("games")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);

// ABOUT

aboutBtn.addEventListener(
  "click",
  () => {

    aboutModal.classList.add(
      "open"
    );

  }
);

closeAbout.addEventListener(
  "click",
  () => {

    aboutModal.classList.remove(
      "open"
    );

  }
);

aboutModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      aboutModal
    ) {

      aboutModal.classList.remove(
        "open"
      );

    }

  }
);

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      aboutModal.classList.remove(
        "open"
      );

    }

  }
);

// DON'T DROP THE DUCK

duckPlayBtn.addEventListener(
  "click",
  () => {

    window.location.href =
      "https://axonitelabs.github.io/dont-drop-the-duck/";

  }
);

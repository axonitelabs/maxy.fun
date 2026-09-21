const homeButton =
  document.getElementById(
    "homeButton"
  );

const aboutButton =
  document.getElementById(
    "aboutButton"
  );

const aboutPanel =
  document.getElementById(
    "aboutPanel"
  );

const closeAbout =
  document.getElementById(
    "closeAbout"
  );

const playButtons =
  document.querySelectorAll(
    ".play-button"
  );


homeButton.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


aboutButton.addEventListener(
  "click",
  () => {

    aboutPanel.classList.add(
      "active"
    );

  }
);


closeAbout.addEventListener(
  "click",
  () => {

    aboutPanel.classList.remove(
      "active"
    );

  }
);


aboutPanel.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      aboutPanel
    ) {

      aboutPanel.classList.remove(
        "active"
      );

    }

  }
);


playButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const game =
          button.dataset.game;

        if (
          game ===
          "duck"
        ) {

          /*
          REPLACE THIS WITH
          YOUR ACTUAL
          DON'T DROP THE DUCK
          GITHUB PAGES LINK
          */

          window.location.href =
            "https://axonitelabs.github.io/dont-drop-the-duck/";

        }

      }
    );

  }
);

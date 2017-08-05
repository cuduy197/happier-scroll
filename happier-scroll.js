let happierScroll = (idApp = "app") => {
  let getId = id => document.getElementById(id);
  let getTag = tag => document.getElementsByTagName(tag);
  var app = getId(idApp);
  app === null && alert("Pleace input correct app id!");
  var Button = getTag("Button");
  /* 
  console.log(typeof Button);
 */
  if (Button.length !== 0) {
    for (var key in Button) {
      if (Button.hasOwnProperty(key)) {
        // console.log(Button[key].attributes);
        let button = Button[key];
        let isScrollDown = button.hasAttribute("hp-scroll-down");
        let isScrollUp = button.hasAttribute("hp-scroll-up");
        let isScrollEnd = button.hasAttribute("hp-scroll-end");
        let isScrollTop = button.hasAttribute("hp-scroll-top");

        if (isScrollDown) {
          console.log("event hp-scroll-down ok! ");
          button.addEventListener("click", e => {
            ScrollToDown(e);
          });
        }

        if (isScrollUp) {
          console.log("event hp-scroll-up ok! ");
          button.addEventListener("click", e => {
            ScrollToUp(e);
          });
        }

        if (isScrollEnd) {
          console.log("event hp-scroll-end ok! ");
          button.addEventListener("click", e => {
            ScrollEnd(e);
          });
        }
        if (isScrollTop) {
          console.log("event hp-scroll-top ok! ");
          button.addEventListener("click", e => {
            ScrollTop(e);
          });
        }
      }
    }

    let time = 500,
      fps = 21,
      Start;

    let ScrollToDown = e => {
      let buttonPositionY = e.pageY;
      let pageNumber = Math.round(buttonPositionY / window.innerHeight);
      let EndScroll = window.innerHeight * pageNumber;

      console.log(pageNumber);
      if (EndScroll !== app.clientHeight) {
        Start = EndScroll - window.innerHeight;
        let ScrollInterval = setInterval(function() {
          Start += window.innerHeight / fps;
          scrollTo(0, Start);
        }, time / fps);

        setTimeout(function() {
          clearInterval(ScrollInterval);
        }, time);
      } else {
        console.log("This is end!");
      }
    }; //End ScrollDown

    let ScrollToUp = e => {
      let buttonPositionY = e.pageY;
      let pageNumber = Math.round(buttonPositionY / window.innerHeight);
      let EndScroll = window.innerHeight * pageNumber;
      console.log(pageNumber);
      if (EndScroll !== window.innerHeight) {
        Start = EndScroll - window.innerHeight;
        let ScrollInterval = setInterval(function() {
          Start -= window.innerHeight / fps;
          scrollTo(0, Start);
        }, time / fps);

        setTimeout(function() {
          clearInterval(ScrollInterval);
        }, time);
      } else {
        console.log("This is begin!");
      }
    }; //End ScrollUp

    let ScrollEnd = e => {
      Start = 0;
      let ScrollInterval = setInterval(function() {
        Start += app.clientHeight / fps;
        scrollTo(0, Start);
      }, time / fps);

      setTimeout(function() {
        clearInterval(ScrollInterval);
      }, time);
    }; // End ScrollDown

    let ScrollTop = e => {
      Start = app.clientHeight;
      let ScrollInterval = setInterval(function() {
        Start -= app.clientHeight / fps;
        scrollTo(0, Start);
      }, time / fps);

      setTimeout(function() {
        clearInterval(ScrollInterval);
      }, time);
    }; // End ScrollTop
  } else {
    alert("No button in app!");
  }
};

happierScroll();

const getDedugInfo = () => {
  console.log("getDedugInfo");
  const getId = id => document.getElementById(id);
  const getTag = tag => document.getElementsByTagName(tag);

  let info = {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
    appHeight: getId("app").clientHeight,
    appWidth: getId("app").clientWidth
  };

  for (let key in info) {
    if (getId(key) === null) {
      let node = document.createElement("li"); // Create a <li> node
      let textnode = document.createTextNode(`${key} : ${info[key]}px`); // Create a text node
      node.id = key;
      node.appendChild(textnode); // Append the text to <li>
      DebugInfo.appendChild(node); // Append <li> to <ul> with id="myList"
    } else {
      getId(key).innerText = `${key} : ${info[key]}px`;
    }
  }
};

if (localStorage.debug === "true") {
  var DebugInfo = document.createElement("div");
  DebugInfo.id = "debug";
  document.body.appendChild(DebugInfo);
  getDedugInfo();
  window.addEventListener("resize", getDedugInfo);
}

//Add style
(() => {
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `#debug {
    margin-top: 0 !important;
    position: fixed;
    top: 0;
    z-index: 10000;
    border-radius: 5px;
    font-family: monospace;
    border: 2px solid white;
    padding: 1em;
    min-width: 10vw;
    background: rgb(40, 42, 54);
    -webkit-transition: all .5 ease 0;
    -moz-transition: all .5 ease 0;
    transition: all .5 ease 0;
}

#debug:hover li:hover {
    border-radius: 15px;
    color: rgb(40, 42, 54);
    font-weight: bold;
    transform: scale(1.1, 1.1);
    background: white;
    cursor: pointer;
}`;
  document.body.appendChild(css);
})();

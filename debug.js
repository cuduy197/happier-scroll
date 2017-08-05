var getDedugInfo = () => {
  console.log("getDedugInfo");
  const getId = id => document.getElementById(id);
  const getTag = tag => document.getElementsByTagName(tag);

  const degbug = getId("debug");

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
      degbug.appendChild(node); // Append <li> to <ul> with id="myList"
    } else {
      getId(key).innerText = `${key} : ${info[key]}px`;
    }
  }
};
getDedugInfo();
window.addEventListener("resize", getDedugInfo);

function buttons() {
  <div>
    <button onClick="home()">Home</button>
    <button onClick="notHome()">Not Home</button>
    <button onClick="increase()">Increase</button>
    <button onClick="decrease()">Decrease</button>
  </div>
}

let counter = 0;

function home() {
  return <a href="home.html"></a>
}

function notHome() {
  return <a href="notHome.html"></a>
}

function increase() {
  return counter + 1
}

function decrease() {
  return counter -1
}
  
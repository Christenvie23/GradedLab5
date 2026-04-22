document.getElementById("blend").addEventListener("click", blendSurname);

function blendSurname() {
  const surname = document.getElementById("surname").value;
  const font = document.getElementById("font").value;
  const output = document.getElementById("output");

  output.innerHTML = "";

  let letters = surname.split("");

  if (document.getElementById("reverse").checked) {
    letters.reverse();
  }

  for (let i = 0; i < letters.length; i++) {
    const span = document.createElement("span");

    span.textContent = letters[i];
    span.style.position = "absolute";
    span.style.fontFamily = font;

    if (document.getElementById("random").checked) {
      span.style.left = Math.random() * 300 + "px";
      span.style.top = Math.random() * 100 + "px";
    } else {
      let pos = (i + 1) * 15;
      span.style.left = pos + "px";
      span.style.top = pos + "px";
    }
//my output isnt being displayed at the right place...
    output.appendChild(span);
  }
}

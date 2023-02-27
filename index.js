// import confetti from "https://cdn.skypack.dev/canvas-confetti";

// function taskCompletion()
// {
//   confetti();
//   window.addEventListener("click", () => {
//     confetti();
//   });
// }

var form = document.querySelector("form");
var input = document.querySelector("input");
var list = document.querySelector(".list");
let darkMode = false;
let lightMode = true;
form.addEventListener("submit", (e) => 
{
  e.preventDefault();
  const value = input.value;
  if(value === "")
  {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("errorMessage").innerHTML = "Task cannot be empty";
  }
  else
  {
    var element = document.createElement("div");
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("initialMessage").style.display = "none";
  }
  if(!lightMode) document.getElementById("list").style.color = "#f5f5f7";
  else if(!darkMode) document.getElementById("list").style.color = "#222";
  element.textContent = value;
  element.addEventListener("click", () => 
  {
    if(element.style.textDecoration === "line-through")
    {
      element.style.textDecoration = "none";
      element.style.color = "#222";
      if(!lightMode) element.style.color = "#f5f5f7";
      else if(!darkMode) element.style.color = "#222";
    }
    else
    {
      element.style.textDecoration = "line-through";
      element.style.color = "#FF3131";
      element.style.letterSpacing = "5px";
      initializeRemoval()
      // element.style.color = "#f44336";
      // taskCompletion();
      function initializeRemoval()
      {
        setTimeout(removeItem, 1000) 
      }
      function removeItem()
      {
        element.style.display = "none";
      }
    }
})
list.append(element);
input.value = "";
});

function toggleDarkMode()
{
  document.body.style.backgroundColor = "#101820";
  document.getElementById("mainHeading").style.color = "#f5f5f7";
  document.getElementById("subHeading").style.color = "#f5f5f7";
  document.getElementById("insertItem").style.color = "#f5f5f7";
  document.getElementById("list").style.color = "#f5f5f7";
  darkMode = true;
  lightMode = false;
  element.style.color = "#f5f5f7";
}

function toggleLightMode()
{
  document.body.style.backgroundColor = "#fff";
  document.getElementById("mainHeading").style.color = "#222";
  document.getElementById("subHeading").style.color = "#222";
  document.getElementById("insertItem").style.color = "#222";
  document.getElementById("list").style.color = "#222";
  darkMode = false;
  lightMode = true;
  element.style.color = "#222";
}
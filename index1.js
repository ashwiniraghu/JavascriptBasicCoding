//Demonstration of how to create element and append it to exsisting element and store in local storage
let val = localStorage.getItem("text");
//create a new div
let div = document.createElement("div");
let text;

if (val == null) {
  ///create a new text node if there is nothing in local storage
  text = document.createTextNode(
    "This is my first text node.Please click here"
  );
} else {
  ///Add text node from tet storage
  text = document.createTextNode(val);
}
//append to div element
div.appendChild(text);
//set attributes like class,id,style
div.setAttribute("id", "myFirstDev");
div.setAttribute("class", "myFirstDevClass");
div.setAttribute(
  "style",
  "border:2px solid black;width:150px;margin:34px;padding:35px;"
);

//get main container and the element before which we need to place new div
let main = document.querySelector(".container");
let firstHead = document.getElementById("firstHead");
//insert before the firsthead element
main.insertBefore(div, firstHead);

//add a event listner to div click
div.addEventListener("click", function () {
  let isTextArea = document.getElementsByClassName("textarea").length;
  if (isTextArea == 0) {
    //set the text area with the new text if already not set
    let html = myFirstDev.innerHTML;
    div.innerHTML = `<textarea class="textarea form-control" id="textarea" rows=3>${html}</textarea>`;
  }

  let txtarea = document.getElementById("textarea");
  //add event listner to text area on going outside and set the text area with exsisting text and store in local storage
  txtarea.addEventListener("blur", function () {
    myFirstDev.innerHTML = txtarea.value;
    localStorage.setItem("text", txtarea.value);
  });
});

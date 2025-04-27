document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  let name;
  let message;
  name = document.getElementById("name").value;
  message = document.getElementById("message").value;

  const newComment = document.createElement("p");
  newComment.textContent = name + ": " + message;
  document.getElementById("comment").appendChild(newComment);

  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
};

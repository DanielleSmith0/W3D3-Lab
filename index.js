let inputField = document.querySelector("input");
let form = document.querySelector("form");
let message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    let list = document.querySelector("ul");

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    list.appendChild(movie);
    inputField.value = ""
}

form.addEventListener("submit", addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = event.target.parentNode.childNodes[0].textContent + " deleted!";
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
        message.textContent = event.target.textContent + " watched!"
    }else {
        message.textContent = event.target.textContent + " added back!"
    }
    revealMessage();
}

function revealMessage () {
    message.classList.remove("hide")
    setTimeout( () => {
        message.classList.add("hide")
    }, 1000)
}


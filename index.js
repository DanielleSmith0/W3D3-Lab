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
    message.textContent = "Movie deleted!";
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!"
    }else {
        message.textContent = "Movie added back!"
    }
    revealMessage();
}

function revealMessage(setTimeout) {
    message.classList("hide", 1000);
}
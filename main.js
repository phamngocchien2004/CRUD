let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();//callback
    console.log("Button clicked!");
    formValidation();//call function

});

let formValidation = () => {
    console.log("From fromValidation function!");
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};//Global variable

//input post
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};
//create post
let createPost = () => {
    posts.innerHTML += `
    <div><p>${data.text}</p><span class="options"><i onClick="editPost(this)" class="fas fa-edit"></i><i onClick="deletePost(this)" class="fas fa-trash-alt"></i></span></div>`;
};
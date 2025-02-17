function User(name, email, comments) {
    this.name = name;
    this.email = email;
    this.comments = comments;
}

User.prototype.displayInfo = function() {
    return `<strong>User:</strong> ${this.name} at ${this.email} has been created!`;
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;
    let newUser = new User(name, email, comments);
    let userElement = document.createElement("div");
    userElement.innerHTML = newUser.displayInfo();
    document.getElementById("userList").appendChild(userElement);
    document.getElementById("form").reset();
});
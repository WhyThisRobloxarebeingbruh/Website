const userDiv = document.getElementById("user");

netlifyIdentity.on("init", user => {
  if (user) {
    userDiv.innerHTML = "Logged in as: " + user.email;
  }
});

netlifyIdentity.on("login", user => {
  userDiv.innerHTML = "Logged in as: " + user.email;
  netlifyIdentity.close();
});

netlifyIdentity.on("logout", () => {
  userDiv.innerHTML = "";
});

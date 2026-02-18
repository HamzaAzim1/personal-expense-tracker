import { getUsers, saveUsers, setCurrentUser, getCurrentUser, seedIfEmpty } from "./api.js";

seedIfEmpty();

export function guardAuth() {
  const u = getCurrentUser();
  if (!u) window.location.href = "./login.html";
}

export function handleLogin(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value.trim();

    const users = getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    const msg = document.getElementById("msg");

    if (!found) {
      msg.textContent = "Invalid email or password.";
      msg.className = "notice";
      return;
    }

    setCurrentUser({ id: found.id, email: found.email });
    window.location.href = "./index.html";
  });
}

export function handleRegister(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value.trim();

    const msg = document.getElementById("msg");
    const users = getUsers();

    if (users.some(u => u.email === email)) {
      msg.textContent = "Email already registered.";
      msg.className = "notice";
      return;
    }

    const newUser = { id: Date.now(), email, password };
    users.push(newUser);
    saveUsers(users);

    msg.textContent = "Account created! You can log in now.";
    msg.className = "notice";
    form.reset();
  });
}

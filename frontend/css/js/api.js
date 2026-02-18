const STORAGE_KEYS = {
  user: "pet_current_user",
  users: "pet_users",
  tx: "pet_transactions"
};

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || "null");
}

export function setCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(STORAGE_KEYS.user);
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || "[]");
}

export function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

export function getTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.tx) || "[]");
}

export function saveTransactions(txs) {
  localStorage.setItem(STORAGE_KEYS.tx, JSON.stringify(txs));
}

export function seedIfEmpty() {
  const users = getUsers();
  if (users.length === 0) {
    saveUsers([{ id: 1, email: "demo@demo.com", password: "demo123" }]);
  }
  const txs = getTransactions();
  if (txs.length === 0) {
    saveTransactions([
      { id: 1, userId: 1, type: "expense", category: "Food", amount: 12.50, date: "2026-02-01", desc: "Lunch" },
      { id: 2, userId: 1, type: "income", category: "Job", amount: 250.00, date: "2026-02-03", desc: "Shift pay" }
    ]);
  }
}

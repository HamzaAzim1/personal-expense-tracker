import { getCurrentUser, logout, getTransactions, saveTransactions } from "./api.js";
import { guardAuth } from "./auth.js";

export function initDashboard() {
  guardAuth();
  const user = getCurrentUser();

  document.getElementById("userEmail").textContent = user.email;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    window.location.href = "./login.html";
  });

  render();
}

function render() {
  const user = getCurrentUser();
  const all = getTransactions();
  const txs = all.filter(t => t.userId === user.id);

  const tbody = document.getElementById("txBody");
  tbody.innerHTML = "";

  let income = 0, expense = 0;

  txs.forEach(t => {
    if (t.type === "income") income += Number(t.amount);
    else expense += Number(t.amount);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="badge ${t.type}">${t.type}</span></td>
      <td>${t.category}</td>
      <td>$${Number(t.amount).toFixed(2)}</td>
      <td>${t.date}</td>
      <td>${t.desc || ""}</td>
      <td class="actions">
        <button class="btn btn-ghost" data-edit="${t.id}">Edit</button>
        <button class="btn btn-danger" data-del="${t.id}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("incomeTotal").textContent = `$${income.toFixed(2)}`;
  document.getElementById("expenseTotal").textContent = `$${expense.toFixed(2)}`;
  document.getElementById("balanceTotal").textContent = `$${(income - expense).toFixed(2)}`;

  tbody.querySelectorAll("[data-edit]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-edit");
      window.location.href = `./edit.html?id=${id}`;
    });
  });

  tbody.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-del"));
      const allTx = getTransactions();
      const updated = allTx.filter(t => t.id !== id);
      saveTransactions(updated);
      render();
    });
  });
}

export function initAddForm(form) {
  guardAuth();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getCurrentUser();

    const tx = {
      id: Date.now(),
      userId: user.id,
      type: form.type.value,
      category: form.category.value,
      amount: Number(form.amount.value),
      date: form.date.value,
      desc: form.desc.value.trim()
    };

    const all = getTransactions();
    all.push(tx);
    saveTransactions(all);

    window.location.href = "./index.html";
  });
}

export function initEditForm(form) {
  guardAuth();

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const all = getTransactions();
  const tx = all.find(t => t.id === id);

  if (!tx) {
    document.getElementById("msg").textContent = "Transaction not found.";
    document.getElementById("msg").className = "notice";
    return;
  }

  form.type.value = tx.type;
  form.category.value = tx.category;
  form.amount.value = tx.amount;
  form.date.value = tx.date;
  form.desc.value = tx.desc || "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tx.type = form.type.value;
    tx.category = form.category.value;
    tx.amount = Number(form.amount.value);
    tx.date = form.date.value;
    tx.desc = form.desc.value.trim();

    saveTransactions(all);
    window.location.href = "./index.html";
  });
}

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.onclick = () => removeTodo(index);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  if (todoInput.value.trim() !== "") {
    todos.push(todoInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    loadTodos();
  }
}

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  loadTodos();
}

loadTodos();

// Product Listing
const products = [
  { name: "Smartphone", category: "electronics", price: 30000, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 500, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 60000, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 1500, rating: 3.9 },
];

function renderProducts() {
  const list = document.getElementById("productList");
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sort").value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  list.innerHTML = "";
  filtered.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ₹${product.price} - ⭐ ${product.rating}`;
    list.appendChild(li);
  });
}

renderProducts();

import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ date: '', category: '', description: '', amount: '' });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add a new expense
  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...form,
    };
    setExpenses([...expenses, newExpense]);
    setForm({ date: '', category: '', description: '', amount: '' });
  };

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* Add Expense Form */}
      <form onSubmit={addExpense} className="expense-form">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          required
          placeholder="Date"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleInputChange}
          required
          placeholder="Category"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInputChange}
          required
          placeholder="Description"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInputChange}
          required
          placeholder="Amount"
        />
        <button type="submit">Add Expense</button>
      </form>

      {/* Display Expenses */}
      <div className="expense-list">
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                <span>{expense.date}</span> - <strong>{expense.category}</strong> -{' '}
                <em>{expense.description}</em> - ₹{expense.amount}
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

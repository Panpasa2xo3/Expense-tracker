'use client';

import React, { useState, useEffect } from 'react';


interface Transaction {
  description: string;
  amount: number;
}

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (!description || !amount) return;
    const newTransaction: Transaction = { description, amount: parseFloat(amount) };
    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`p-6 max-w-3xl mx-auto shadow-xl rounded-lg mt-10 ${theme === 'dark' ? 'bg-[#2c1b55] text-white' : 'bg-[#f4e1f2] text-black'}`}>
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 bg-[#7a4d9d] text-white px-4 py-2 rounded-md hover:bg-[#9b67a6] transition duration-300"
      >
        {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
      </button>
      
      <h2 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-[#5e2870]'} mb-6 ${dancingScript.variable}`}>Expense Tracker</h2>
      <p className={`text-lg font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-[#5e2870]'}`}>Balance: ฿{totalBalance.toFixed(2)}</p>
      
      <div className="my-5">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#3b1c58] text-white focus:ring-[#9b67a6]' : 'bg-white text-black focus:ring-[#9b67a6]'} mb-3`}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#3b1c58] text-white focus:ring-[#9b67a6]' : 'bg-white text-black focus:ring-[#9b67a6]'} mb-3`}
        />
        <button
          onClick={addTransaction}
          className={`w-full text-white px-6 py-3 rounded-md text-lg font-semibold ${theme === 'dark' ? 'bg-[#7a4d9d] hover:bg-[#9b67a6]' : 'bg-[#9b67a6] hover:bg-[#7a4d9d]'} transition duration-200`}
        >
          Add Transaction
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className={theme === 'dark' ? 'bg-[#3b1c58]' : 'bg-[#f4e1f2]'}>
              <th className="border p-4 text-left text-sm font-medium">Description</th>
              <th className="border p-4 text-left text-sm font-medium">Amount (฿)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className={`odd:${theme === 'dark' ? 'bg-[#3b1c58]' : 'bg-[#f4e1f2]'} even:${theme === 'dark' ? 'bg-[#2c1b55]' : 'bg-[#f1d0f7]'} hover:${theme === 'dark' ? 'bg-[#9b67a6]' : 'bg-[#9b67a6]'}`}>
                <td className="border p-4 text-sm">{transaction.description}</td>
                <td className="border p-4 text-sm">{transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTracker;

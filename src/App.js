import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/techGaintCompanies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);
  return (
    <div className="App">
      <h1>This is my own Books data: {books.length}</h1>
      <ul>
        {books.map((book) => (
          <li key={books.id}>
            Author:{book.author} 
            Email: {book.email} 
            Category: {book.category} 
          </li>
        ))}
      </ul>

      <h1>This is my own Fruits data:{fruits.length}</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruits.id}>
            Name:{fruit.name} 
            District:{fruit.grown}
          </li>
        ))}
      </ul>

      <h1>World wide top ten Tech Gaint Company list:{companies.length}</h1>
      {/* 
      *সার্ভার সাইডের ডেটা ক্লাইন্ট সাইডে দেখানোর জন্য cors ব্যবহার করতে হবে।  *ক্লাইন্ট সাইডে useState যখন ব্যবহার করবো দুইটা ভ্যারিয়েবল দিতে হয় যেমন [companies, setCompanies].
      *এখানে প্রথম যে companies আছে এই ভ্যারিয়েবল টা তে সার্ভার সাইডের সকল ডেটা [arry of object] সংরক্ষিত আছে৷ *companies নামের ভ্যারিয়েবল টা তেই আমাকে map চালাতে হবে৷*/}
      <ul>
        {companies.map((company) => (
          <li key={companies.rank}>
            rank:{company.rank}
            name:{company.companyName}
            Headquarters:{company.headQuarters}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

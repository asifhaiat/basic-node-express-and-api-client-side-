import React from "react";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddBooks = (event) => {
    event.preventDefault();
    const author = event.target.author.value;
    const email = event.target.email.value;
    console.log(author, email);
    const book = { author, email }; /* create new object to parse data */
    //   post data to server
    fetch("http://localhost:5000/addBook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newBooks = [...books, data];
        setBooks(newBooks);
      });
  };

  return (
    <div>
      <h1>This is my own Books data: {books.length}</h1>
      <form onSubmit={handleAddBooks}>
        <input type="text" name="author" placeholder="Author" />
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Add book" />
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            Author:{book.author}
            Email: {book.email}
            {/* Category: {book.category} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

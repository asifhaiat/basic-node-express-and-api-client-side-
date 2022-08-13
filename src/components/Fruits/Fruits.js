import React from "react";
import { useEffect, useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const handleAddFruits = (event) => {
    event.preventDefault();
    const fruit = event.target.fruit.value;
    const district = event.target.district.value;
    const fruit1 = { fruit, district };
    // post data to server
    fetch("http://localhost:5000/addFruit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fruit1),
    })
      .then((res) => res.json())
      .then((data) => {
        const newFruits = [...fruits, data];
        setFruits(newFruits);
        console.log(data);
      });
  };

  return (
    <div>
      <h1>This is my own Fruits data:{fruits.length}</h1>
      <form onSubmit={handleAddFruits}>
        <input type="text" name="fruit" placeholder="Name" />
        <input type="text" name="district" placeholder="District" />
        <input type="submit" value="Add Fruit" />
      </form>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            Name:{fruit.name}
            District:{fruit.grown}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;

import React from "react";
import { useEffect, useState } from "react";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/techGaintCompanies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  const handleAddCompany = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const headquarter = event.target.headquarter.value;
    const addCompany = { name, headquarter };

    // post data to server
    fetch("http://localhost:5000/addcompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCompany),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const addCompany = [...companies, data];
        setCompanies(addCompany);
      });
  };
  return (
    <div>
      <h1>World wide top ten Tech Gaint Company list:{companies.length}</h1>
      <form onSubmit={handleAddCompany}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="headquarter" placeholder="Headquarters" />
        <input type="submit" value="Add Company" />
      </form>
      {/*
       *সার্ভার সাইডের ডেটা ক্লাইন্ট সাইডে দেখানোর জন্য cors ব্যবহার করতে হবে।  *ক্লাইন্ট সাইডে useState যখন ব্যবহার করবো দুইটা ভ্যারিয়েবল দিতে হয় যেমন [companies, setCompanies].
       *এখানে প্রথম যে companies আছে এই ভ্যারিয়েবল টা তে সার্ভার সাইডের সকল ডেটা [arry of object] সংরক্ষিত আছে৷ *companies নামের ভ্যারিয়েবল টা তেই আমাকে map চালাতে হবে৷*/}
      <ul>
        {companies.map((company) => (
          <li key={company.rank}>
            name:{company.companyName}
            Headquarters:{company.headQuarters}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;

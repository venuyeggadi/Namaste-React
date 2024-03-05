import React, { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count1] = useState(1);
  
  const [count2] = useState(2);
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Inside setInterval");
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="user-card">
      <h3>Count1 = {count1}</h3>
      <h3>Count2 = {count2}</h3>
      <button onClick={() => count1 == count1 + 1}>
        Increase Count1
      </button>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Contact: None</h3>
    </div>
  );
};

export default User;

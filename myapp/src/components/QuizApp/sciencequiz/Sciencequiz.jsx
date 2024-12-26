import React, { useState } from 'react';

const Sciencequiz = () => {
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(resp => resp.json())
      .then(data => setData(data.results))
      .catch(error => console.error("Error fetching data:", error));
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Quiz Questions</button>
      <div>
        {data.length > 0 ? (
          data.map((elem, index) => (
            <div key={index}>
              <p>Question:{index}-- {elem.question}</p>
              <p>Correct Answer: {elem.correct_answer}</p>
            </div>
          ))
        ) : (
          <p>No data available. Click the button to load quiz questions.</p>
        )}
      </div>
    </>
  );
};

export default Sciencequiz;

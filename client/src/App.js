import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {
        (!backendData?.users?.length) ? 
        (<p>Loading...</p>) :
        (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )
      }
    </div>
  );
}

export default App;

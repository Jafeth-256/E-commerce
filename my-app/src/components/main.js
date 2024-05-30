import React, { useEffect, useState } from 'react';

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <main>
      {data && <div>{data.message}</div>}
    </main>
  );
}

export default Main;
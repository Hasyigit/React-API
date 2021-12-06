import React, {useState, useEffect} from 'react'
import axios from 'axios';
import userEvent from '@testing-library/user-event';

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
    console.log(res)
    setCountries(res.data)
  })
}, []);

  return (
    <div>
      <ul>
        {
          countries.map(post => (<li key={post.id}>{post.title}{post.body}{post.userId}</li>
            ))};
      </ul>
    </div>
  )
}

export default Country

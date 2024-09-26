import { useState, useEffect } from 'react';
// import Link from 'next/link';

const Users = ({ users }) => {
  console.log(users);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       'https://randomuser.me/api/?page=1&results=10&seed=abc'
  //     );
  //     const data = await res.json();
  //     setUsers(data?.results);
  //   })();
  // }, []);

  return (
    <section>
      {users?.length > 0 ? 'Loaded' : 'wait'}
      <div>
        {users?.length > 0 ? (
          users.map((user) => <p key={user.email}>{user.email}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Users;

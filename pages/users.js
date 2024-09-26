import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import Users from '../components/Users';

export async function getServerSideProps() {
  const res = await fetch(
    'https://randomuser.me/api/?page=1&results=10&seed=abc'
  );
  const data = await res.json();
  return {
    props: { users: data }
  };
}

const UsersPage = ({ users }) => {
  return <Users users={users.results} />;
};

export default UsersPage;

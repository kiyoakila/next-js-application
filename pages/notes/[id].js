import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  // what returns from router.query is an object with associated params sent in router, we need to destructure it to get id
  const { id } = router.query;

  return (
    <div>
      <button onClick={(e) => router.push('/')}>Go Home</button>

      <button onClick={(e) => router.push('/notes')}>Dashboard</button>

      <h1>This is Title of Note {id}</h1>
    </div>
  );
};

export default Page;

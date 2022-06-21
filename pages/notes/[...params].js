import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  // what returns from router.query is an object with associated params sent in router, we need to destructure it to get id
  const { params } = router.query;

  // if we have route /notes/1/2/3/4, params will be ["1","2","3","4"]
  return <h1>Note {params}</h1>;
};

export default Page;

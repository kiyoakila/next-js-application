import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    <h1>Index Page</h1>
    {/* navigate to a static path */}
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;

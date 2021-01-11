import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="block-1">
        <Posts />
      </div>
      <div className="block-2">
        <Sidebar />
      </div>
    </div>
  );
}

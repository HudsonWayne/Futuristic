// src/components/Layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '70%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional glassy effect
          padding: '2rem',
          borderRadius: '12px',
          color: 'white',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

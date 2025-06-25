import { ReactNode, useState } from 'react';
import Navbar from '../components/Navbar';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const [dark, setDark] = useState(true);

  return (
    <div style={{ backgroundColor: dark ? '#121212' : '#ffffff', minHeight: '100vh', color: dark ? '#ffffff' : '#000000' }}>
      <Navbar />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

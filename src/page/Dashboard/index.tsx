import React, { useCallback, useState } from 'react';
import Switch from 'react-switch';

import { useTheme } from '../../Context/Theme';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const themedarkstorage = localStorage.getItem('themedark');
  const [checked, setChecked] = useState(
    themedarkstorage !== 'nao' ? true : false
  );
  const { changeTheme } = useTheme();

  const handleTheme = useCallback(() => {
    setChecked(checked ? false : true);
    changeTheme();
  }, [changeTheme, checked]);

  return (
    <Container>
      <h2>Theme with React Hooks</h2>
      <div>
        <Switch onChange={handleTheme} checked={checked} />
      </div>
    </Container>
  );
};

export default Dashboard;

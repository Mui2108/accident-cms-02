import { Layout } from 'antd';
import React from 'react';
import nav from './nav';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  style?: React.CSSProperties;
}

const Sider = ({ style }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Layout.Sider style={style} width={240}>
      <div className="logo-layout" />

      {nav.map((item, idx) => (
        <div
          onClick={() => navigate(item.path)}
          key={`side-bar-${idx}-${item.path}`}
          className={pathname === item.path ? 'item-menu-active' : 'item-menu'}
        >
          {item.icon}
          <p>{item.name}</p>
        </div>
      ))}
    </Layout.Sider>
  );
};

export default Sider;

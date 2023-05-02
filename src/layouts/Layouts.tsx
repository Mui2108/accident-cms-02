import Header from './Header';
import Sider from './Sider';
import Contents from './Contents';
import { Layout } from 'antd';
import React from 'react';

const Layouts = () => {
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    height: '100vh',
    padding: '8px',
    color: '#fff',
    background: '#ffffff00',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    left: 0,
    marginTop: 24,
  };

  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    padding: 0,
    margin: '12px 12px 12px 240px',
    color: '#000',
    background: 'white',
    borderRadius: 24,
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  };

  return (
    <Layout style={{ background: '#2A303C' }}>
      <Sider style={siderStyle} />
      <Contents style={contentStyle} />
    </Layout>
  );
};

export default Layouts;

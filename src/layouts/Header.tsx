import { Avatar, Col, Layout, Row } from 'antd';
import React from 'react';
interface Props {
  style?: React.CSSProperties;
}

const Header = ({ style }: Props) => {
  return (
    <Layout.Header style={style}>
      <Row justify={'space-between'}>
        <div></div>
        <div>
          <Row gutter={12}>
            <Col>
              <Avatar />
            </Col>
            <Col>
              <p style={{ margin: 0 }}>Admin Property</p>
            </Col>
          </Row>
        </div>
      </Row>
    </Layout.Header>
  );
};

export default Header;

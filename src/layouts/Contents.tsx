import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
interface Props {
  style?: React.CSSProperties;
}
const { Content } = Layout;
const Contents = ({ style }: Props) => {
  return (
    <Content style={style}>
      <div style={{ height: 'calc(100vh - 24px)', overflow: 'auto', }}>
        <Outlet />
      </div>
    </Content>
  );
};

export default Contents;

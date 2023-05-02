import Layouts from 'layouts/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routers } from 'routers';
import Login from 'pages/login/login';
import NoMatch from 'components/NoMatch';
import './App.css';
import 'styles/index.less';
import { ConfigProvider } from 'antd';
import { customTheme } from 'theme/antd';
import 'leaflet/dist/leaflet.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={customTheme}>
          <Routes>
            <Route path="/" element={<Layouts />}>
              {routers.map((item, idx) =>
                item.path === '/' ? (
                  <Route index element={item.component} key={item.name + idx} />
                ) : (
                  <Route
                    path={item.path}
                    element={item.component}
                    key={item.name + idx}
                  />
                )
              )}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

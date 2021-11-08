/* eslint-disable no-unused-vars */
import './App.css';
import {
  Button,
  Content,
  Header,
  Layout,
  Sider,
  Footer,
} from '@devhyunjae2/station-ui';
import { useStyle } from '@devhyunjae2/style-router';
// import 'antd/dist/antd.css';
// import { Layout } from 'antd';

function App() {
  const { color, updateColor, breakpoint } = useStyle();
  // const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout hasSider style={{ height: '100%' }}>
      <Sider>
        <div>Sider</div>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    // <Layout hasSider>
    //   <Sider>
    //     <div
    //       style={{
    //         height: '64px',
    //         borderBottom: '1px solid #f3f3f3',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}
    //     >
    //       Terra Station
    //     </div>
    //     <div style={{ height: '100%' }}>toher</div>
    //   </Sider>
    //   <div style={{ height: 300, overflowY: 'scroll' }}>
    //     <Layout>
    //       <Header
    //         fixed
    //         style={{
    //           backgroundColor: 'pink',
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //         }}
    //       >
    //         this is fixed header
    //       </Header>
    //       <Content
    //         style={{
    //           minHeight: 120,
    //           backgroundColor: 'blue',
    //         }}
    //       >
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //         this is content this is content this is content
    //         <br />
    //       </Content>
    //       <Footer
    //         style={{
    //           backgroundColor: 'pink',
    //         }}
    //       >
    //         this is footer
    //       </Footer>
    //     </Layout>
    //   </div>
    // </Layout>
  );
}

export default App;

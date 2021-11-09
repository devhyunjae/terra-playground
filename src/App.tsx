/* eslint-disable no-unused-vars */
import {
  Button,
  Content,
  Header,
  Layout,
  Sider,
  MenuItem,
  PageHeader,
  Card,
} from '@devhyunjae2/station-ui';
import { Col, Row } from '@devhyunjae2/station-ui/grids/Row';
import { useStyle } from '@devhyunjae2/style-router';
// import 'antd/dist/antd.css';
// import { Layout } from 'antd';

function App() {
  const { color, updateColor, breakpoint } = useStyle();
  // const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout hasSider>
      <Sider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 63,
          }}
        >
          <h2>Terra Station</h2>
        </div>
        <div
          style={{
            height: 1,
            backgroundColor: '#f3f3f3',
            opacity: 0.1,
          }}
        />
        <div
          style={{
            padding: '40px 20px',
          }}
        >
          <MenuItem>Wallet</MenuItem>
          <MenuItem>History</MenuItem>
          <MenuItem>Validators</MenuItem>
          <MenuItem>Governance</MenuItem>
          <MenuItem>Contract</MenuItem>
          <MenuItem>Discover</MenuItem>
        </div>
      </Sider>
      <Layout inner>
        <Header fixed>
          <div style={{ padding: 20 }}>HEADER</div>
        </Header>
        <Content>
          <div style={{ padding: '36px 64px' }}>
            <PageHeader
              title="Wallet"
              extra={
                <Button variant="primary" size="small">
                  Sign TX
                </Button>
              }
            />
            <Row gap="10px">
              <Col flex={2} gap="20px">
                <Card style={{ height: 160 }}>card1</Card>
                <Card>card2</Card>
              </Col>
              <Col flex={1} gap="20px">
                <Card style={{ lineHeight: 10 }}>card3</Card>
                <Card style={{ lineHeight: 10 }}>
                  asdfsdafsf <br />
                  asdfsdafsf <br />
                  asdfsdafsf <br />
                  asdfsdafsf <br />
                  asdfsdafsf <br />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

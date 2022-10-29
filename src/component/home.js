import React, {useState, useEffect} from 'react';
import { Layout, List, Avatar, Tag, Button, Card, Dropdown, Menu, message, Tooltip, Input, Space, Badge, Typography } from 'antd';
import { PlusOutlined, SoundOutlined, DownloadOutlined, MenuOutlined, FilterOutlined, LockFilled } from '@ant-design/icons';
import HeaderComponent from './header';
import axios from 'axios';
const { Sider, Content } = Layout;
const { Title } = Typography;
function Home() {
  const [isAddEmail, setIsAddEmail] = useState(false);
  const [isAddPhone, setIsAddPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  // const validateMessages = {
  //   required: '${label} is required!',
  //   types: {
  //     email: '${label} is not a valid email!',
  //     number: '${label} is not a valid number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // };

  useEffect(() => {
    var config1 = {
        method: 'get',
        url: 'https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/customers?customer-id=07609871-c120-43ab-a917-8dac829e22bb',
        headers: { }
      };
      
    axios(config1)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    var config = {
        method: 'get',
        url: 'https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/feedback?customer-id=07609871-c120-43ab-a917-8dac829e22bb',
        headers: { }
      };
      
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const addEmail = () => {
    var config = {
      method: 'put',
      url: `https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/customers?customer-id=07609871-c120-43ab-a917-8dac829e22bb&email=${email}`,
      headers: { }
    };
      
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setIsAddEmail(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const addPhone = () => {
    var config = {
      method: 'put',
      url: `https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/customers?customer-id=07609871-c120-43ab-a917-8dac829e22bb&phone=${phone}`,
      headers: { }
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setIsAddPhone(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['1']}
      onClick={onClick}
      items={[
        {
          label: 'All feedbacks',
          key: '1',
        },
        {
          label: 'New feedbacks',
          key: '2',
        },
        {
          label: 'Resolved feedbacks',
          key: '3',
        },
      ]}
    />
  );
  const category = (
    <Menu
      selectable
      defaultSelectedKeys={['1']}
      onClick={onClick}
      items={[
        {
          label: 'All',
          key: '1',
        },
        {
          label: 'Critical',
          key: '2',
        },
        {
          label: 'Medium',
          key: '3',
        },
        {
          label: 'Low',
          key: '4',
        },
        {
          label: 'Ignorable',
          key: '5',
        },
      ]}
    />
  );
  const data = [{"gender":"female","name":{"title":"Ms","first":"Minttu","last":"Eskola"},"email":"minttu.eskola@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/25.jpg","medium":"https://randomuser.me/api/portraits/med/women/25.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/25.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"Ms","first":"Frida","last":"Rolón"},"email":"frida.rolon@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/21.jpg","medium":"https://randomuser.me/api/portraits/med/women/21.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/21.jpg"},"nat":"MX"},{"gender":"male","name":{"title":"Monsieur","first":"Gustav","last":"Brunet"},"email":"gustav.brunet@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/15.jpg","medium":"https://randomuser.me/api/portraits/med/men/15.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/15.jpg"},"nat":"CH"},{"gender":"female","name":{"title":"Ms","first":"Lourdes","last":"Morales"},"email":"lourdes.morales@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/49.jpg","medium":"https://randomuser.me/api/portraits/med/women/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/49.jpg"},"nat":"ES"},{"gender":"female","name":{"title":"Miss","first":"Denira","last":"Nunes"},"status": true,"email":"denira.nunes@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/20.jpg","medium":"https://randomuser.me/api/portraits/med/women/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/20.jpg"},"nat":"BR"},{"gender":"male","name":{"title":"Mr","first":"Wesley","last":"Fields"},"email":"wesley.fields@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/89.jpg","medium":"https://randomuser.me/api/portraits/med/men/89.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/89.jpg"},"nat":"AU"},{"gender":"female","name":{"title":"Ms","first":"Kimberly","last":"Shaw"},"email":"kimberly.shaw@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/12.jpg","medium":"https://randomuser.me/api/portraits/med/women/12.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/12.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"Mr","first":"Toby","last":"Singh"},"email":"toby.singh@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/16.jpg","medium":"https://randomuser.me/api/portraits/med/men/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/16.jpg"},"nat":"NZ"},{"gender":"male","name":{"title":"Mr","first":"Christian","last":"Kristensen"},"email":"christian.kristensen@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/30.jpg","medium":"https://randomuser.me/api/portraits/med/men/30.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/30.jpg"},"nat":"DK"},{"gender":"female","name":{"title":"Mrs","first":"Helene","last":"Sandmann"},"email":"helene.sandmann@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg","medium":"https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat":"DE"}]
  return (
      <Layout>
        <HeaderComponent />
        <Layout>
          <Sider>
            <div className="selectCategory">
              <Dropdown overlay={menu}>
                <Tooltip title="Feedbacks" color={'#475867'} overlayStyle={{fontSize:'12px'}}>
                  <a onClick={(e) => e.preventDefault()} className="feedbacks-filter">
                    <MenuOutlined />
                    &nbsp;
                    <Space>
                      All feedbacks <Badge count={'25'} style={{background:'#722ed1'}} />
                    </Space>
                  </a>
                </Tooltip>
              </Dropdown>
              <Dropdown overlay={category} placement="bottomRight">
                <Tooltip title="Filter Category" color={'#475867'} overlayStyle={{fontSize:'12px'}}>
                  <FilterOutlined style={{ fontSize: '24px'}} />
                </Tooltip>
              </Dropdown>
            </div>
            <div className="feedbacks">
              <List
                dataSource={data}
                renderItem={item => <>
                  {item.status ? <List.Item key={item.email} className='subscribe-list'>  <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} style={{marginLeft:'10px'}}/>}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    <div className="timer-tag">
                      <div className="time">10 hour ago</div>
                      <div><Tag color="magenta">Critical</Tag></div>
                    </div>
                  <div className="unlock-content">
                    <div className="center"><LockFilled/><Title level={4} style={{margin:0}}>&nbsp;Subscribe to unlock content&nbsp;</Title><LockFilled/></div>
                    <div style={{fontSize:'12px', color: 'rgba(0, 0, 0, 0.45)'}}>Please subscribe to unlock the content</div></div>
                  </List.Item> : <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} style={{marginLeft:'10px'}}/>}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    <div className="timer-tag">
                      <div className="time">10 hour ago</div>
                      <div><Tag color="magenta">Critical</Tag></div>
                    </div>
                  </List.Item>}
                  </>
                }
              />
            </div>
          </Sider>
          <Content>
              <div className="messageInfo">
                <div className="messageHeight">
                  <div className="contentMsg">
                    <div className="messageActions">
                      <div className="center"><SoundOutlined style={{ fontSize: '36px'}} /> &nbsp; <Button type="link" className="text-style">Click here to listen</Button></div>
                      <div className="center"><DownloadOutlined style={{ fontSize: '36px' }} /> &nbsp; <Button type="link" className="text-style">Download</Button></div>
                    </div>
                    <Title level={4}>Text Transcript:</Title>
                    <div className="feedbackMsg">
                      We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. 
                      Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using.

                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure), to help people create their product prototypes beautifully
                      and efficiently.
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <Button type="default" size={'medium'}>
                    <PlusOutlined /> Add Notes
                  </Button>
                  <Button type="primary" size={'medium'}>
                    Resolve
                  </Button>
                </div>
              </div>
              <div className="userInfo">
                <Card
                title="User Info"
                bordered={false}
                style={{
                  height: '100%',
                  borderRadius: 8
                }}
              >
                <List.Item style={{borderBottom: 'solid 1px rgba(9,30,66,.12)'}}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{'John Doe'}</a>}
                    description="Wed, Sep 23, 10:10 PM"
                  />
                </List.Item>
                <br/>
                <div className="row">
                  <span>Email</span> &nbsp;&nbsp;&nbsp;
                  {!isAddEmail && <Button type="link" onClick={() => setIsAddEmail(true)}>Add Email</Button>}
                  {isAddEmail && <Input.Group compact>
                    <Input style={{ width: 'calc(100% - 80px)' }} status="" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Button type="primary" onClick={addEmail}>Submit</Button>
                  </Input.Group>}
                </div> 
                <br/>
                <div className="row">
                  <span>Phone</span> &nbsp;
                  {!isAddPhone && <Button type="link" onClick={() => setIsAddPhone(true)}>Add Phone</Button>}
                  {isAddPhone && <Input.Group compact>
                    <Input style={{ width: 'calc(100% - 80px)' }} value={phone} placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)}/>
                    <Button type="primary" onClick={addPhone}>Submit</Button>
                  </Input.Group>}
                </div> 
              </Card>
              </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default Home;

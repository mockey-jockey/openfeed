import React, {useState, useEffect} from 'react';
import { Layout, List, Avatar, Tag, Button, Card, Dropdown, Menu, message, Tooltip, Input, Space, Badge, Typography, Modal } from 'antd';
import { PlusOutlined, SoundOutlined, DownloadOutlined, MenuOutlined, FilterOutlined, LockFilled, EditOutlined } from '@ant-design/icons';
import HeaderComponent from './header';
import axios from 'axios';
const { Sider, Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
function Home() {
  const [isAddEmail, setIsAddEmail] = useState(false);
  const [isAddPhone, setIsAddPhone] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

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

  const rank = {
    0: {
      type: 'Critical',
      color: 'magenta'
    }
  };
  const mockFeedbacks = [
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f61",
      "rank": "0",
      "isActive": false,
      "transcribed_text": "We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f62",
      "rank": "0",
      "isActive": false,
      "transcribed_text": "We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack"
    },
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f63",
      "rank": "0",
      "isActive": false,
      "transcribed_text": "We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will efficiently."
    },
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f64",
      "rank": "0",
      "isActive": false,
      "transcribed_text": "We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f65",
      "rank": "0",
      "isActive": true,
      "transcribed_text": "We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      "status": "NEW",
      "customer_id": "customer_1",
      "transcribe_source": "s3://reactant-source-recordings/customer_1/adaf7b99-6c3d-45fe-be16-b4b8d286a642.w",
      "id": "adaf7b99-6c3d-45fe-be16-b4b8d286a642.w-8de87c08-ac60-49b7-9be8-20de584d0f66",
      "rank": "0",
      "isActive": false,
      "transcribed_text": "Hi, everyone. This is Mohammed Sharma's feeling very good today.We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using. We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    }
  ];

  useEffect(() => {
    var config1 = {
        method: 'get',
        url: 'https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/customers?customer-id=07609871-c120-43ab-a917-8dac829e22bb',
        headers: { }
      };
      
    axios(config1)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setUserName(response.data?.customer_name);
      setEmail(response.data?.email);
      setPhone(response.data?.phone)
      var config = {
        method: 'get',
        url: 'https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/feedback?customer-id=customer_1',
        headers: { }
      };
      setFeedbacks(mockFeedbacks);
      setSelectedFeedback(mockFeedbacks[0]);
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePhone = (phone) => {
    return phone.match(/^\d{10}$/);
  };

  const handleEmail = (e) => {
    setIsValidEmail(validateEmail(e.target.value));
    setEmail(e.target.value);
  }

  const handlePhone = (e) => {
    setIsValidPhone(validatePhone(e.target.value));
    setPhone(e.target.value);
  }

  const showNotesModal = () => {
    setIsModalOpen(true);
  };

  const addNotes = () => {
    setIsModalOpen(false);
    var config = {
      method: 'put',
      url: `https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/feedback?customer-id=customer_1&notes=${notes}`,
      headers: { }
    };
      
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleResolve = () => {
    var config = {
      method: 'put',
      url: 'https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/feedback?customer-id=customer_1&status=RESOLVED',
      headers: { }
    };
      
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
                      All feedbacks <Badge count={feedbacks.length} style={{background:'#722ed1'}} />
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
                dataSource={feedbacks}
                renderItem={item => <>
                  {item.isActive ? <List.Item key={item.email} className='subscribe-list'>  <List.Item.Meta
                      // avatar={<Avatar style={{marginLeft:'10px'}} src="https://joeschmoe.io/api/v1/random" />}
                      avatar={<Avatar style={{marginLeft:'10px'}}>item.customer_id[0]</Avatar>}
                      title={<a href="#">{item.status}</a>}
                      description={item.customer_id}
                    />
                    <div className="timer-tag">
                      <div className="time">10 hour ago</div>
                      <div><Tag color={rank[item.rank]?.color}>{rank[item.rank]?.type}</Tag></div>
                    </div>
                  <div className="unlock-content">
                    <div className="center"><LockFilled/><Title level={4} style={{margin:0}}>&nbsp;Subscribe to unlock content&nbsp;</Title><LockFilled/></div>
                    <div style={{fontSize:'12px', color: 'rgba(0, 0, 0, 0.45)'}}>Please subscribe to unlock the content</div></div>
                  </List.Item> : <List.Item key={item.email} onClick={() => setSelectedFeedback(item)} className={selectedFeedback.id === item.id ? 'selected-feedback' : ''}>
                    <List.Item.Meta
                      // avatar={<Avatar style={{marginLeft:'10px'}} src="https://joeschmoe.io/api/v1/random" />}
                      avatar={<Avatar style={{marginLeft:'10px',fontWight:'bold'}}>{item.customer_id[0]?.toUpperCase()}</Avatar>}
                      title={<a href="#">{item.status}</a>}
                      description={item?.transcribed_text}
                      className="list-feedback"
                    />
                    <div className="timer-tag">
                      <div className="time">10 hour ago</div>
                      <div><Tag color={rank[item.rank]?.color}>{rank[item.rank]?.type}</Tag></div>
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
                      {selectedFeedback?.transcribed_text}
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <Button type="default" size={'medium'} onClick={showNotesModal}>
                    <PlusOutlined /> Add Notes
                  </Button>
                  <Button type="primary" size={'medium'} onClick={handleResolve}>
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
                    title={<a href="#">{userName}</a>}
                    description="Wed, Sep 23, 10:10 PM"
                  />
                </List.Item>
                <br/>
                <div className="row">
                  <span><b>Email</b></span> &nbsp;&nbsp;&nbsp;
                  {!isAddEmail && !email && <Button type="link" onClick={() => setIsAddEmail(true)}>Add Email</Button>}
                  {!isAddEmail && email &&  <><span>{email}</span> &nbsp; <EditOutlined style={{fontWight:'bold'}} onClick={() => setIsAddEmail(true)} /></>}
                  {isAddEmail && <Input.Group compact>
                    <Input style={{ width: 'calc(100% - 80px)' }} status={email && !isValidEmail && 'error'} value={email} placeholder="Enter Email" onChange={handleEmail}/>
                    <Button type="primary" disabled={email && !isValidEmail} onClick={addEmail}>Submit</Button>
                  </Input.Group>}
                </div> 
                <br/>
                <div className="row">
                  <span><b>Phone</b></span> &nbsp;
                  {!isAddPhone && !phone && <Button type="link" onClick={() => setIsAddPhone(true)}>Add Phone</Button>}
                  {!isAddPhone && phone && <><span>{phone}</span> &nbsp; <EditOutlined style={{fontWight:'bold'}} onClick={() => setIsAddPhone(true)} /></>}
                  {isAddPhone && <Input.Group compact>
                    <Input style={{ width: 'calc(100% - 80px)' }} status={phone && !isValidPhone && 'error'} value={phone} placeholder="Enter Phone" onChange={handlePhone}/>
                    <Button type="primary" disabled={phone && !isValidPhone} onClick={addPhone}>Submit</Button>
                  </Input.Group>}
                </div> 
              </Card>
              </div>
              <Modal title="Add Notes" open={isModalOpen} onOk={addNotes} onCancel={handleCancel}>
                <TextArea rows={4} placeholder="Enter notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
              </Modal>
          </Content>
        </Layout>
      </Layout>
  );
}

export default Home;

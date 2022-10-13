import React, {useState} from 'react';
import { Typography, Col, Row, Button, Rate, Divider, Checkbox, Input, PageHeader, Switch, Card  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import HeaderComponent from './header';
const { Title } = Typography;
const { TextArea } = Input;
function Settings() {
  const [initialValue, setInitialValue] = useState({
    isStarRequired: false,
    isTextRequired: false
  });
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    console.log(`name = ${e.target.name}`);
    setInitialValue({
      ...initialValue,
      isTextRequired: e.target.checked
    })
  };
  const onChange1 = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setInitialValue({
      ...initialValue,
      isStarRequired: checked
    })
  };
  
  return (
    <>
      <HeaderComponent />
      <div className="settings">
        <div className="customize">
          <PageHeader
            className="site-page-header"
            title="Feedback Customization"
            subTitle="To customize as your own"
          />
          <br/>
          <Row>
            <Col span={12} offset={1}>
              <Title level={4}>Star Ratings</Title>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={1}>
              <Rate disabled defaultValue={5} />
            </Col>
            <Col span={6} offset={6}>
              <Switch onChange={onChange1} name="star" checkedChildren="Remove" unCheckedChildren="Add" ></Switch>
            </Col>
          </Row>
          <Divider/>
          <Row>
            <Col span={12} offset={1}>
              <Title level={4}>Text Message</Title>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={1}>
              <TextArea disabled />
            </Col>
            <Col span={6} offset={6}>
              <Checkbox onChange={onChange} name="text">Add</Checkbox>
            </Col>
          </Row>
          <Divider/>
          <Row>
            <Col span={12} offset={1}>
              <Title level={4}>Voice Message</Title>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={1}>
              <AudioOutlined style={{fontSize: 32}}/>
            </Col>
          </Row>
          <Divider/>
          <Row>
            <Col span={12} offset={1}>
              <Button type="primary">Submit</Button>
            </Col>
          </Row>
        </div>
        <div className="customize-preview">
          <Card title="Preview" bordered={false}>
            {initialValue.isStarRequired && <><b>Rating our website:</b>
            <Rate defaultValue={0} style={{fontSize: 50, display: 'block'}}/>
            <br/> </>}
            {initialValue.isTextRequired && <>
              <b>Feedback:</b>
              <br/><br/>
              <TextArea />
              <br/><br/>
            </>}
            <b>Record your feedback and send it to us:</b>
            <br/><br/>
            <AudioOutlined style={{fontSize: 32}}/>
            <br/><br/><br/>
            <Button type="primary">Send</Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Settings;

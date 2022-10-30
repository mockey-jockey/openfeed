import React from 'react';
import { Layout, Tag, Dropdown, Menu, Typography } from 'antd';
import { LockFilled, SettingOutlined, AuditOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
const { Title } = Typography;
function HeaderComponent() {
    const navigate = useNavigate();
    const onClickSettings = ({key}) => {
        navigate('/'+key)
    }

    const handleHeaderClick = () => {
        navigate('/');
    }
    
    const settings = (
        <Menu
        selectable
        defaultSelectedKeys={['1']}
        onClick={onClickSettings}
        items={[
            {
                label: 'Feedback Settings',
                key: 'settings',
                icon: <AuditOutlined />
            }
        ]}
        />
    )
    return (
      <Layout>
        <Header>
          <Title level={3} style={{margin:0}} onClick={handleHeaderClick}>Header</Title>
          <div>
            <Tag color="gold"><LockFilled /> Unlock your potential with a Pro Membership</Tag>
            <Dropdown overlay={settings}>
              <SettingOutlined style={{fontSize:18}} />
            </Dropdown>
          </div>
        </Header>
      </Layout>
  );
}

export default HeaderComponent;

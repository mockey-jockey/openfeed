import React from 'react';
import { Layout, Input,Typography, Button, Result } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
const { Title } = Typography;
function Domain() {
    const [showResult, setShowResult] = React.useState(false);
    const onSearch = (value: string) => { setShowResult(true) };

    return (
        <Layout style={{background:'unset', height:'100vh'}}>
            <div className="getDomain" style={{height:'100%', display: 'flex',alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                {showResult ? <Result
                    status="success"
                    title="Looks Awesome!"
                    subTitle="Now add the below script to your homepage where you want the feedback to be collected"
                    extra={[
                        <code style={{ padding: '15px',fontSize: '18px',background: 'beige', marginBottom: '20px'}}>
                            {`<script src="https://rectantinc/script/uuidxxxxx" />`}
                        </code>,
                        <div>You can view your insights at</div>,
                        <code style={{ padding: '15px',fontSize: '18px',background: 'aliceblue', marginTop: '20px'}}>
                            {`https://rectantinc.com/test-company`}
                        </code>
                    ]}
                /> : <>
                        <Title level={4}>Enter Your Domain:</Title>
                        <Input
                            placeholder="Enter your domain"
                            enterButton="Get Domain"
                            size="large"
                            style={{width: '60%', height: '100px' }}
                        />
                        <br/>
                        <Button type="primary" onClick={onSearch}> <ThunderboltOutlined /> Generate Feedback Link</Button>
                    </>
                }
            </div>
        </Layout>
    );
}

export default Domain;

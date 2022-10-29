import React, {useState} from 'react';
import { Layout, Input,Typography, Button, Result } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title } = Typography;
function Domain() {
    const [showResult, setShowResult] = useState(false);
    const [uuId, setUuid] = useState('');
    const [domainName, setDomainName] = useState('');
    const onSearch = () => { 
        if(domainName) {
            var config = {
                method: 'post',
                url: `https://aun7i01xd6.execute-api.us-east-1.amazonaws.com/dev/customers?customer-name=${domainName}`,
                headers: { }
            };              
            
            axios(config).then(function (response) {
                console.log(JSON.stringify(response.data,response));
                setUuid(response?.data?.customer_id);
                setShowResult(true);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };

   

    return (
        <Layout style={{background:'unset', height:'100vh'}}>
            <div className="getDomain" style={{height:'100%', display: 'flex',alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                {showResult ? <Result
                    status="success"
                    title="Looks Awesome!"
                    subTitle="Now add the below script to your homepage where you want the feedback to be collected"
                    extra={[
                        <code style={{ padding: '15px',fontSize: '18px',background: 'beige', marginBottom: '20px'}}>
                            {`<script src="https://rectantinc/script/${uuId}"></script>`}
                        </code>,
                        <div>You can view your insights at</div>,
                        <code style={{ padding: '15px',fontSize: '18px',background: 'aliceblue', marginTop: '20px'}}>
                            {`https://rectantinc.com/${domainName}`}
                        </code>
                    ]}
                /> : <>
                        <Title level={4}>Enter Your Domain:</Title>
                        <Input
                            placeholder="Enter your domain"
                            enterbutton="Get Domain"
                            size="large"
                            onChange={(e) => setDomainName(e.target.value)}
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

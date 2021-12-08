import { Card,Form, Input,Modal } from 'antd';
import { HeartOutlined,HeartFilled, EditOutlined , DeleteFilled,MailOutlined,PhoneOutlined,GlobalOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import '../App.css'

const Profilebody = ({profile,deletionClick}) => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Hearticon,setHearticon]=useState(HeartOutlined);
    const [name,setName]=useState(profile.name);
    const [username,setUserName]=useState(profile.username);
    const [email,setEmail]=useState(profile.email);
    const [phone,setPhone]=useState(profile.phone);
    const [website,setWebsite]=useState(`http://${profile.website}`);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleClick = () => {
        if(Hearticon===HeartFilled){
          setHearticon(HeartOutlined);
        }
        else{
          setHearticon(HeartFilled);
        }
    }
    return (
        <>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form {...layout}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input id="name" defaultValue={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input id="email" defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <Input id="phone" defaultValue={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            </Form.Item>
            <Form.Item name="website" label="Website" rules={[{ required: true }]}>
              <Input id="website" defaultValue={website} onChange={(e)=>{setWebsite(e.target.value)}}/>
            </Form.Item>
            </Form>
        </Modal>
        <Card style={{ margin :15 }}
         cover={<img alt="example" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} />}
         actions={[
            <Hearticon key="setting" style={{fontSize:'20px',color:'red'}} onClick={handleClick}/>,
            <EditOutlined key="edit" style={{fontSize:'20px'}} onClick={showModal}/>,
            <DeleteFilled key="ellipsis" style={{fontSize:'20px'}} onClick={()=>deletionClick(profile.id)}/>,
        ]}>
            <h3>{name}</h3>
            <div className="row_details">
               <MailOutlined style={{fontSize:'18px'}}/>
               <p>{email}</p>
            </div>
            <div className="row_details">
               <PhoneOutlined style={{fontSize:'18px'}}/>
               <p>{phone}</p>
            </div>
            <div className="row_details">
               <GlobalOutlined style={{fontSize:'18px'}}/>
               <p>{website}</p>
            </div>
        </Card>
        </>
    )
}

export default Profilebody

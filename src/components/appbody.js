import React from 'react'
import Profilebody from './profilebody';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const Appbody = ({profiles,deletionClick}) => {
    const profilelist=profiles.map((account)=>{
        return(
            <Col xs={24} md={8} xl={6}>
                <Profilebody profile={account} key={account.name} deletionClick={deletionClick}/>
            </Col>
        )
    })
    return (
        <Row>
            {profilelist}
        </Row>
    )
}

export default Appbody

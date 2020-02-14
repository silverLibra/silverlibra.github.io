import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./css/custom.scss";
import 'bootstrap/dist/css/bootstrap.css';
import * as Fa from 'react-icons/fa';
import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Container,
    Collapse,
    Media,
    Row, Col
} from 'reactstrap';
import classnames from 'classnames';

function App() {
    useEffect(() => {
    }, []);
    const [activeTab, setActiveTab] = useState('sideProject');
    const [collapseInfo, setCollapseInfo] = useState({
        maskMap: {isOpen: true}
    });
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const collapseToggle = id => {
        let data = {...collapseInfo};
        data[id].isOpen = !data[id].isOpen;
        setCollapseInfo(data);
    };
    const showAngleIcon = isOpen => {
        return isOpen ? <Fa.FaAngleDown/> : <Fa.FaAngleUp/>;
    };
    return (<>
        <Container>
            <Row>
                <Col>
                    <h1 style={{color: 'skyblue'}}>Hung Yi Cheng</h1>
                    <div className="mt-4">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === 'sideProject'})}
                                    onClick={() => {
                                        toggle('sideProject');
                                    }}>
                                    Side Project
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="py-4">
                            <TabPane tabId="sideProject">
                                <ul>
                                    <li style={{cursor:"pointer"}} onClick={() => {
                                        collapseToggle("maskMap")
                                    }}>
                                        <b className="text-info">藥局口罩採購地圖</b> - <small>2020-02-13 - 詳情 </small>{showAngleIcon(collapseInfo.maskMap.isOpen)}
                                        <Collapse
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}
                                            isOpen={collapseInfo.maskMap.isOpen}
                                        >
                                            <Media>
                                                <Row xs={1} md={2}>
                                                    <Col>
                                                        <Media left href="https://silverlibra.github.io/mask_map" target="_blank"
                                                        >
                                                            <Media
                                                                style={{width: '100%'}}
                                                                object src="./static/img/sideProject_tiny_mask-Map.jpg"
                                                                alt="mask-Map image"/>
                                                        </Media>
                                                    </Col>
                                                    <Col>
                                                        <Media body>
                                                            <Media heading>
                                                                藥局口罩採購地圖 <small>(2020-02-13)</small>
                                                            </Media>

                                                            2020-02 開始，因應武漢肺炎，台灣口罩搶購。<br/>
                                                            此專案為顯示口罩存貨地圖的開源專案。<br/>
                                                            <a href="https://silverlibra.github.io/mask_map" target="_blank">使用網站</a> /
                                                            <a href="https://github.com/silverLibra/mask_map" target="_blank">GitHub</a><br/>
                                                        </Media>
                                                    </Col>
                                                </Row>
                                            </Media>
                                        </Collapse>
                                    </li>
                                </ul>
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
            </Row>
        </Container>
    </>)
}

ReactDOM.render(
    <>
        <App/>
    </>,
    document.getElementById('root')
);

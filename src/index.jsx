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
import {MaskMap} from "./conponent/maskMap.jsx";
import {FreeCell} from "./conponent/freecell.jsx";

function App() {
    const projectName =['maskMap','freecell'];
    const [activeTab, setActiveTab] = useState('sideProject');
    const [collapseInfo, setCollapseInfo] = useState({
        maskMap: {isOpen: true},
        freecell: {isOpen: false},
    });
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const collapseToggle = id => {
        let data = {...collapseInfo};
        if(data[id].isOpen === false) {
            projectName.forEach((data) => {
                collapseInfo[data].isOpen = false;
            });
            data[id].isOpen = true;
        }
        else {
            data[id].isOpen = false;
        }
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
                                  <MaskMap collapseToggle={collapseToggle}
                                           showAngleIcon={showAngleIcon}
                                           isOpen={collapseInfo.maskMap.isOpen}
                                  />
                                    <FreeCell collapseToggle={collapseToggle}
                                             showAngleIcon={showAngleIcon}
                                             isOpen={collapseInfo.freecell.isOpen}
                                    />
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

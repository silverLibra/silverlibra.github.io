import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./css/custom.scss";
import 'bootstrap/dist/css/bootstrap.css';
import {
    TabContent, Nav, NavItem, NavLink,
    Container,
    Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import SideProjectTab from "./conponent/sideProject/index.jsx";
import JavascriptInfoTab from "./conponent/javascriptInfo/index.jsx";
import {useInterval} from "./customHook/index.jsx";
import config from "./config.json";
function App() {
    const [activeTab, setActiveTab] = useState(config.activeTab.default);
    const [counter, setCounter] = useState(0);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    useInterval(() => {
            setCounter(counter + 1);
        },
        1000, false);
    return (<>
        <Container>
            <Row>
                <Col>
                    <h1 style={{color: 'skyblue'}}>Hung Yi Cheng</h1>
                    <div className="mt-4">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({active: activeTab === config.activeTab.sideProjectTab})}
                                    onClick={() => {
                                        toggle(config.activeTab.sideProjectTab);
                                    }}>
                                    Side Project
                                </NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({active: activeTab === config.activeTab.javascriptInfoTab})}
                                    onClick={() => {
                                        toggle(config.activeTab.javascriptInfoTab);
                                    }}>
                                    Javascript
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="py-4">
                            <SideProjectTab tabId={config.activeTab.sideProjectTab}/>
                            <JavascriptInfoTab tabId={config.activeTab.javascriptInfoTab}/>
                        </TabContent>
                    </div>
                </Col>
            </Row>
        </Container>
        <div style={{position:'fixed',bottom:0,right:0}}>{counter}</div>
    </>)
}

ReactDOM.render(
    <>
        <App/>
    </>,
    document.getElementById('root')
);

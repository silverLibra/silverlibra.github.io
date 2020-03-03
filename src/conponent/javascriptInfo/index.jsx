import React, {useState} from 'react';
import "../../css/custom.scss";
import 'bootstrap/dist/css/bootstrap.css';
import * as Fa from 'react-icons/fa';
import {
    TabPane
} from 'reactstrap';

import HighOrderFunction from "./highOrderFunction.jsx";

export default function JavascriptInfo(prop) {
    const [collapseOpenInfo, setCollapseOpenInfo] = useState("highOrderFunction");
    const collapseToggle = id => {
        if(collapseOpenInfo ===id){
            setCollapseOpenInfo(null);
        }
        else {
            setCollapseOpenInfo(id);
        }
    };
    const showAngleIcon = isOpen => {
        return isOpen ? <Fa.FaAngleDown/> : <Fa.FaAngleUp/>;
    };
    return (<TabPane tabId={prop.tabId}>
        <ul>
            <HighOrderFunction collapseToggle={collapseToggle}
                     showAngleIcon={showAngleIcon}
                     isOpen={collapseOpenInfo === "highOrderFunction"}
            />
        </ul>
    </TabPane>)
}

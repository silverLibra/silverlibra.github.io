import React, {useState} from 'react';
import "../../css/custom.scss";
import 'bootstrap/dist/css/bootstrap.css';
import * as Fa from 'react-icons/fa';
import {
    TabPane
} from 'reactstrap';

import {MaskMap} from "./maskMap.jsx";
import {FreeCell} from "./freecell.jsx";

export default function SideProjectTab(prop) {
    const [collapseOpenInfo, setCollapseOpenInfo] = useState("maskMap");
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
            <MaskMap collapseToggle={collapseToggle}
                     showAngleIcon={showAngleIcon}
                     isOpen={collapseOpenInfo === "maskMap"}
            />
            <FreeCell collapseToggle={collapseToggle}
                      showAngleIcon={showAngleIcon}
                      isOpen={collapseOpenInfo === "freecell"}
            />
        </ul>
    </TabPane>)
}

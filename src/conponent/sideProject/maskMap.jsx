import React from 'react';

import {
    Collapse,
    Media,
    Row, Col
} from 'reactstrap';

export function MaskMap(props) {
    return (<>
        <li style={{cursor: "pointer"}} onClick={() => {
            props.collapseToggle("maskMap")
        }}>
            <b className="text-info">藥局口罩採購地圖</b> - <small>2020-02-13 -
            詳情 </small>{props.showAngleIcon(props.isOpen)}
            <Collapse
                onClick={(e) => {
                    e.stopPropagation()
                }}
                isOpen={props.isOpen}
            >
                <Media style={{border:'1px solid #e0e0e0',marginBottom:'20px', padding:'10px'}}>
                    <Row xs={1} md={2}>
                        <Col>
                            <Media left href="https://silverlibra.github.io/mask_map/" target="_blank"
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
    </>)
}
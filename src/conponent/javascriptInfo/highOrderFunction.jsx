import React from 'react';

import {
    Collapse,
    Media,
    Row, Col
} from 'reactstrap';

export default function HighOrderFunction(props) {
    return (<>
        <li style={{cursor: "pointer"}} onClick={() => {
            props.collapseToggle("highOrderFunction")
        }}>
            <b className="text-info">High-order function and CallBack function 說明</b> - <small>2020-03-03 -
            詳情 </small>{props.showAngleIcon(props.isOpen)}
            <Collapse
                onClick={(e) => {
                    e.stopPropagation()
                }}
                isOpen={props.isOpen}
            >
                <div style={{border: '1px solid #e0e0e0', marginBottom: '20px', padding: '10px'}}>
                    <hr/>
                    <h3>Callback function</h3>
                    <hr/>
                    <p>From MDN: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function">Callback
                        function</a></p>
                    <pre style={{backgroundColor:'#e0e0e0', padding: '10px 50px',margin:'20px'}}>{`function greeting(name) {
    alert('Hello ' + name);
}
function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting);
`}</pre>
                    <p>Callback function 是指 "函式" 被當做 "參數" 傳遞給一個function，並在此function中 "調用執行的函式"。</p>
<p> 根據上面例子 greeting 函式，被當作參數傳遞給processUserInput 函式，並在processUserInput中被呼叫，被傳入的函示被叫做Callback function</p>
                    <hr/>
                    <h3>High-order function</h3>
                    <hr/>
                    <p>From Wiki: <a href="https://en.wikipedia.org/wiki/Higher-order_function">High-order function</a></p>
                    <p>High-order function 符合以下任一條件</p>
                    <ul>
                        <li>接收 "函式" 當作 "參數"</li>
                        <li>回傳 "函式" 當作結果</li>
                    </ul>
                    <pre style={{backgroundColor:'#e0e0e0', padding: '10px 50px',margin:'20px'}}>{`function greeting(name) {
    return ()=>{ console.log(name)};
}
let testGreeting = greeting("test");
testGreeting();
`}</pre>
                </div>
            </Collapse>
        </li>
    </>)
}
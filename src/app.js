console.log("App.js is running")

// JSX - JavaScript XML
var template = 
(
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var template2 =     
(
    <div>
        <h1>Michael Masterson</h1>
        <p>Age: 38</p>
        <p>Location: Cary, NC</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
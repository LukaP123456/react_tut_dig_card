import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import DigCard from "./DigCard";

// ReactDOM.render(<App/>,document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <DigCard/>
    </React.StrictMode>
)



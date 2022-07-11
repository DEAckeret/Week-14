import React from "react";

export default class Review extends React.Component {
    render() {

        return (
        <div>
            <input type={"text"} name = "text" placeholder = "Review this Movie!" id = "inputText"></input>
            <button className = "bg-primary" type="submit">Submit</button>

            <p></p>
        </div>
        );
    }
}
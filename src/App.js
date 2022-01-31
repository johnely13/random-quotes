import React from "react";
import Quotes from "./Quotes";
import './App.css'
import axios from 'axios'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: []
        }
    }

    componentDidMount() {
        axios.get(`https://type.fit/api/quotes`)
        .then((response) => {
            this.setState({
                quotes: response.data
            })
        })
    }

    render() {
        return(
            <>
                <Quotes quotes={ this.state.quotes } />
            </>
        )
    }
}
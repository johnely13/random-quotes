import React from 'react'

export default class Quotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quotes: this.props.quotes,
            index: Math.floor(Math.random() * this.props.quotes.length)
        }
        this.randomIndex = this.randomIndex.bind(this)
    }

    randomIndex() {
        const randomizeNumber = Math.floor(Math.random() * this.props.quotes.length)
        this.setState({
            index: randomizeNumber
        })
    }

    render() {
        const { quotes } = this.props
        return(
            <div className="container">
                <div className="inner">
                    { quotes.map((state, index) => (
                        <div key = {index}>
                            { this.state.index === index ? <div key={index}>
                                <div id="verse-box"> " { state.text } </div>
                                <div id="source-box"> - { (state.author == '' || state.author == undefined ? 'Anonymous' : state.author) } </div>
                            </div> : ''}
                        </div>
                    ))}

                    <div className="button-box">
                        <button onClick={ this.randomIndex }>New Quote</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
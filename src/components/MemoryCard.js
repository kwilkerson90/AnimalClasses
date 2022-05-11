import React from "react";
import './MemoryCardBack.css';

class MemoryCardBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
        
    }
    clickHandler() {
        this.setState({
                isFlipped: !this.state.isFlipped
        });
        console.log("got it");
    }
    render() {
        const memoryCardInnerClass = this.state.isFlipped ? 'flippedMemoryCardInnerClass' : 'memoryCardInnerClass';

        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }

}

export default MemoryCardBack;
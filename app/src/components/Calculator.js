import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            header: "Calc Code!",
            display: "0",
            operator: "",
            tempNum: 0,
            resetDisplay: false
        }
    }

    updateHeader(e) {
        let value = e.target.value;

        this.setState({
            header: value,
        })
    }

   onPressClear() {
        this.setState({
            display: "0",
            operator: null,
            tempNum: 0,
            resetDisplay: false
        })
    }

    onPressNum(num) {
        var disp = this.state.display === "0" ? this.state.display = num : this.state.display + num
        this.setState({
            display: this.state.display.length < 13 ? disp : this.state.display
        })
    }

    setOperator (opr){
        if ( !this.state.operator ){
            this.setState({
                display: "0",
                operator: opr,
                tempNum: parseInt(this.state.display, 10)
            })
        }
    }

    calculate (){
        if (this.state.operator === "") { 
            return;
        }
        var result;

        switch (this.state.operator) {
            case "+":
                result = this.state.tempNum + parseInt(this.state.display, 10)
                break;
            case "-":
                result = this.state.tempNum - parseInt(this.state.display, 10)
                break;
            case "*":
                result = this.state.tempNum * parseInt(this.state.display, 10)
                break;
            case "/":
                result = this.state.tempNum / parseInt(this.state.display, 10)
                break;
            default:
                break;
        }
            this.setState({ 
                display : Math.trunc(result) 
            });
    }

 

    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={ (e) => this.updateHeader(e) }/>
                <h1 id="header"> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">
                            { this.state.display }
                        </span>
                    </div>

                    <div className="btn clear" onClick={ (e) => this.onPressClear() }></div>

                    <div className="btn zero" onClick={ (e) => this.onPressNum("0") }></div>
                    <div className="btn one" onClick={ (e) => this.onPressNum("1") }></div>
                    <div className="btn two" onClick={ (e) => this.onPressNum("2") }></div>
                    <div className="btn three" onClick={ (e) => this.onPressNum("3") }></div>
                    <div className="btn four" onClick={ (e) => this.onPressNum("4") }></div>
                    <div className="btn five" onClick={ (e) => this.onPressNum("5") }></div>
                    <div className="btn six" onClick={ (e) => this.onPressNum("6") }></div>
                    <div className="btn seven" onClick={ (e) => this.onPressNum("7") }></div>
                    <div className="btn eight" onClick={ (e) => this.onPressNum("8") }></div>
                    <div className="btn nine" onClick={ (e) => this.onPressNum("9") }></div>

                    <div className="btn equal" onClick={ (e) => this.calculate() }></div>
                    <div className="btn multiply" onClick={ (e) => this.setOperator("*") }></div>
                    <div className="btn divide" onClick={ (e) => this.setOperator("/") }></div>
                    <div className="btn subtract" onClick={ (e) => this.setOperator("-") }></div>
                    <div className="btn add" onClick={ (e) => this.setOperator("+") }></div>
                </div>
            </div>
        )
    }
}

export default Calculator
import React from 'react';

class Main extends React.Component{
    render(){
        return (
        <div>
            <h1>General knowledge on INDIA!</h1>
            <h2>Question 1:What is the Capital Of India?</h2>
            <h2>Answer 1: {this.props.city}</h2>
            <h2>Question 2:What is the National Animal Of India?</h2>
            <h2>Answer 2: {this.props.animal}</h2>
            <h2>Question 3:What is the National Game Of India?</h2>
            <h2>Answer 3: {this.props.game}</h2>
            <h2>Question 4:What is the National Bird Of India?</h2>
            <h2>Answer 4: {this.props.bird}</h2>
            <h2>Question 5:What is the National Flower Of India?</h2>
            <h2>Answer 5: {this.props.flower}</h2>

        </div>)
    }
}
export default Main;
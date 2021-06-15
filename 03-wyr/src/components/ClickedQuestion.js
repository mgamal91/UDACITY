import React, { Component } from 'react';
import {connect} from 'react-redux';
import PollAnswered from './PollAnswered'
import PollNotAns from './PollNotAns'
import {Redirect} from 'react-router-dom'

export class ClickedQuestion extends Component {
    render() {
        const {question, checkAnswered,questionAuthor, user, id, authedUser}=this.props;
        if(!question)
        {
            return <Redirect to='/P404'></Redirect>
        }
        return (
            <div className="ui raised padded text container segment">
                
                {checkAnswered?<PollAnswered question={question} questionAuthor={questionAuthor} user={user}/>:<PollNotAns question={question} questionAuthor={questionAuthor} authedUser={authedUser} id={id}/>}
            </div>
        )
    }
}
const mapStateToProps=(state, ownProps)=>
{
    const id = ownProps.match.params.question_id;
    const {questions, users, authedUser}=state;
    const question=questions[id];
    const questionAuthor=question?users[question.author]:null;
    const user=users[authedUser];
    const checkAnswered=(user.answers[id])?true:false;
    return { question:question, checkAnswered,questionAuthor:questionAuthor, user, id, authedUser}
}
export default connect(mapStateToProps)(ClickedQuestion)

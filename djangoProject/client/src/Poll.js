import React from 'react'
import {getQuestionList} from './actions/actions'
import {connect} from 'react-redux'

export class Poll extends React.Component {
  componentWillMount() {
   return this.props.dispatch(getQuestionList())
  }

  render(){
   let questions;
   if(this.props.questionList){
       questions = this.props.questionList.map( q => {
       return q
     }) 
   } 
    return(
      <div className='poll'>
        {questions}
      </div>  
    )
  }
}

const mapStateToProps = state => ({
  questionList: state.questionList
});

export default connect(mapStateToProps)(Poll);
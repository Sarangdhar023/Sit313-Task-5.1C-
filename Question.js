import React from 'react';
import './Question.css'; 

const QuestionSection = () => {
  return (
    <div className="layout-question">
      
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <a className='color'> For posting a question, the following section would be displayed.</a>
      </p>

      <label className='heading'>Title</label>
      <input className ='Question1'type="text" placeholder="start your question with how, what, why, etc." />

      <label className='heading'>Describe your problem:</label>
      <textarea  className ='Question2' placeholder="Describe your problem..." />

      <label className='heading'>Tags</label>
      <input className ='Question3' type="text" placeholder="please add up to three tags to describe what your question is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default QuestionSection;

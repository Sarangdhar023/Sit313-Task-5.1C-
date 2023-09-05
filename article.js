import React from 'react';
import './Article.css'; 

const ArticleSection = () => {
  return (
    <div className="Design1">
      
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <a className='color'> For posting an article, the following section would be displayed.</a>
      </p>

      <label className='Art1'>Title</label>
      <input className= 'Art2'type="text" placeholder="start your question with how, what, why, etc." />

      <label> <b>Abstract</b></label>
      <textarea placeholder='Enter a 1- paragraph Abstract'/>

      <label className='Art1'>Describe your problem:</label>
      <textarea placeholder="Describe your problem..." />

      <label className='Art1'>Tags</label>
      <input className= 'AF2' type="text" placeholder="please add up to three tags to describe what your question is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default ArticleSection;


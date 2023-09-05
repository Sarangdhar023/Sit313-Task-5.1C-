import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostSelection from './PostChooser';
import QuestionSection from './Question';
import ArticleSection from './article';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
       <SearchBar />
       <PostSelection onSelect={handlePostTypeChange}/>
       {selectedPostType === 'question' ? <QuestionSection /> : null}
      {selectedPostType === 'article' ? <ArticleSection /> : null}
     
    </div>
  );
}

export default App;

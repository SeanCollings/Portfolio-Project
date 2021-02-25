import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// **********************
// Testing code snippets
// **********************

// const App = () => <div>Hi there!</div>;
// import 'tiny-test-pkg';
// import 'bulma/css/bulma.css';

/*
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<h1>Hi</h1>, document.querySelector('#root'));
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello there</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
*/

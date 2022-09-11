import Main from 'routes/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from 'routes/gnb';

const App = () => {
  return (
    <div className='App'>
      <GNB />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<div>Page Not Found 잘생겼다 완석님</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   // state = {
//   //   posts: [],
//   // };

//   async componentDidMount() {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/');
//       const posts = await res.json();
//       this.setState({
//         // posts,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     return (
//       <div>
//         Hello TS
//         {/* {this.state.posts.map((item) => (
// 					<div key={item.id}>
// 						<h1>{item.title}</h1>
// 						<span>{item.content}</span>
// 					</div>
// 				))} */}
//       </div>
//     );
//   }
// }

// export default App;

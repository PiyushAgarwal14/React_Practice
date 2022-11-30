import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p className="navbar"> 
        <li className="nav">Home</li>
        <li className="nav">About</li>
        <li className="nav">Contact</li>
        </p>
      </header>

        <div className="container">
        <div className="card">
            <div className="card-img">
            <img className="img" src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg" width="300px;"/>
            </div>
            <div className="card-body">
            <p className="cb">This is a wallpaper</p>
            </div>
        </div>

         <div className="card">
            <div className="card-img">
            <img className="img" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width="300px;"/>
            </div>
            <div className="card-body">
            <p className="cb">This is a wallpaper</p>
            </div>
        </div>

        <div className="card">
            <div className="card-img">
            <img className="img" src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" width="300px;"/>
            </div>
            <div className="card-body">
            <p className="cb">This is a wallpaper</p>
            </div>
        </div>

        </div>
        <footer className="footer">
           Design By:&nbsp; &#169; &nbsp; Piyush Agarwal
        </footer>
    </div>
  );
}

export default App;

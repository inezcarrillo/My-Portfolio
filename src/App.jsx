import { Outlet } from "react";
import './App.css';

function App() {
    return (
      <div className="App">
        <Outlet />
        <header>
          <h1>Inez's Portfolio</h1>
        </header>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>This is where you can introduce yourself.</p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of project 1.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of project 2.</p>
            </div>
            {/* Add more project items as needed */}
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Inez's Portfolio</p>
        </footer>
      </div>
    );
  }
  
  export default App;
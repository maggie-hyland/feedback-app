 // * npm run dev *   (to run the development server)**************

//you no longer have to import react on all components, only on the index.js file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//to use the browser router, we need to wrap everything in <Router></Router>
//see "return" below
import Post from "./components/Post";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

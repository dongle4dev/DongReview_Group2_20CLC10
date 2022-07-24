import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
//Page Review
import ReviewPage from "../ReviewPage/ReviewPage";

function App() {
  return (
    <Router>
      <Fragment>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/introfilm" element={<Introfilm />}></Route>
            <Route exact path="/reviewpage" element={<ReviewPage />}></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Page Homepage
import HomePage from "../HomePage/HomePage";
//Page Introfilm
import Introfilm from "../Introfilm/Introfilm";
//Page Review
import ReviewPage from "../ReviewPage/ReviewPage";
//Member Profile
import MemberPage from "../ProfilePage/MemberPage";
import AdminPage from "../ProfilePage/AdminPage";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AddFilm from "../AddFilm/AddFilm";
import Page404 from "../ErrorPages/Page404";
import Page502 from "../ErrorPages/Page502";
import AddReview from "../AddReview/AddReview";
import FindPage from "../FindPage/FindPage";
import EditFilm from "../EditFilm/EditFilm";
import LstFilm from "../LstFilm/LstFilm";

function App() {
  return (
    <Router>
      <Fragment>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>

            <Route exact path="/film/:id" element={<Introfilm />}></Route>
            <Route exact path="/introfilm" element={<Introfilm />}></Route>
            <Route exact path="/:title/:reviewid" element={<ReviewPage />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/admin" element={<AdminPage />}></Route>
            <Route exact path="/member" element={<MemberPage />}></Route>
            <Route exact path="/api"></Route>
            
            <Route
              exact
              path="/:filmid/:reviewid"
              element={<ReviewPage />}
            ></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/forgetpass" element={<SignUp />}></Route>
            <Route exact path="/admin" element={<AdminPage />}></Route>
            <Route exact path="/member" element={<MemberPage />}></Route>
            <Route exact path="/page404" element={<Page404 />}></Route>
            <Route exact path="/page502" element={<Page502 />}></Route>
            <Route
              exact
              path="/:title/writereview"
              element={<AddReview />}
            ></Route>
            <Route
              exact
              path="/found-films/:title"
              element={<FindPage />}
            ></Route>
            <Route exact path="/admin/list-film" element={<LstFilm />}></Route>
            <Route exact path="/admin/approve" element={<LstFilm />}></Route>
            <Route exact path="/:id/update" element={<EditFilm />}></Route>
            <Route exact path="/admin/addfilm" element={<AddFilm />}></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

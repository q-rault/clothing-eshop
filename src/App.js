import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/" element={<ShopPage />} />
            <Route path="/signin/" element={<SignInAndSignUpPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p className="error404">Error 404 not found</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

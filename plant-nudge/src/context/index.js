import React from "react";

import { withRouter } from "react-router-dom";

import AUTH_SERVICE from "../services/AuthService";

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      formSignup: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        // avatar: "",
      },
      formLogin: {
        username: "",
        password: "",
      },
      currentUser: "",
      errorMessage: "",
      successMessage: "",
      isLoggedIn:
        this.currentUser === ""
          ? false
          : this.currentUser === undefined
          ? false
          : true,
    };
  }

  syncUser = (user) => {
    this.setState({ currentUser: user });
    return "done";
  };

  isUserLoggedIn = async () => {
    console.log("here !~!");
    const userFound = await AUTH_SERVICE.getUser();
    console.log(userFound);
    if (userFound.data.user) {
      this.setState((prevState) => ({
        ...prevState,
        currentUser: userFound?.data?.user,
        isLoggedIn: true,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        isLoggedIn: false,
      }));
    }
  };

  handleSignupInput = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState((prevState) => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value,
      },
    }));
  };

  handleSignupSubmit = (e) => {
    AUTH_SERVICE.signup(this.state.formSignup)
      .then((responseFromServer) => {
        const {
          data: { user, errorMessage, successMessage },
        } = responseFromServer;
        console.log(user);
        if (errorMessage) {
          this.setState((prevState) => ({
            ...prevState,
            formSignup: {
              username: "",
              email: "",
              password: "",
              phoneNumber: "",
              // avatar: "",
            },
            errorMessage,
          }));
        } else {
          this.setState((prevState) => ({
            ...prevState,
            formSignup: {
              username: "",
              email: "",
              password: "",
              phoneNumber: "",
              // avatar: "",
            },
            errorMessage: "",
            successMessage,
            currentUser: user,
            isLoggedIn: true,
          }));
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            message: err.response.data.message,
          }));
        }
      });
  };

  handleLoginInput = (e) => {
    const {
      target: { name, value },
    } = e;

    this.setState((prevState) => ({
      ...prevState,
      formLogin: {
        ...prevState.formLogin,
        [name]: value,
      },
    }));
  };

  //issue happening between lines 131 & 170

  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("HELLO", this.state.formLogin);
    AUTH_SERVICE.login(this.state.formLogin)
      .then((responseFromServer) => {
        console.log(responseFromServer);
        const {
          data: { user, errorMessage },
        } = responseFromServer;
        if (errorMessage) {
          console.log(errorMessage);
          this.setState((prevState) => ({
            ...prevState,
            formLogin: {
              username: prevState.formLogin.username,
              password: "",
            },
            errorMessage,
          }));
        } else {
          this.setState((prevState) => ({
            ...prevState,
            formLogin: {
              username: "",
              password: "",
            },
            errorMessage: "",
            currentUser: user,
            isLoggedIn: true,
          }));
          console.log(this.state.isLoggedIn);
          this.isUserLoggedIn();
          this.props.history.push("/app");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            message: err.response.data.message,
          }));
        }
      });
  };

  handleLogout = async () => {
    await AUTH_SERVICE.logout().then(() => {
      this.setState((prevState) => ({
        ...prevState,
        successMessage: "",
        currentUser: "",
        isLoggedIn: false,
      }));
      this.props.history.push("/");
      console.log("MEEEEEEMIIIII N DAAAHHHHDDEEEEE");
    });
  };

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      isUserLoggedIn,
      syncUser,
      handleLogout,
    } = this;
    return (
      <>
        <AuthContext.Provider
          value={{
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            isUserLoggedIn,
            syncUser,
            handleLogout,
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withRouter(AuthProvider);

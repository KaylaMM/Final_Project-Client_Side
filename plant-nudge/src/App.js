import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
// import AllUserPlants from "./components/AllUserPlants/AllUserPlants";
// import Calendar from "./components/Calendar/Calendar";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
// import NavBar from "./components/NavBar/NavBar";
// import NewPlant from "./components/NewPlant/NewPlant";
// import ProgressAlbum from "./components/ProgressAlbum/ProgressAlbum";
import SignUp from "./components/SignUp/SignUp";
// import UploadedPic from "./components/UploadedPic/UploadedPic";
// import UserProfile from "./components/UserProfile/UserProfile";
// import { AuthContext } from "./context";

// import { AuthContext } from "./context/index";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-profile" />

        {/* render={(props) => (<UserProfile
          {...props}
          userPlants={this.state.userPlants}
          allUserPlantsFromDB={this.state.allProgressPhotosFromDB}
          progressPhotos={this.state.progressPhotos}
          allProgressPhotosFromDB={this.progress.allProgressPhotosFromDB}
              /> */}
        {/* )} component={UserProfile}  */}
        <Route exacr path="/progress-album" />
        {/* component={ProgressAlbum} */}
      </Switch>
    </div>
  );
}
export default App;
// state = {
//   //newPlant: [],
//   userPlants: [],
//   allUserPlantsFromDB: [],
//   progressPhotos: [],
//   allProgressPhotosFromDB: [],
// };

// //When the componen mounts it calls the getUserPlants function to retroeve all the plants
// componentDidMount() {
//   this.updateState();
// }

// //Update hte state once the component loads
// updateState = () => {
//   this.getUserPlants();
//   this.getProgressPhotos();
// };

// //API for phone number here? or GIF?

// //Get all user photos form the DB
// getUserPlants = () => {
//   axios
//     .get("http://localhost:3001/userPlants/allPlants", {
//       withCredentials: true,
//     })
//     .then((userPlants) => {
//       this.setState({
//         allUserPlantsFromDB: userPlants.data,
//       });
//     })
//     .catch((err) => console.log("Error while getting the plants: ", err));
// };

// //Text from the API or call to creat GIF here

// //Add a new plant
// addNewPlant = (userPlants) => {
//   console.log("New Plant: ", userPlants);

//   axios
//     .post("http://localhost3001/userPlants/newPlant", userPlants, {
//       withCredentials: true,
//     })
//     .then((userPlants) => {
//       console.log("New Plant: ", userPlants.data);
//       this.props.history.push("/new-recipebook");
//     })
//     .catch((err) => console.log("Error while adding a new plant: ", err));
// };

// //Get all progress photos for each plant the user clicks on
// getProgressPhotos = (plantID) => {
//   axios
//     .get(`http://localhost:3001/progressPhotos/allPhotos/${plantID}`)
//     .then(async (response) => {
//       await this.setState({
//         currentRecipeBook: response.data,
//       });
//       return true;
//     })
//     .catch((err) =>
//       console.log("Error while getting plant's Progress Album: ", err)
//     );
// };
//-=-=-=-=-=-=-=-=-=-=-=ABOVE IS FINE
//REFACTOR=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // Get all the recipe books from DB
// getRecipeBooks = () => {
//   axios
//     .get("http://localhost:3001/recipe-books", { withCredentials: true })
//     .then((allRecipeBooks) => {
//       this.setState({
//         recipeBooks: allRecipeBooks.data,
//       });
//     })
//     .catch((err) =>
//       console.log("Error while getting all recipe books from DB: ", err)
//     );
// };

// // Delete a recipe book
// deleteRecipeBook = (recipeBookID) => {
//   const result = window.confirm(
//     "Click OK to permanently delete this recipe book."
//   );
//   if (result) {
//     axios
//       .post(`http://localhost:3001/recipe-books/${recipeBookID}/delete`)
//       .then(() => {
//         let updatedRecipeBooks = this.state.recipeBooks.filter(
//           (recipeBook) => recipeBook._id !== recipeBookID
//         );
//         this.setState({
//           recipeBooks: updatedRecipeBooks,
//         });
//       })
//       .catch((err) => console.log("Error while deleting recipe book: ", err));
//   }
// };

// // Update a recipe to be a favorite
// addFavorite = (recipeID) => {
//   axios
//     .post(`http://localhost:3001/recipe/${recipeID}/update`, {
//       withCredentials: true,
//     })
//     .then((updatedRecipe) => {
//       console.log("Updated favorite for recipe: ", updatedRecipe);
//     })
//     .catch((err) =>
//       console.log("Error while updating the recipe to a favorite: ", err)
//     );
// };

// // Get all favorite recipes from DB
// getFavorites = () => {
//   axios
//     .get("http://localhost:3001/favorite-recipes", { withCredentials: true })
//     .then((favoriteRecipes) => {
//       this.setState({
//         favorites: favoriteRecipes.data,
//       });
//     })
//     .catch((err) =>
//       console.log("Error while getting the favorite recipes: ", err)
//     );
// };

// // Get a random joke from the API
// getRandomFoodTrivia = () => {
//   axios
//     .post("http://localhost:3001/random-trivia", { withCredentials: true })
//     .then((randomTrivia) => {
//       this.setState({
//         trivia: randomTrivia.data,
//       });
//     })
//     .catch((err) => console.log("Error while getting the recipes: ", err));
// };

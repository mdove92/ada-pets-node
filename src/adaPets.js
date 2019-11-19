// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios
    .get(BASE_URL)
    .then(response => {
      return setResult(response.data);
        })
    .catch(error => {
      return setError("Invalid Input");
    });
    
};


const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }


    axios.get(BASE_URL+selectedPet)
  .then((response) => {
    return setResult(response.data);
  })
  
  
    .catch((error) => {
      return setError("Failed, details required" + error);
  });

}


  // Fill out as part of Wave 2.


const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
    }
  
  axios.delete(BASE_URL+selectedPet)
  .then((response) => {
    return setResult("Success");
  })
    .catch((error) => {
      return setError(`/remove/${selectedPet} /failed/${selectedPet}`);
  });
  // Fill out as part of Wave 3.
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  if (!petInfo) {
    setError("You tried to create a pet with nothing!");
    return;
  }
  
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    return setResult(petInfo);
  })
    .catch((error) => {
      return setError(`/add/ /failed/`);
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}

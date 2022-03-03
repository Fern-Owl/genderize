const genderDisplay = document.getElementById('gender');
const getGenderButton = document.getElementById('btn-get');
const inputField = document.querySelector('.input-add');
const serverUrl = 'https://api.genderize.io';

let firstName;
let url;

getGenderButton.addEventListener('click', async () => {
  firstName = inputField.value;
  url = `${serverUrl}?name=${firstName}`;

  let genderResponse = await fetch(url);
  console.log(genderResponse);

  let genderFromName = await genderResponse.json();

  genderDisplay.innerText = `${
    firstName[0].toUpperCase() + firstName.slice(1)
  } - ${genderFromName.gender}`;
});

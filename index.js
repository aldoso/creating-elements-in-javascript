const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: [
      "wet food", "dry food", "<strong>any</strong> food"
    ],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  }, {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  }, {
    name: "Meowsalot",
    species: "Cat",
    favFoods: [
      "tuna", "catnip", "celery"
    ],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear
  if (calculatedAge == 1) {
    return '1 year old'
  } else if (calculatedAge == 0) {
    return 'baby'
  } else {
    return `${calculatedAge} years old`
  }
}

// function foods(favFoodzz) {
//   return `
// <h4>Favorite Foods</h4>
// <ul class="foods-list">
//   ${favFoodzz.map(function(food) {
//     return `<li>${food}</li>`}).join("")
//   }
// </ul>
// `
// }

// or the ES6 way
function foods(the_foods) {
  return `
<h4>Favorite Foods</h4>
<ul class="foods-list">
${the_foods.map(food => `<li>${food}</li>`).join("")}
</ul>
`;
}

function petTemplate(pet) {
  return `
<div class="animal">
  <img class="pet-photo" src="${pet.photo}">
  <h2 class="pet-name">${pet.name} <span class="species">/ ${pet.species}</span></h2>
<p>Age: <strong>${age(pet.birthYear)}</strong> </p>
${pet.favFoods
    ? foods(pet.favFoods)
    : ""}
</div>
`
}

document.querySelector('#app').innerHTML = `<h3>We have ${petsData.length} pets:</h3>
  ${petsData.map(petTemplate).join(' ')}
`

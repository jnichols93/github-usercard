/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get('https://api.github.com/users/jnichols93')
  .then (i => {
    const card = cardMaker(i.data);
    const cards = document.querySelector('.cards');
    cards.appendChild(card);
    return cards;
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/NicholasTruson',
  'https://api.github.com/users/rleslie1015',
  'https://api.github.com/users/brandonharris177',
  'https://api.github.com/users/DanielWallen87',
  'https://api.github.com/users/juarezfrench',
  'https://api.github.com/users/mchrupcala',
  'https://api.github.com/users/Krishan-Nattar',
  'thttps://api.github.com/users/etondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'bhttps://api.github.com/users/igknell',
];
  followersArray.forEach(handle =>{
    axios.get(`${handle}`)
    .then(data =>{
      const card = cardMaker(data.data);
      const cards = document.querySelector(`.cards`);
      cards.appendChild(card);
      return cards;
    });
    });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardMaker(i){
  ///components
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileAlink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const expand = document.createElement('span');
  ///class assignments
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  expand.classList.add('button');
  //event Listener
  expand.addEventListener('click', (e)=>{
    card.classList.toggle('card-open');
  })
// set content
  name.textContent = i.name;
  image.src = i.avatar_url;
  userName.textContent = i.login;
  location.textContent = `Location:${i.location}`;
  profile.textContent = `Profile`;
  profileAlink.href = i.html_url;
  profileAlink.textContent = i.url;
  followers.textContent = `Followers: ${i.followers}`;
  following.textContent = `following: ${i.following}`;
  bio.textContent = `Bio ${i.bio}`;
  expand.textContent = 'show me the money';
  //appending
  card.append(image);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  card.append(expand);
  cardInfo.append(location);
  cardInfo.append(profile);
  profile.append(location);
  profile.append(profileAlink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  
console.log(card);
return card;
}
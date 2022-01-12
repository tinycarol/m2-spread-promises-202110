const ironhackersWrapper = document.querySelector("#ironhackers .cards");
const cats = ["😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀"];

const generateRandomCatEmoji = () => {
  return cats[Math.floor(Math.random() * cats.length)];
};

const defaultAvatar =
  "https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2018/03/Ten-Missing-Cats-Who-Are-Not-Missing-at-All-600x600-1-1-1-1.jpg?resize=600%2C600";

const drawIronhacker = (
  {
    name = "Unknown",
    id,
    age = "unknown",
    bio = "I don't have a bio, I don't exist :c",
    avatar = defaultAvatar,
  } /** student */
) => {
  /**
   * {
    name = "Unknown",
    id,
    age = "unknown",
    bio = "I don't have a bio, I don't exist :c",
    avatar = defaultAvatar,
  }
   */
  const randomCat = generateRandomCatEmoji();

  const nameElement = document.createElement("h2");
  nameElement.innerText = `${randomCat} ${name} ${randomCat}`;

  const ageElement = document.createElement("p");
  ageElement.innerText = `${age} years old`;

  const bioElement = document.createElement("p");
  bioElement.innerText = `About me: ${bio}`;

  const avatarElement = document.createElement("img");
  avatarElement.src = avatar;
  avatarElement.alt = `${name}'s avatar`;

  const card = document.createElement("div");
  card.id = `ironhacker-${id}`;
  card.className = "card";

  card.appendChild(avatarElement);
  card.appendChild(nameElement);
  card.appendChild(ageElement);
  card.appendChild(bioElement);

  ironhackersWrapper.appendChild(card);
};

for (const ironhacker of ironhackers) {
  drawIronhacker(ironhacker);
}


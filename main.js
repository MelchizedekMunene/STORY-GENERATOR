const customName = document.getElementById("customname");
const randomise = document.querySelector(".randomise");
const story = document.querySelector(".story");

function randomValuefromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "DisneyLand", "the White House"];
const insertZ =["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and ran away"];

randomise.addEventListener("click" , result);

function result() {
  let newStory = storyText;

  const xItem = randomValuefromArray(insertX);
  const yItem = randomValuefromArray(insertY);
  const zItem = randomValuefromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:" ,xItem);
  newStory = newStory.replaceAll(":inserty:" ,yItem);
  newStory = newStory.replaceAll(":insertz:" ,zItem);

  if(customName.value !== " ") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob" ,name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round((94-32) * 5/9)} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.computedStyleMap.visibility = "visible";
}
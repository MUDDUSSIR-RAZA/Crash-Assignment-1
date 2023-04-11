let animalNameArr = ["aardvark", "albatross", "alligator", "anaconda", "ant", "anteater", "antelope", "ape", "armadillo", "baboon", "badger", "barracuda", "bat", "bear", "beaver", "bee", "beetle", "bird", "bison", "blackbird", "boa", "bobcat", "buffalo", "butterfly", "camel", "canary", "capybara", "cat", "caterpillar", "cattle", "cheetah", "chicken", "chimpanzee", "chinchilla", "chipmunk", "cobra", "cockroach", "cod", "coyote", "crab", "crane", "crocodile", "crow", "deer", "dingo", "dolphin", "donkey", "dragonfly", "duck", "eagle", "elephant", "elk", "emu", "falcon", "ferret", "finch", "fish", "flamingo", "fly", "fox", "frog", "gazelle", "giraffe", "goat", "goose", "gorilla", "grasshopper", "groundhog", "guinea pig", "hamster", "hare", "hawk", "hedgehog", "heron", "hippopotamus", "horse", "hummingbird", "hyena", "iguana", "jackal", "jaguar", "jellyfish", "kangaroo", "koala", "ladybug", "lark", "lemming", "leopard", "lion", "lizard", "llama", "lobster", "lynx", "macaw", "magpie", "mallard", "manatee", "mandrill", "marten", "mink", "mole", "mongoose", "monkey", "moose", "mosquito", "mouse", "mule", "narwhal", "newt", "nightingale", "octopus", "opossum", "orangutan", "ostrich", "otter", "owl", "ox", "panda", "panther", "parakeet", "parrot", "peacock", "pelican", "penguin", "pheasant", "pig", "pigeon", "platypus", "polar bear", "porcupine", "possum", "prairie dog", "quail", "rabbit", "raccoon", "ram", "rat", "raven", "reindeer", "rhinoceros", "rooster", "salamander", "salmon", "sandpiper", "sardine", "scorpion", "seahorse", "seal", "shark", "sheep", "shrimp", "skunk", "snail", "snake", "sparrow", "spider", "squirrel", "starfish", "stork", "swallow", "swan", "tiger", "toad", "toucan", "turkey", "turtle", "vulture", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "woodpecker", "worm", "yak", "zebra"];

let inputAnimalName = prompt("Enter a anmial name to check the animal name is found or not:")


function searchArray(animalNameArr, inputAnimalName) {
  if (animalNameArr.length === 0) {
    return false;
  } else if (animalNameArr[0] === inputAnimalName) {
    return true;
  } else {
    return searchArray(animalNameArr.slice(1), inputAnimalName);
  }
}

if (searchArray(animalNameArr , inputAnimalName.toLocaleLowerCase())) {
  console.log("true");
} else {
  console.log("false");
}


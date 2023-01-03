import { v4 as uuidv4 } from "uuid";

const MovieList = [
  {
    id: uuidv4(),
    Title: "The Avengers",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 0,
  },
  {
    id: uuidv4(),
    Title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    rating: 4,
  },
  {
    id: uuidv4(),
    Title: "Iron Man",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    rating: 5,
  },
  {
    id: uuidv4(),
    Title: "Thor",
    description:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    rating: 5,
  },
  {
    id: uuidv4(),
    Title: "Man of Steel",
    description:
      "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
    rating: 3,
  },
  {
    id: uuidv4(),
    Title: "Ronaldo",
    description: "A close look at the life of Cristiano Ronaldo.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNzMyMTM1MjQxNF5BMl5BanBnXkFtZTgwMjY4NTE5NjE@._V1_SX300.jpg",
    rating: 7,
  },
];

export default MovieList;

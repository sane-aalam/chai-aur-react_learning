const movies = [
  {
    id: 1,
    title: "Stranger Things",
    genre: "Sci-Fi Horror",
    rating: 8.7,
    imageUrl:
      "https://resizing.flixster.com/OIRaL3IPRpmjubYPmUkE9v2OKwQ=/fit-in/180x240/v2/https://resizing.flixster.com/6K5Lxm4B4x8u6AdItBQFKXAjrvI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y2ZGM5NTlhLWE4MTktNGQ3Yi04Njc4LTFiZDQ0MGFjOTJkNy5qcGc=",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
    isTrending: true,
  },
  {
    id: 2,
    title: "The Queen's Gambit",
    genre: "Drama",
    rating: 8.6,
    imageUrl:
      "https://resizing.flixster.com/Pi-qUe7O4n8fF3E17kw9IGTDNIU=/fit-in/180x240/v2/https://resizing.flixster.com/OnI40v_5iaeMcxv03WYplHl5l_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UzY2U2OGZiLTBlN2UtNDUxMi1iMmI0LTFkYTFiYzBlYzA1MC5qcGc=",
    description:
      "Orphaned in the 1950s, a chess prodigy struggles with addiction while longing to become the world's greatest chess player.",
    cast: ["Anya Taylor-Joy", "Bill Camp", "Moses Ingram"],
    isTrending: false,
  },
  {
    id: 3,
    title: "Bridgerton",
    genre: "Romance",
    rating: 7.3,
    imageUrl:
      "https://resizing.flixster.com/TgfElSYWeDmBiu5Lar3scWtkUk4=/fit-in/180x240/v2/https://resizing.flixster.com/0nQ2niq2j-E4gdW_kB5H606atmc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlZWEwMmY4LTk1OWUtNGEyOS04ODRmLTA0OWRjMzhlYWZkNi53ZWJw",
    description:
      "Wealth, lust, and betrayal set against the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
    cast: ["Jonathan Bailey", "Simone Ashley", "Nicola Coughlan"],
    isTrending: true,
  },
  {
    id: 4,
    title: "The Witcher",
    genre: "Fantasy",
    rating: 8.2,
    imageUrl:
      "https://resizing.flixster.com/kH9WE2_xfE5r6smP2ccQmQ09ClU=/fit-in/180x240/v2/https://resizing.flixster.com/Kw1Wwzgz0f3_Do10xgV1nxoDzpI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI0ZDJmZmNmLTI0MWUtNDAzMC04NWI5LTBhMWZhMzA3ZDE2YS53ZWJw",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    isTrending: false,
  },
  {
    id: 5,
    title: "Money Heist",
    genre: "Crime Thriller",
    rating: 8.2,
    imageUrl:
      "https://resizing.flixster.com/MsX7fiOpsALEUMtZub80T8hn6g8=/fit-in/180x240/v2/https://resizing.flixster.com/G_2V2uA8o5asxek62po1PR-4zqw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg2MTk4MGE1LWE1NGYtNDliYi05MWVlLTk2ZTRlMmQyMzE0My5qcGc=",
    description:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    isTrending: true,
  },
  {
    id: 6,
    title: "Stranger Things",
    genre: "Sci-Fi Horror",
    rating: 8.7,
    imageUrl:
      "https://resizing.flixster.com/OIRaL3IPRpmjubYPmUkE9v2OKwQ=/fit-in/180x240/v2/https://resizing.flixster.com/6K5Lxm4B4x8u6AdItBQFKXAjrvI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y2ZGM5NTlhLWE4MTktNGQ3Yi04Njc4LTFiZDQ0MGFjOTJkNy5qcGc=",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
    isTrending: true,
  },
  {
    id: 7,
    title: "The Queen's Gambit",
    genre: "Drama",
    rating: 8.6,
    imageUrl:
      "https://resizing.flixster.com/Pi-qUe7O4n8fF3E17kw9IGTDNIU=/fit-in/180x240/v2/https://resizing.flixster.com/OnI40v_5iaeMcxv03WYplHl5l_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UzY2U2OGZiLTBlN2UtNDUxMi1iMmI0LTFkYTFiYzBlYzA1MC5qcGc=",
    description:
      "Orphaned in the 1950s, a chess prodigy struggles with addiction while longing to become the world's greatest chess player.",
    cast: ["Anya Taylor-Joy", "Bill Camp", "Moses Ingram"],
    isTrending: false,
  },
  {
    id: 8,
    title: "Bridgerton",
    genre: "Romance",
    rating: 7.3,
    imageUrl:
      "https://resizing.flixster.com/TgfElSYWeDmBiu5Lar3scWtkUk4=/fit-in/180x240/v2/https://resizing.flixster.com/0nQ2niq2j-E4gdW_kB5H606atmc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlZWEwMmY4LTk1OWUtNGEyOS04ODRmLTA0OWRjMzhlYWZkNi53ZWJw",
    description:
      "Wealth, lust, and betrayal set against the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
    cast: ["Jonathan Bailey", "Simone Ashley", "Nicola Coughlan"],
    isTrending: true,
  },
  {
    id: 9,
    title: "The Witcher",
    genre: "Fantasy",
    rating: 8.2,
    imageUrl:
      "https://resizing.flixster.com/kH9WE2_xfE5r6smP2ccQmQ09ClU=/fit-in/180x240/v2/https://resizing.flixster.com/Kw1Wwzgz0f3_Do10xgV1nxoDzpI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI0ZDJmZmNmLTI0MWUtNDAzMC04NWI5LTBhMWZhMzA3ZDE2YS53ZWJw",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    isTrending: false,
  },
  {
    id: 10,
    title: "Money Heist",
    genre: "Crime Thriller",
    rating: 8.2,
    imageUrl:
      "https://resizing.flixster.com/MsX7fiOpsALEUMtZub80T8hn6g8=/fit-in/180x240/v2/https://resizing.flixster.com/G_2V2uA8o5asxek62po1PR-4zqw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg2MTk4MGE1LWE1NGYtNDliYi05MWVlLTk2ZTRlMmQyMzE0My5qcGc=",
    description:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    isTrending: true,
  },
];

export default movies;

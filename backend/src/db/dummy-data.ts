export const movies = [
  {
    title: 'Inception',
    description:
      'A skilled thief enters dreams to steal secrets and is offered a final mission that could change his life.',
    releaseDate: '2010-07-16',
    poster: 'https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg',
    actors: [
      { name: 'Leonardo DiCaprio', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
      { name: 'Oscar Isaac', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Mind-bending and very rewatchable.' },
      { rating: 4, comment: 'Great action and a smart concept.' },
      { rating: 5, comment: 'One of the best sci-fi thrillers ever.' },
      { rating: 4, comment: 'Complex, stylish, and memorable.' },
    ],
  },
  {
    title: 'Interstellar',
    description:
      'A group of explorers travel beyond Earth in search of a future for humanity.',
    releaseDate: '2014-11-07',
    poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    actors: [
      { name: 'Leonardo DiCaprio', gender: 'Male' },
      { name: 'Zendaya', gender: 'Female' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Emotional and visually stunning.' },
      { rating: 5, comment: 'Big ideas with real heart.' },
      { rating: 4, comment: 'Beautiful score and visuals.' },
      { rating: 4, comment: 'A moving sci-fi epic.' },
    ],
  },
  {
    title: 'The Dark Knight',
    description:
      'Batman faces his most dangerous enemy as chaos spreads across Gotham.',
    releaseDate: '2008-07-18',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    actors: [
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: 'Daniel Kaluuya', gender: 'Male' },
      { name: 'John Boyega', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Still one of the strongest comic-book films.' },
      { rating: 5, comment: 'Dark, intense, and iconic.' },
      { rating: 4, comment: 'Excellent pacing and performances.' },
      { rating: 5, comment: 'A modern classic.' },
    ],
  },
  {
    title: 'Titanic',
    description:
      'A romance unfolds aboard the doomed ocean liner on its fateful voyage.',
    releaseDate: '1997-12-19',
    poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    actors: [
      { name: 'Leonardo DiCaprio', gender: 'Male' },
      { name: 'Scarlett Johansson', gender: 'Female' },
      { name: 'Saoirse Ronan', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Classic romance and spectacle.' },
      { rating: 4, comment: 'Emotional and beautifully made.' },
      { rating: 4, comment: 'A huge film that still works.' },
      { rating: 5, comment: 'Timeless and unforgettable.' },
    ],
  },
  {
    title: 'The Matrix',
    description:
      'A hacker discovers the truth about reality and his role in a war against machines.',
    releaseDate: '1999-03-31',
    poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    actors: [
      { name: 'Oscar Isaac', gender: 'Male' },
      { name: 'Pedro Pascal', gender: 'Male' },
      { name: 'Daniel Kaluuya', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Innovative and hugely influential.' },
      { rating: 5, comment: 'Action and ideas both hit hard.' },
      { rating: 4, comment: 'Still cool after all these years.' },
      { rating: 4, comment: 'A sci-fi landmark.' },
    ],
  },
  {
    title: 'Gladiator',
    description:
      'A betrayed Roman general fights for survival and revenge in the arena.',
    releaseDate: '2000-05-05',
    poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    actors: [
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: 'Florence Pugh', gender: 'Female' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Epic, emotional, and endlessly quotable.' },
      { rating: 4, comment: 'A big historical drama done right.' },
      { rating: 5, comment: 'The action and emotion both land.' },
      { rating: 4, comment: 'A strong revenge story.' },
    ],
  },
  {
    title: 'Avatar',
    description:
      'A marine on an alien world becomes torn between orders and the people he grows to respect.',
    releaseDate: '2009-12-18',
    poster: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
    actors: [
      { name: 'Zendaya', gender: 'Female' },
      { name: 'John Boyega', gender: 'Male' },
      { name: 'Anya Taylor-Joy', gender: 'Female' },
    ],
    reviews: [
      { rating: 4, comment: 'Visually impressive and immersive.' },
      { rating: 4, comment: 'Simple story, massive spectacle.' },
      { rating: 5, comment: 'A world you can get lost in.' },
      { rating: 3, comment: 'The visuals are the real star.' },
    ],
  },
  {
    title: 'The Avengers',
    description:
      "Earth's mightiest heroes come together to stop a global threat.",
    releaseDate: '2012-05-04',
    poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    actors: [
      { name: 'Scarlett Johansson', gender: 'Female' },
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Big, fun, and hugely entertaining.' },
      { rating: 4, comment: 'The team dynamic really works.' },
      { rating: 4, comment: 'Still one of the best ensemble blockbusters.' },
      { rating: 5, comment: 'A crowd-pleasing superhero event.' },
    ],
  },
  {
    title: 'Jurassic Park',
    description:
      'A theme park filled with cloned dinosaurs descends into chaos.',
    releaseDate: '1993-06-11',
    poster: 'https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',
    actors: [
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
      { name: 'John Boyega', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'A timeless blockbuster.' },
      { rating: 5, comment: 'Still thrilling and full of wonder.' },
      { rating: 4, comment: 'The dinosaurs still impress.' },
      { rating: 4, comment: 'Classic adventure filmmaking.' },
    ],
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description:
      'A young hobbit begins a dangerous journey to destroy a powerful ring.',
    releaseDate: '2001-12-19',
    poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    actors: [
      { name: 'Oscar Isaac', gender: 'Male' },
      { name: 'Saoirse Ronan', gender: 'Female' },
      { name: 'Timothée Chalamet', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'A magical start to an epic trilogy.' },
      { rating: 5, comment: 'Immersive worldbuilding and strong characters.' },
      { rating: 4, comment: 'Still holds up beautifully.' },
      { rating: 5, comment: 'Adventure at its best.' },
    ],
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    description: 'The fellowship is broken as war grows across Middle-earth.',
    releaseDate: '2002-12-18',
    poster: 'https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    actors: [
      { name: 'Oscar Isaac', gender: 'Male' },
      { name: 'Saoirse Ronan', gender: 'Female' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Bigger, darker, and more intense.' },
      { rating: 4, comment: 'The battles are incredible.' },
      { rating: 5, comment: 'Strong momentum and emotion.' },
      { rating: 4, comment: 'A fantastic middle chapter.' },
    ],
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    description:
      'The final battle for Middle-earth begins as the ring nears Mount Doom.',
    releaseDate: '2003-12-17',
    poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    actors: [
      { name: 'Pedro Pascal', gender: 'Male' },
      { name: 'Saoirse Ronan', gender: 'Female' },
      { name: 'Timothée Chalamet', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'An emotional and satisfying finale.' },
      { rating: 5, comment: 'Epic in every sense.' },
      { rating: 4, comment: 'Huge scale, real heart.' },
      { rating: 5, comment: 'A legendary ending to a legendary trilogy.' },
    ],
  },
  {
    title: 'Mad Max: Fury Road',
    description:
      'In a brutal wasteland, fugitives race across the desert in a war rig.',
    releaseDate: '2015-05-15',
    poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    actors: [
      { name: 'Anya Taylor-Joy', gender: 'Female' },
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: 'Zendaya', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Pure action cinema.' },
      { rating: 5, comment: 'Relentless, stylish, and inventive.' },
      { rating: 4, comment: 'A nonstop ride.' },
      { rating: 5, comment: 'One of the best action movies ever made.' },
    ],
  },
  {
    title: 'Whiplash',
    description:
      'A young drummer pushes himself to the limit under a ruthless instructor.',
    releaseDate: '2014-10-10',
    poster: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    actors: [
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
      { name: 'Daniel Kaluuya', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Intense and unforgettable.' },
      { rating: 4, comment: 'Great performances and pacing.' },
      { rating: 5, comment: 'Anxiety turned into art.' },
      { rating: 4, comment: 'Sharp, focused, and powerful.' },
    ],
  },
  {
    title: 'La La Land',
    description:
      'A musician and an aspiring actress fall in love while chasing their dreams in Los Angeles.',
    releaseDate: '2016-12-09',
    poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    actors: [
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
      { name: 'Margot Robbie', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Charming, bittersweet, and beautiful.' },
      { rating: 4, comment: 'Great music and chemistry.' },
      { rating: 4, comment: 'Stylish and heartfelt.' },
      { rating: 5, comment: 'A modern musical with real feeling.' },
    ],
  },
  {
    title: 'Parasite',
    description:
      'A poor family gradually inserts themselves into the lives of a wealthy household.',
    releaseDate: '2019-11-08',
    poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    actors: [
      { name: 'Steven Yeun', gender: 'Male' },
      { name: 'Saoirse Ronan', gender: 'Female' },
      { name: 'Daniel Kaluuya', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Smart, layered, and gripping.' },
      { rating: 5, comment: 'A brilliant social thriller.' },
      { rating: 4, comment: 'Funny, tense, and shocking.' },
      { rating: 5, comment: 'Deserved all the praise.' },
    ],
  },
  {
    title: 'Get Out',
    description:
      "A weekend visit with a girlfriend's family becomes increasingly disturbing.",
    releaseDate: '2017-02-24',
    poster: 'https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg',
    actors: [
      { name: 'Daniel Kaluuya', gender: 'Male' },
      { name: 'Florence Pugh', gender: 'Female' },
      { name: 'John Boyega', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Sharp, tense, and original.' },
      { rating: 4, comment: 'Great blend of horror and satire.' },
      { rating: 5, comment: 'A smart thriller that sticks with you.' },
      { rating: 4, comment: 'Very effective and well acted.' },
    ],
  },
  {
    title: 'Black Panther',
    description:
      'The king of Wakanda must defend his nation and define its future.',
    releaseDate: '2018-02-16',
    poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    actors: [
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: "Lupita Nyong'o", gender: 'Female' },
      { name: 'Daniel Kaluuya', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Stylish, exciting, and meaningful.' },
      { rating: 4, comment: 'Great worldbuilding and cast.' },
      { rating: 5, comment: 'A standout superhero film.' },
      { rating: 4, comment: 'Strong action with heart.' },
    ],
  },
  {
    title: 'Dune',
    description:
      'A young nobleman must face destiny on a dangerous desert planet.',
    releaseDate: '2021-10-22',
    poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    actors: [
      { name: 'Timothée Chalamet', gender: 'Male' },
      { name: 'Zendaya', gender: 'Female' },
      { name: 'Oscar Isaac', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Massive, immersive, and beautiful.' },
      { rating: 4, comment: 'Great atmosphere and scale.' },
      { rating: 4, comment: 'Slow but very compelling.' },
      { rating: 5, comment: 'An impressive sci-fi adaptation.' },
    ],
  },
  {
    title: 'Dune: Part Two',
    description:
      'Paul Atreides unites with the Fremen and seeks justice against those who destroyed his family.',
    releaseDate: '2024-03-01',
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    actors: [
      { name: 'Timothée Chalamet', gender: 'Male' },
      { name: 'Zendaya', gender: 'Female' },
      { name: 'Florence Pugh', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'A huge step up and incredibly satisfying.' },
      { rating: 5, comment: 'Spectacle with real emotional weight.' },
      { rating: 4, comment: 'Excellent cast and visuals.' },
      { rating: 5, comment: 'One of the strongest recent blockbusters.' },
    ],
  },
  {
    title: 'Blade Runner 2049',
    description:
      'A new blade runner uncovers a secret that could upend society.',
    releaseDate: '2017-10-06',
    poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    actors: [
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Ana de Armas', gender: 'Female' },
      { name: 'Oscar Isaac', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Beautiful, moody, and thoughtful.' },
      { rating: 4, comment: 'Excellent visuals and score.' },
      { rating: 4, comment: 'Slow burn done right.' },
      { rating: 5, comment: 'A worthy sequel.' },
    ],
  },
  {
    title: 'No Country for Old Men',
    description:
      'Violence spirals across the Texas desert after a hunter finds a suitcase of money.',
    releaseDate: '2007-11-21',
    poster: 'https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg',
    actors: [
      { name: 'Pedro Pascal', gender: 'Male' },
      { name: 'Michael B. Jordan', gender: 'Male' },
      { name: 'Scarlett Johansson', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Tense, spare, and brilliantly made.' },
      { rating: 5, comment: 'A haunting crime thriller.' },
      { rating: 4, comment: 'Great atmosphere and performances.' },
      { rating: 4, comment: 'Bleak in the best way.' },
    ],
  },
  {
    title: 'There Will Be Blood',
    description:
      'An ambitious oilman climbs toward wealth and power at enormous human cost.',
    releaseDate: '2007-12-26',
    poster: 'https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg',
    actors: [
      { name: 'Daniel Kaluuya', gender: 'Male' },
      { name: 'Florence Pugh', gender: 'Female' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Intense, ambitious, and unforgettable.' },
      { rating: 5, comment: 'A towering character study.' },
      { rating: 4, comment: 'Dark and deeply compelling.' },
      { rating: 4, comment: 'Feels huge and intimate at once.' },
    ],
  },
  {
    title: 'The Social Network',
    description:
      "The story of Facebook's creation and the conflicts that followed.",
    releaseDate: '2010-10-01',
    poster: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
    actors: [
      { name: 'Andrew Garfield', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
      { name: 'Timothée Chalamet', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Sharp, fast, and endlessly quotable.' },
      { rating: 4, comment: 'Excellent writing and pacing.' },
      { rating: 4, comment: 'A great modern drama.' },
      { rating: 5, comment: "One of Fincher's best." },
    ],
  },
  {
    title: 'The Grand Budapest Hotel',
    description:
      'A legendary concierge and his protégé become entangled in a murder and inheritance dispute.',
    releaseDate: '2014-03-28',
    poster: 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
    actors: [
      { name: 'Saoirse Ronan', gender: 'Female' },
      { name: 'Timothée Chalamet', gender: 'Male' },
      { name: 'Anya Taylor-Joy', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Funny, elegant, and visually rich.' },
      { rating: 4, comment: 'Stylized in the best way.' },
      { rating: 4, comment: 'A delight from start to finish.' },
      { rating: 5, comment: 'Charming and inventive.' },
    ],
  },
  {
    title: 'The Shawshank Redemption',
    description:
      'A banker sentenced to life in prison forms an enduring friendship and never gives up hope.',
    releaseDate: '1994-09-23',
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    actors: [
      { name: 'Morgan Freeman', gender: 'Male' },
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Powerful, uplifting, and timeless.' },
      { rating: 5, comment: 'A beautifully told story.' },
      { rating: 4, comment: 'Still deserves its reputation.' },
      { rating: 5, comment: 'An all-time great drama.' },
    ],
  },
  {
    title: 'Pulp Fiction',
    description:
      'Multiple criminal stories in Los Angeles collide in unexpected ways.',
    releaseDate: '1994-10-14',
    poster: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
    actors: [
      { name: 'Scarlett Johansson', gender: 'Female' },
      { name: 'John Boyega', gender: 'Male' },
      { name: 'Margot Robbie', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Cool, sharp, and endlessly quotable.' },
      { rating: 4, comment: 'Still feels fresh.' },
      { rating: 4, comment: 'A great ensemble crime film.' },
      { rating: 5, comment: 'Iconic in every way.' },
    ],
  },
  {
    title: 'Fight Club',
    description:
      "An office worker's life changes when he meets a charismatic soap maker.",
    releaseDate: '1999-10-15',
    poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    actors: [
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Margot Robbie', gender: 'Female' },
      { name: 'Pedro Pascal', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Dark, stylish, and provocative.' },
      { rating: 4, comment: 'A film that invites discussion.' },
      { rating: 4, comment: 'Bold and memorable.' },
      { rating: 5, comment: 'Still hits hard.' },
    ],
  },
  {
    title: 'The Prestige',
    description:
      'Two rival magicians push obsession and sacrifice to dangerous extremes.',
    releaseDate: '2006-10-20',
    poster: 'https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg',
    actors: [
      { name: 'Christian Bale', gender: 'Male' },
      { name: 'Scarlett Johansson', gender: 'Female' },
      { name: 'Michael B. Jordan', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Smart, layered, and rewarding.' },
      { rating: 4, comment: 'Great twists and atmosphere.' },
      { rating: 5, comment: 'A perfect film for rewatches.' },
      { rating: 4, comment: 'Tense and beautifully structured.' },
    ],
  },
  {
    title: 'Arrival',
    description:
      'A linguist works to communicate with mysterious visitors whose arrival changes the world.',
    releaseDate: '2016-11-11',
    poster: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
    actors: [
      { name: 'Amy Adams', gender: 'Female' },
      { name: 'Oscar Isaac', gender: 'Male' },
      { name: 'Jeremy Renner', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Thoughtful, emotional sci-fi.' },
      { rating: 4, comment: 'Beautifully written and acted.' },
      { rating: 5, comment: 'A smart film with real feeling.' },
      { rating: 4, comment: 'Quiet but powerful.' },
    ],
  },
  {
    title: 'The Departed',
    description:
      'An undercover cop and a mole in the police race to uncover each other.',
    releaseDate: '2006-10-06',
    poster: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    actors: [
      { name: 'Leonardo DiCaprio', gender: 'Male' },
      { name: 'Matt Damon', gender: 'Male' },
      { name: 'Margot Robbie', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'Tense, sharp, and packed with energy.' },
      { rating: 4, comment: 'Great cast and momentum.' },
      { rating: 4, comment: 'A very entertaining crime thriller.' },
      { rating: 5, comment: "One of Scorsese's most gripping films." },
    ],
  },
  {
    title: 'Oppenheimer',
    description:
      'The life of J. Robert Oppenheimer and the creation of the atomic bomb.',
    releaseDate: '2023-07-21',
    poster: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    actors: [
      { name: 'Cillian Murphy', gender: 'Male' },
      { name: 'Florence Pugh', gender: 'Female' },
      { name: 'Matt Damon', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Huge, intense, and absorbing.' },
      { rating: 4, comment: 'Excellent performances across the board.' },
      { rating: 5, comment: 'A serious blockbuster done well.' },
      { rating: 4, comment: 'Dense but worth the attention.' },
    ],
  },
  {
    title: 'Barbie',
    description:
      'Barbie leaves Barbieland and begins to discover the complexities of the real world.',
    releaseDate: '2023-07-21',
    poster: null,
    actors: [
      { name: 'Margot Robbie', gender: 'Female' },
      { name: 'Ryan Gosling', gender: 'Male' },
      { name: 'Emma Stone', gender: 'Female' },
    ],
    reviews: [
      { rating: 4, comment: 'Funny, colorful, and surprisingly thoughtful.' },
      { rating: 5, comment: 'Smart and entertaining.' },
      { rating: 4, comment: 'A lot more layered than expected.' },
      { rating: 4, comment: 'Very fun with a strong visual style.' },
    ],
  },
  {
    title: 'Top Gun: Maverick',
    description:
      'Maverick returns to train a new generation of elite pilots for a dangerous mission.',
    releaseDate: '2022-05-27',
    poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    actors: [
      { name: 'Glen Powell', gender: 'Male' },
      { name: 'Miles Teller', gender: 'Male' },
      { name: 'Zendaya', gender: 'Female' },
    ],
    reviews: [
      { rating: 5, comment: 'A thrilling legacy sequel.' },
      { rating: 4, comment: 'Excellent aerial action.' },
      { rating: 5, comment: 'Pure blockbuster craft.' },
      { rating: 4, comment: 'A very satisfying crowd-pleaser.' },
    ],
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    description:
      'Miles Morales becomes Spider-Man and teams up with heroes from across dimensions.',
    releaseDate: '2018-12-14',
    poster: null,
    actors: [
      { name: 'Shameik Moore', gender: 'Male' },
      { name: 'Hailee Steinfeld', gender: 'Female' },
      { name: 'Oscar Isaac', gender: 'Male' },
    ],
    reviews: [
      { rating: 5, comment: 'Inventive, heartfelt, and visually brilliant.' },
      { rating: 5, comment: 'One of the best animated movies ever.' },
      { rating: 4, comment: 'Fresh, funny, and emotional.' },
      { rating: 5, comment: 'A superhero movie with real personality.' },
    ],
  },
];

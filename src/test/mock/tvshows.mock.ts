import { TvShow } from "src/app/shared/models/tvshow.model";
import { Genre } from "src/app/shared/shared.enum";

export const getMockTvShows = (): TvShow[] =>  [
  {
    id: 1,
    name: 'Under the Dome',
    language: 'English',
    genres: [
      Genre.Crime,
      Genre.Family,
      Genre.Drama,
      Genre.Anime
    ],
    status: 'Ended',
    averageRuntime: 60,
    premiered: '2013-06-24',
    imageSrcSet:'test',
    rating: {
      average: 6.5
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
    },
    summary: '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town\'s inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>'
  },
  {
    id: 2,
    name: 'Game of thrones',
    language: 'English',
    genres: [
      Genre.Drama,
      Genre.Fantasy,
      Genre.Music,
      Genre.Romance,
      Genre.ScienceFiction,
      Genre.Sports,
      Genre.Thriller,
      Genre.Comedy
    ],
    status: 'Ended',
    averageRuntime: 60,
    premiered: '2013-06-24',
    imageSrcSet:'test',
    rating: {
      average: 6.5
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
    },
    summary: '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town\'s inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>'
  },
  {
    id: 3,
    name: 'Money Heist',
    language: 'English',
    genres: [
      Genre.Crime,
      Genre.Family,
      Genre.Drama,
      Genre.Anime,
      Genre.Drama,
      Genre.Fantasy,
      Genre.Music,
      Genre.Romance,
      Genre.ScienceFiction,
      Genre.Sports,
      Genre.Thriller,
      Genre.Comedy
    ],
    status: 'Ended',
    averageRuntime: 60,
    premiered: '2013-06-24',
    imageSrcSet:'test',
    rating: {
      average: 6.5
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
    },
    summary: '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town\'s inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>'
  }
];

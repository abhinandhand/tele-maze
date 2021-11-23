import { Genre } from "../shared.enum";
import { ShowImages } from "./showImages.model";

export interface TvShow {
  id: number;
  name: string;
  language: string;
  genres: Genre[],
  averageRuntime: number;
  rating: Rating;
  image: ShowImages;
  summary: string;
  premiered: string;
  imageSrcSet: string;
  status: string;
  score?: number;
}

export interface TvShowSearchResults{
  score: number;
  show: TvShow
}

export interface Rating {
  average: number;
}

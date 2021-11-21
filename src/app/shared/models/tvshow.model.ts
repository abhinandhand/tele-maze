import { NumberValueAccessor } from "@angular/forms";
import { Genre } from "../shared.enum";
import { ShowImages } from "./showImages.model";

export interface TvShow {
  id: number;
  name: string;
  language: string;
  genres: Genre[],
  averageRuntime: number;
  rating: number;
  image: ShowImages;
  summary: string;
  premiered: string;
  score?: number;
}

export interface TvShowSearchResults{
  score: number;
  show: TvShow
}

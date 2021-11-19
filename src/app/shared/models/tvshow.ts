import { NumberValueAccessor } from "@angular/forms";
import { Genre } from "../shared.enum";
import { ShowImages } from "./showImages";

export interface TvShow {
  id: number;
  name: string;
  language: string;
  genres: Genre[],
  runtime: number;
  rating: number;
  image: ShowImages;
  summary: string;
  premiered: Date;
}

import { TvShow, TvShowSearchResults } from "../models/tvshow.model";
import { ImageBreakPoint } from "../shared.enum";

export function   mapTvShows(searchresults: TvShowSearchResults[]): TvShow[] {
  return searchresults.map(data => ({
    score: data.score,
    id: data.show.id,
    genres: data.show.genres,
    image: data.show?.image,
    imageSrcSet: `${data.show?.image?.medium} ${ImageBreakPoint.Medium}, ${data.show?.image?.original} ${ImageBreakPoint.Orginal}`,
    language: data.show.language,
    name: data.show.name,
    premiered: data.show.premiered,
    rating: data.show.rating,
    averageRuntime: data.show.averageRuntime,
    summary: data.show.summary,
    status: data.show.status
  }))
}

export function mapTvShow(result: TvShow): TvShow {
  const { image } = result;

  return {
    ...result,
    imageSrcSet: `${image?.medium} ${ImageBreakPoint.Medium}, ${image?.original} ${ImageBreakPoint.Orginal}`,
  }
}

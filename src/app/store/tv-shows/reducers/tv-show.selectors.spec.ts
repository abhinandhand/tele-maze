import { getMockTvShows } from "src/test/mock/tvshows.mock";
import { selectComedyShows, selectCrimeShows, selectDetailedShow, selectDetailedShowWithId, selectDramaShows, selectFamilyShows, selectMusicShows, selectRomanceShows, selectScienceFictionShows, selectSportsShows, selectThrillerShows, selectTopRatedShows } from "./tv-shows.selectors";

describe('Tv Show selector', ()=> {
    it('selectFamilyShows', ()=>{
        const state = getMockTvShows();

        const result = selectFamilyShows.projector(state, {});

        const expectedTvShow = [state[0], state[2]];

        expect(result).toEqual(expectedTvShow);
    });

    it('selectThrillerShows', ()=>{
      const state = getMockTvShows();

      const result = selectThrillerShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
   });

   it('selectDramaShows', ()=>{
    const state = getMockTvShows();

    const result = selectDramaShows.projector(state, {});

    const expectedTvShow = [state[0], state[1], state[2]];

    expect(result).toEqual(expectedTvShow);
    });

    it('selectComedyShows ', ()=>{
      const state = getMockTvShows();

      const result = selectComedyShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });


    it('selectCrimeShows  ', ()=>{
      const state = getMockTvShows();

      const result = selectCrimeShows.projector(state, {});

      const expectedTvShow = [state[0], state[2]];

      expect(result).toEqual(expectedTvShow);
    });


    it('selectSportsShows', ()=>{
      const state = getMockTvShows();

      const result = selectSportsShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });

    it('selectMusicShows', ()=>{
      const state = getMockTvShows();

      const result = selectMusicShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });

    it('selectRomanceShows', ()=>{
      const state = getMockTvShows();

      const result = selectRomanceShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });

    it('selectScienceFictionShows ', ()=>{
      const state = getMockTvShows();

      const result = selectScienceFictionShows.projector(state, {});

      const expectedTvShow = [state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });


    it('selectTopRatedShows ', ()=>{
      const state = getMockTvShows();

      const result = selectTopRatedShows.projector(state, {});

      const expectedTvShow = [state[0], state[1], state[2]];

      expect(result).toEqual(expectedTvShow);
    });

    it('selectDetailedShow', ()=>{
      const state = getMockTvShows();

      const result = selectDetailedShow.projector(state, {});

      const expectedTvShow = state[0]

      expect(result).toEqual(expectedTvShow);
    });

    it('selectDetailedShowWithId ', ()=>{
      const state = getMockTvShows();

      const result = selectDetailedShowWithId(2).projector(state, {});

      const expectedTvShow = state[2]

      expect(result).toEqual(expectedTvShow);
    });


});

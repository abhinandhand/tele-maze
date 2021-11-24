import { getLoadingState } from "./loader.selector";

describe('loader selector', ()=> {
    it('should return the loading state on using the loading selector', ()=>{
        const state = {
          isLoading: true
        };

        const result = getLoadingState.projector(state, {});

        expect(result).toBe(true);

    });
});

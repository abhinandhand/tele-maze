import * as SearchAction from './search.actions'

describe('Search Actions', ()=> {
  it('should return an action', ()=> {
      expect(SearchAction.onSearchSubmit.type).toBe('[Search Page] On Search Submit')
  })
});

import * as DetailAction from './detail.actions'

describe('Detail Actions', ()=> {
  it('should return an action', ()=> {
      expect(DetailAction.detailLoadDataSuccess.type).toBe('[Detail Page] Detail Load Data Success')
  })
});

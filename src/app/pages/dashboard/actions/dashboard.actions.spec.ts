import * as DashboardAction from './dashboard.actions'

describe('Dasboard Actions', ()=> {
  it('should return an action', ()=> {
      expect(DashboardAction.dashboardLoadDataSuccess.type).toBe('[Dashboard Page] Dashboard Load Data Success')
  })
});

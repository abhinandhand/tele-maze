// import { TestBed } from "@angular/core/testing";
// import { RoutesRecognized } from "@angular/router";
// import { provideMockActions } from '@ngrx/effects/testing';
// import { RouterNavigationAction, ROUTER_NAVIGATION, SerializedRouterStateSnapshot } from "@ngrx/router-store";
// import { MockStore, provideMockStore } from "@ngrx/store/testing";
// import { Observable } from "rxjs";
// import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
// import { setLoading } from "src/app/store/loader/actions/loader.actions";
// import { loadTvShowInfos } from "src/app/store/tv-shows/actions/tv-shows.actions";
// import { getMockTvShows } from "src/test/mock/tvshows.mock";
// import { SharedTestingModule } from "src/test/shared.testing.module";
// import { dashboardLoadDataSuccess } from "../actions/dashboard.actions";
// import { DashboardEffects } from "./dashboard.effects";


// const routerState = {
// 	params: {
// 	}
// };

// describe('Dasboard Effects',()=>{
//   let actions: Observable<unknown>;
//   let effects: DashboardEffects;
//   let routerAction: RouterNavigationAction;
//   let store: MockStore;

//   const TeleMazeServiceSpy = jasmine.createSpyObj('TeleMazeService', ['getShows']);

//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       imports: [SharedTestingModule],
//       providers: [
//         DashboardEffects,
//         provideMockStore(),
//         provideMockActions(() => actions),
//           {provide: TeleMazeService, useValue: TeleMazeServiceSpy}
//       ]
//     })

//     routerAction = {
// 			type: ROUTER_NAVIGATION,
// 			payload: {
// 				event: {} as RoutesRecognized,
// 				routerState: {} as SerializedRouterStateSnapshot
// 			}
// 		};

//     store = TestBed.inject(MockStore);
//     effects = TestBed.inject(DashboardEffects);
//   });

//   it('should be created', () => {
// 		expect(effects).toBeTruthy();
// 	});

//   it('should populate the TvShow on routing to the Dashboard page', () => {

//     const completion = [
//       loadTvShowInfos( {tvShows: getMockTvShows()}),
//       setLoading({isLoading: true}),
//       dashboardLoadDataSuccess()
//     ];

//     //   actions = hot('--a----|', { a: routerAction });
// 		//   const expected$ = cold('--(bcd)|', { b: completion[0], c: completion[1], d: completion[2]});

//     //  expect(effects.dashboardPageOnDestroy$).t

// });


// });

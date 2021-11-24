import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeleMazeService } from "src/app/shared/services/tele-maze.service";
import { SharedModule } from "src/app/shared/shared.module";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowCardComponent } from "src/app/shared/components/feature/show-card/show-card.component";

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientTestingModule
];

const COMPONENTS = [
    ShowCardComponent
];

@NgModule({
	imports: [
		...MODULES
	],
	exports: [
		...MODULES,
		...COMPONENTS
	],
	declarations: COMPONENTS,
	entryComponents: [
	],
	providers: [

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedTestingModule {
}

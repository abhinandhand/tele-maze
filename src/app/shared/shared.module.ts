import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/ui-components/button/button.component';
import { InputFieldComponent } from './components/ui-components/input-field/input-field.component';
import { HeaderComponent } from './components/ui-components/header/header.component';
import { ModalComponent } from './components/ui-components/modal/modal.component';
import { DialogComponent } from './components/ui-components/dialog/dialog.component';
import { DropdownComponent } from './components/ui-components/dropdown/dropdown.component';
import { RadioButtonComponent } from './components/ui-components/radio-button/radio-button.component';
import { ErrorNotFoundComponent } from './components/error/404/404.component';
import { LoaderComponent } from './components/ui-components/loader/loader.component';
import { ShowCardComponent } from './components/feature/show-card/show-card.component';
import { GenreShowListComponent } from './components/feature/genre-show-list/genre-show-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    HeaderComponent,
    ModalComponent,
    DialogComponent,
    DropdownComponent,
    RadioButtonComponent,
    ErrorNotFoundComponent,
    LoaderComponent,
    ShowCardComponent,
    GenreShowListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    LoaderComponent,
    GenreShowListComponent,
    ShowCardComponent
  ]
})
export class SharedModule { }

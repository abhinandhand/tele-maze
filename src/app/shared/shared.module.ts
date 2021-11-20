import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './components/error/404/404.component';
import { GenreShowListComponent } from './components/feature/genre-show-list/genre-show-list.component';
import { ShowCardComponent } from './components/feature/show-card/show-card.component';
import { ButtonComponent } from './components/ui-components/button/button.component';
import { DialogComponent } from './components/ui-components/dialog/dialog.component';
import { DropdownComponent } from './components/ui-components/dropdown/dropdown.component';
import { HeaderComponent } from './components/ui-components/header/header.component';
import { InputFieldComponent } from './components/ui-components/input-field/input-field.component';
import { LoaderComponent } from './components/ui-components/loader/loader.component';
import { ModalComponent } from './components/ui-components/modal/modal.component';
import { RadioButtonComponent } from './components/ui-components/radio-button/radio-button.component';
import { SearchFieldComponent } from './components/ui-components/search-field/search-field.component';
import { ImgFallbackDirective } from './directives/image-fall-back.directive';



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
    GenreShowListComponent,
    SearchFieldComponent,
    ImgFallbackDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    LoaderComponent,
    GenreShowListComponent,
    ShowCardComponent
  ]
})
export class SharedModule { }

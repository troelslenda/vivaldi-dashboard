import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

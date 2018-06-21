import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog'



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MarksCollectionComponent } from './marks-collection/marks-collection.component';
import { MarkComponent } from './mark/mark.component';


@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    MarksCollectionComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

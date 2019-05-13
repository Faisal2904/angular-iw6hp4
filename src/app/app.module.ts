import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShortenPipe } from './shorten.pipe';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// //import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFireAuthModule }  from 'angularfire2/auth';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpModule ,AngularFirestoreModule,AngularFireDatabaseModule, AngularFireModule],
  declarations: [ AppComponent, HelloComponent ,ShortenPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

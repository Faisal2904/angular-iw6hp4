import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShortenPipe } from './shorten.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpModule ],
  declarations: [ AppComponent, HelloComponent ,ShortenPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

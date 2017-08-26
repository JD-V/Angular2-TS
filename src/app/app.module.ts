import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({                      //decorator used for post processor
    imports: [BrowserModule],
    declarations: [AppComponent],   // Declaration is for registering all of app coponents 
    bootstrap: [AppComponent]   // tells compiler to start appcompoent at lauch . A collection of top level components that acts as an entry point of of app.


})       
export class AppModule {
    //meta data
    
}
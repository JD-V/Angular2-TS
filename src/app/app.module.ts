import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEntryService } from './backend';

@NgModule({                      //decorator used for post processor
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),
        FormsModule
    ],
    providers: [EntryService],
    declarations: [
        AppComponent,
        EntryComponent,         // Always put child component first
        EntryListComponent,
        EntryCommentFormComponent
    ],   // Declaration is for registering all of app coponents 
    bootstrap: [AppComponent]   // tells compiler to start appcompoent at lauch . A collection of top level components that acts as an entry point of of app.


})       
export class AppModule {
    //meta data
    
}
import { Component } from '@angular/core' //does some post processing to the class

@Component({
    selector:'app-root',
    templateUrl : './app.component.html',
    styleUrls : ['./app.component.css']     // can provide  multiple stylesheets
})
export class AppComponent {
    emoji: string[] = ['🎉', '😍', '😜', '👍']
    activeEmoji: string;

    ChangeEmoji() { 
        this.activeEmoji = this.emoji[Math.floor(Math.random()* this.emoji.length)];
    }
}
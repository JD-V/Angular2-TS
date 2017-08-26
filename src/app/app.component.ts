import { Component } from '@angular/core' //does some post processing to the class

@Component({
    selector:'app-root',
    template: `<h2>Hello World!</h2>`,
    styles: [
        `
        h2: {
            font-family: sans-serif;
            font-size:  12px;
        }
        `
    ]
})
export class AppComponent {

}
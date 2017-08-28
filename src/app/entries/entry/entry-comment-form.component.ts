import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// EventEmitter is a way to pass data between two components  
// One components send the data while other receives it.

// Viewchild lets component inspect the tempalte for local variables.
// and assign this local vaiables as member properties of the component

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string = "";
    comment:  string = "";
    @Output() onCommentAdded =  new EventEmitter<{name: string, comment: string}>();
    @ViewChild('commentForm') commentForm : NgForm;
    onSubmit( commentForm :  NgForm) {
        let comment = {name: this.name, comment: this.comment};
        this.onCommentAdded.emit(comment);
        this.commentForm.resetForm();
        //debugger; // debug point
    }
}
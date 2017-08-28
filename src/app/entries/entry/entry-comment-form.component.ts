import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';
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
    @Input() entryId : number;
    @Output() onCommentAdded =  new EventEmitter<{name: string, comment: string}>();
    @ViewChild('commentForm') commentForm : NgForm;

    constructor(private entryService: EntryService){};  //private will  make the property available in the instance of the class


    onSubmit( commentForm :  NgForm) {
        if(this.commentForm.invalid) return;
        let comment = {name: this.name, comment: this.comment};

        this.entryService.addComment(this.entryId,comment)
            .then(() =>{
                this.onCommentAdded.emit(comment);
                this.commentForm.resetForm();
            });
        
        //debugger; // debug point
    }
}
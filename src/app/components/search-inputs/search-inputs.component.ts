import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-inputs',
    templateUrl: './search-inputs.component.html',
    styleUrls: ['./search-inputs.component.css']
})
export class SearchInputsComponent implements OnInit {
    @Output() public bookNameSearchRequested = new EventEmitter<string>();
    @Output() public authorNameSearchRequested = new EventEmitter<string>();
    
    constructor() { }

    ngOnInit(): void { }

    onBookNameKeyup(event: any): void {
        this.bookNameSearchRequested!.emit(event.target.value);
    }

    onAuthorNameKeyup(event: any): void {
        this.authorNameSearchRequested!.emit(event.target.value);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-inputs',
    templateUrl: './search-inputs.component.html',
    styleUrls: ['./search-inputs.component.css']
})
export class SearchInputsComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

    onBookNameKeyup(event: any): void {
        console.log(event.target.value);
    }

    onAuthorNameKeyup(event: any): void {
        console.log(event.target.value);
    }
}

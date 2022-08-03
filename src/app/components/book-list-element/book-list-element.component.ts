import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '@/app/services/modal.service';
import BookVM from '@/app/viewmodels/BookVM';

@Component({
    selector: 'app-book-list-element',
    templateUrl: './book-list-element.component.html',
    styleUrls: ['./book-list-element.component.css']
})
export class BookListElementComponent implements OnInit {
    @Input() public book?: BookVM;

    constructor(private _modalService: ModalService) { }

    ngOnInit(): void { }

    openModal(id: string) {
        this._modalService.open(id);
    }

    closeModal(id: string) {
        this._modalService.close(id);
    }
}

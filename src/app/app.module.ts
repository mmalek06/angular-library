import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListElementComponent } from './components/book-list-element/book-list-element.component';
import { SearchInputsComponent } from './components/search-inputs/search-inputs.component';
import { DebounceKeyupDirective } from './directives/debounce-keyup.directive';
import { BorrowBookComponent } from './components/borrow-book/borrow-book.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookListElementComponent,
        SearchInputsComponent,
        DebounceKeyupDirective,
        BorrowBookComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

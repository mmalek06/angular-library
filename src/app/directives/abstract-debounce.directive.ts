import { Directive, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
  
@Directive()
export abstract class AbstractDebounceDirective implements OnDestroy {
    @Input() public debounceTime: number;
    @Output() public onEvent: EventEmitter<any>;
  
    protected _emitEvent: Subject<any>;
    protected _subscription: Subject<void>;
  
    constructor() {
        this.debounceTime = 500;
        this.onEvent = new EventEmitter<any>();
        this._emitEvent = new Subject<any>();
        this._subscription = new Subject<void>();
    }
  
    ngOnInit(): void {
        this._emitEvent
            .pipe(
                takeUntil(this._subscription),
                debounceTime(this.debounceTime),
                distinctUntilChanged(),
                tap(value => this.emitChange(value)))
            .subscribe();
    }
  
    public emitChange(value: any): void {
        this.onEvent.emit(value);
    }
  
    ngOnDestroy(): void {
        this._subscription.next();
        this._subscription.complete();
    }
  }
  
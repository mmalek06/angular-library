import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

import { fadeInOut } from '@/app/animations';
import { ModalService } from '@/app/services/modal.service';

const fadeInOutTime = 0.75;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [fadeInOut(fadeInOutTime)]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() public id: string;
    
    public isVisible: boolean = false;

    constructor(private modalService: ModalService, private el: ElementRef) {
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');

            return;
        }

        document.body.appendChild(this.el.nativeElement);
        this.el.nativeElement.addEventListener('click', (event: any) => {
            console.log(event);
            if (event.target.className === 'app-modal') {
                this.close();
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.el.nativeElement.remove();
    }

    open(): void {
        this.el.nativeElement.style.display = 'block';
        this.isVisible = true;

        document.body.classList.add('app-modal-open');
    }

    close(): void {
        this.isVisible = false;

        document.body.classList.remove('app-modal-open');
        setTimeout(() => this.el.nativeElement.style.display = 'none', fadeInOutTime * 1000);
    }
}

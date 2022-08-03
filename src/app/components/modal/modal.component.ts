import { fadeIn, fadeOut } from '@/app/animations';
import { ModalService } from '@/app/services/modal.service';
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [fadeIn, fadeOut]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() public id: string;
    
    public isVisible: boolean = false;

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');

            return;
        }

        document.body.appendChild(this.element);
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'app-modal') {
                this.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        this.isVisible = true;
        document.body.classList.add('app-modal-open');
    }

    close(): void {
        this.element.style.display = 'none';
        this.isVisible = false;
        document.body.classList.remove('app-modal-open');
    }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: '[app-message]',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @ViewChild('messageEl') messageEl: ElementRef | undefined;
    @Input() message: string | null = null;

    ngOnInit(): void {
        setTimeout(() => {
            this.messageEl?.nativeElement.classList.add('fade-out');
        }, 2000);
    }
}

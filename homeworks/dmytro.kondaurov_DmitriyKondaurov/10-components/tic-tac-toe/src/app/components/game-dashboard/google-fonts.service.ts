import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class GoogleFontsService {

    constructor(@Inject(DOCUMENT) private doc: Document) { }

    createLink() {
        const link1: HTMLLinkElement = this.doc.createElement('link');
        const link2: HTMLLinkElement = this.doc.createElement('link');
        link1.setAttribute('rel', 'preconnect');
        link2.setAttribute('rel', 'stylesheet');
        this.doc.head.appendChild(link1);
        link1.setAttribute('href', 'https://fonts.gstatic.com');
        this.doc.head.appendChild(link2);
        link2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
    }
}

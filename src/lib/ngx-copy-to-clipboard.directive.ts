import {
    Directive, ElementRef, HostListener, Input, EventEmitter,
    Output
} from '@angular/core';

@Directive({
    selector: '[copyToClipboard]'
})

export class CopyToClipboardDirective {
    /* tslint:disable:no-input-rename */
    @Input() public textToCopy: string = null;
    @Input() public successMessage: string = 'Succesfully copied';
    @Input() public errorMessage: string = 'Could not copy';
    @Output() public onCopyEvent: EventEmitter<string> = new EventEmitter();
    @Output() public onErrorEvent: EventEmitter<string> = new EventEmitter();
    /* tslint:enable */

    constructor(
        private elementRef: ElementRef) {
    }

    @HostListener('click', ['$event'])
    public onClick() {
        /* Get the text field */
        if (typeof document === 'undefined' || this.textToCopy == null) {
            this.onErrorEvent.emit(this.errorMessage);
            return;
        }
        let body = this.elementRef.nativeElement;
        let box = document.createElement('textarea');
        box.style.height = "0px";
        box.style.left = "-9999px";
        box.style.opacity = "0";
        box.style.position = "fixed";
        box.style.top = "-9999px";
        box.style.width = "0px";
        body.appendChild(box);
        // Set and select the value (creating an active Selection range).
        box.value = this.textToCopy;
        box.select();
        /* Copy the text inside the text field */
        document.execCommand('copy');
        body.removeChild(box);
        this.onCopyEvent.emit(this.successMessage);

    }

}
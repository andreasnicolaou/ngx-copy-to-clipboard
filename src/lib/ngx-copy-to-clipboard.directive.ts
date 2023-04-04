import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxCopyToClipboard]',
})
export class NgxCopyToClipboardDirective {
  @Input() public textToCopy = null;
  @Input() public successMessage = 'Succesfully copied';
  @Input() public errorMessage = 'Could not copy';
  @Output() public onCopyEvent: EventEmitter<string> = new EventEmitter();
  @Output() public onErrorEvent: EventEmitter<string> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  public onClick(): void {
    /* Get the text field */
    if (typeof document === 'undefined' || this.textToCopy == null) {
      this.onErrorEvent.emit(this.errorMessage);
      return;
    }
    const body = this.elementRef.nativeElement;
    const box = document.createElement('textarea');
    box.style.height = '0px';
    box.style.left = '-9999px';
    box.style.opacity = '0';
    box.style.position = 'fixed';
    box.style.top = '-9999px';
    box.style.width = '0px';
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

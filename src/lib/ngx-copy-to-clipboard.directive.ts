import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ngxCopyToClipboard]',
})
export class NgxCopyToClipboardDirective {
  @Input() public textToCopy: string | null = null; // Explicitly typing as string
  @Input() public successMessage = 'Successfully copied';
  @Input() public errorMessage = 'Could not copy';
  @Output() public readonly onCopyEvent: EventEmitter<string> = new EventEmitter();
  @Output() public readonly onErrorEvent: EventEmitter<string> = new EventEmitter();

  @HostListener('click', ['$event'])
  public async onClick(): Promise<void> {
    if (typeof document === 'undefined' || this.textToCopy == null) {
      this.onErrorEvent.emit(this.errorMessage);
      return;
    }
    try {
      await navigator.clipboard.writeText(this.textToCopy); // Using Clipboard API
      this.onCopyEvent.emit(this.successMessage);
    } catch (err) {
      this.onErrorEvent.emit(this.errorMessage);
    }
  }
}

import { NgModule } from '@angular/core';
import { CopyToClipboardDirective } from './ngx-copy-to-clipboard.directive';

@NgModule({
    declarations: [CopyToClipboardDirective],
    exports: [CopyToClipboardDirective]
})
export class NgxCopyToClipboardModule { }

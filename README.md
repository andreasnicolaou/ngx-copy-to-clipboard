# NgxCopyToClipboard

Click and copy to clipboard

<br><br>

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/@andreasnicolaou/ngx-copy-to-clipboard)
[![npm](https://img.shields.io/npm/dt/andreasnicolaou/ngx-copy-to-clipboard.svg)](https://www.npmjs.com/package/@andreasnicolaou/ngx-copy-to-clipboard)
[![npm](https://img.shields.io/npm/dm/andreasnicolaou/ngx-copy-to-clipboard.svg)](https://www.npmjs.com/package/@andreasnicolaou/ngx-copy-to-clipboard)

<br><br>

## Installation

#### 1. Install via NPM:

```shell
npm i --save @andreasnicolaou/ngx-copy-to-clipboard
```

#### 3. Import `NgxCopyToClipboardModule` into your app's root module
```typescript

import { NgxCopyToClipboardModule } from '@andreasnicolaou/ngx-copy-to-clipboard';

@NgModule({
  ...
  imports: [
    NgxCopyToClipboardModule
  ],
  ...
})
export class AppModule { }

```

<br><br>

| Inputs                    | Description                                                                         | 
| ------------------------- | ----------------------------------------------------------------------------------- | 
| `textToCopy`              | String Text to copy                                                                 | 
| `successMessage`          | On copy success message                                                             | 
| `errorMessage`            | On copy error message                                                               | 
| `onCopyEvent`             | On copy event get success message (has default message-ovverid)                     | 
| `onErrorEvent`            | On copy event get error message (has default message-ovverid)                       | 

#### Example
```typescript
    const val = 'Hello World!';

    public onSuccess(ev: string){
        console.log(ev);
    }

     public onError(ev: string){
        console.log(ev);
    }

```
```html
    <button copyToClipboard [textToCopy]="val" [successMessage]="'Copied to Clipboard'" [errorMessage]="'Not copied to Clipboard'"
     (onCopyEvent)="onSuccess($event)" (onErrorEvent)="onError($event)">Copy</button>
```

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/andreasnicolaou/ngx-copy-to-clipboard/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:

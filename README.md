# NgxCopyToClipboard

Click and copy to your clipboard fast

<br>

## Why is there a need Copy to clipboard?

> The "Copy to clipboard" directive is a useful feature that allows users to quickly and easily duplicate content from one location and paste it into another. It is particularly useful when working with text, as it eliminates the need to manually retype or reformat content.

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/@andreasnicolaou/ngx-copy-to-clipboard)

<br>

## Installation

#### 1. Install via NPM:

```shell
npm i --save @andreasnicolaou/ngx-copy-to-clipboard
```

#### 2. Import `NgxCopyToClipboardModule` into your app's root module or common module
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

<br>

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
    <button ngxCopyToClipboard [textToCopy]="val" [successMessage]="'Copied to Clipboard'" [errorMessage]="'Not copied to Clipboard'"
     (onCopyEvent)="onSuccess($event)" (onErrorEvent)="onError($event)">Copy</button>
```

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/andreasnicolaou/ngx-copy-to-clipboard/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:

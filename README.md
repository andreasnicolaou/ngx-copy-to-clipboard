# NgxCopyToClipboard

**Click to copy** — a fast, lightweight Angular directive to copy text to the clipboard using the modern Clipboard API.

![GitHub contributors](https://img.shields.io/github/contributors/andreasnicolaou/ngx-copy-to-clipboard)
![GitHub License](https://img.shields.io/github/license/andreasnicolaou/ngx-copy-to-clipboard)
![GitHub package.json version](https://img.shields.io/github/package-json/v/andreasnicolaou/ngx-copy-to-clipboard)
![NPM Downloads](https://img.shields.io/npm/dm/%40andreasnicolaou%2Fngx-copy-to-clipboard)

## Why Is Copy to Clipboard Useful?

> The **ngxCopyToClipboard** directive provides a seamless way for users to quickly copy content without the need to manually select or retype it. This is especially useful in forms, code snippets, confirmation flows, and other UI/UX scenarios where content needs to be reused.

## Installation

#### 1. Install via NPM:

```bash
npm i --save @andreasnicolaou/ngx-copy-to-clipboard
```

#### 2. Import the Directive Based on Your Angular Version

🟢 **For Angular 15+ (Standalone Projects)**

You can directly import the directive into any standalone component:

```typescript
import { NgxCopyToClipboardDirective } from '@andreasnicolaou/ngx-copy-to-clipboard';

@Component({
  standalone: true,
  selector: 'your-component',
  imports: [NgxCopyToClipboardDirective],
  templateUrl: './your-component.html',
})
export class YourComponent {}
```

🟠 **For Angular <15 or Module-Based Projects**

Use the provided NgxCopyToClipboardModule:

```typescript
import { NgxCopyToClipboardModule } from '@andreasnicolaou/ngx-copy-to-clipboard';

@NgModule({
  declarations: [],
  imports: [NgxCopyToClipboardModule],
  exports: [],
})
export class YourModule {}
```

> 💡 Note: If you're using Angular 15+ but prefer NgModule-based architecture, you can also use the module wrapper for compatibility.

### ✨ **Want to Add Toast Notifications?**

If you’d like to show toasts or notifications when a user copies content, check out my **brand new lightweight library** — [@andreasnicolaou/toastify](https://www.npmjs.com/package/@andreasnicolaou/toastify). It integrates seamlessly and helps you display stylish, customizable toasts with minimal setup!

## API Reference

| Name             | Type                   | Description                                                                    |
| ---------------- | ---------------------- | ------------------------------------------------------------------------------ |
| `textToCopy`     | `string`               | Text value to be copied to the clipboard.                                      |
| `successMessage` | `string`               | Optional message emitted on successful copy. Default: `'Successfully copied'`. |
| `errorMessage`   | `string`               | Optional message emitted on copy failure. Default: `'Could not copy'`.         |
| `onCopyEvent`    | `EventEmitter<string>` | Emits `successMessage` when copying succeeds.                                  |
| `onErrorEvent`   | `EventEmitter<string>` | Emits `errorMessage` when copying fails.                                       |

#### Example Usage

_In the component:_

```typescript
  const val = 'Hello World!';

  public onSuccess(ev: string){
      console.log(ev);
  }

    public onError(ev: string){
      console.log(ev);
  }

```

_In the template:_

```html
<button
  ngxCopyToClipboard
  [textToCopy]="val"
  [successMessage]="'Copied to Clipboard'"
  [errorMessage]="'Not copied to Clipboard'"
  (onCopyEvent)="onSuccess($event)"
  (onErrorEvent)="onError($event)"
>
  Copy
</button>
```

## Contribution

- **Having an issue**? or looking for support? [Open an issue](https://github.com/andreasnicolaou/ngx-copy-to-clipboard/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project

If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:

import { Component } from '@angular/core';

const template = `<h1>
  {{title}}
</h1>`

@Component({
  selector: 'app-root',
  template: template
})
export class AppComponent {
  title = 'app works!';
}

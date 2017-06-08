import {
  Component, OnInit, AfterViewInit, Input,
  Output, ChangeDetectionStrategy
} from '@angular/core';

const template: string = `
<div class="note">
  <textarea class ="noteText" name="note" spellcheck="false">
    Save The Date !!
    3 July 2017
  </textarea>
</div>
`
@Component({
  selector: 'sticky-note',
  template: template
})
export class StickyNoteComponent {

  constructor() {
  
  }


}


import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    console.log('test')
    if (this.newOnomatopia.trim() !== '') {
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      console.log(this.newOnomatopia)
      this.newOnomatopia = '';
    }
  }

}

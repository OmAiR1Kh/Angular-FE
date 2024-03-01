import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  @Input() hideShow: boolean = false;

  @Input() handleHide() {
    this.hideShow = true;
  }
}

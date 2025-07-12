import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() firstname: string = ''
  @Input() lastname: string = ''
  @Input() age: number = 0
  @Input() birthdate: string = ''
  @Input() email: string = ''
  @Input() phone: string = ''
  @Input() username: string = ''
  @Input() password: string = ''
}

import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name: string | undefined;
  // @Input({ required: true }) nameUser!: string;
}

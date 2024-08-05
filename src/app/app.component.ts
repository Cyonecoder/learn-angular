import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  userid?: string;
  onSelectUser(id: string) {
    this.userid = id;
  }
  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id == this.userid);
  }
}

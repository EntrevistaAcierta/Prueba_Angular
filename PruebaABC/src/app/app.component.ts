import { User } from './user';
import { Component } from '@angular/core';
import { Services } from './services';
import { TestBed } from '@angular/core/testing';
import { constructor } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestABC';
  users: User[];
  user: User;




  constructor(private services: Services) {
    this.user = {
      id: '12345',
      name: 'test',
      telefono: '1234567',
      correo: 'test@test.com',
      tokenFirebase: '12345543'
    };
  }

  // tslint:disable-next-line:align
  getUsers(){
    return this.services.gerUsers().subscribe(response => response = this.users = response);
  }

  // tslint:disable-next-line:align
  setUser() {
    return this.services.saveUser(this.user).subscribe(response => response = response);
  }

  deleteUser(){
    return this.services.deleteUser(this.user.id).subscribe(response => response = response);
  }

}

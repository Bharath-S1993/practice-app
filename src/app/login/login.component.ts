import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private userSrv: UserService) { }

  ngOnInit() {
  }

  onSave() {
    this.userSrv.saveUSer(this.user).then((res: any) => {
      console.log(res.data);

    })
  }

}

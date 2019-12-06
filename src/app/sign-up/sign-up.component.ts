import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  constructor(private router: Router,
    private userSrv: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.userSrv.saveUSer(this.user).then((res: any) => {
      console.log(res.data);
      this.router.navigate(['']);
    })


  }

}

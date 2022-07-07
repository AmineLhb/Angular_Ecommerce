import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user:User = new User(0,"","","","","");
  constructor(private userService: RegisterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.userRegister();
    });
  }

  userRegister(){
    console.log(this.user)
    this.userService.registerUser(this.user).subscribe(data => {
      alert("Register Successfully!")
    },error=>alert("Enter valid information!"))
  }
}


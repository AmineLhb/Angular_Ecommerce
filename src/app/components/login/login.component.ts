import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User(0,"","","","","");
  id:number = 0;
  constructor(private userService: LoginService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.userLogin();
    });
  }

  userLogin(){
    console.log(this.user)
    const hasid:boolean=this.route.snapshot.paramMap.has('id');
    if(hasid){
      this.userService.loginUser(this.user,this.id).subscribe(data => {
          this.id=Number(this.route.snapshot.paramMap.get('id')) ;
          alert("Login Successfully!")
    },error=>alert("Enter valid information!"))};
  }

  // userLogin(){
  //   const hasid:boolean=this.route.snapshot.paramMap.has('id');
  //   if(hasid){
  //     this.id=Number(this.route.snapshot.paramMap.get('id')) ;
  //     this.userService.loginUser(this.id).subscribe(
  //       data=>{
  //         this.user=data;
  //         alert("Login Successfully!")
  //       },error=>alert("Enter valid information!")
  //     );
  //   }
  // }
}

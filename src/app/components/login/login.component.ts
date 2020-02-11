import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import {NgModule}  from '@angular/core';
import {FormsModule} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username:String;
  public password:Number;
  public type:String;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 1234 && this.type == "ADMIN"){
     this.router.navigate(["/admin"]);
    }else if(this.username == 'company' && this.password == 1234 && this.type == "COMPANY"){
      this.router.navigate(["/company"]);
    }else if(this.username == 'customer' && this.password == 1234 && this.type == "CUSTOMER"){
      this.router.navigate(["/customer"]);
    } else{
      alert("Invalid credentials");
    }
  }
  }



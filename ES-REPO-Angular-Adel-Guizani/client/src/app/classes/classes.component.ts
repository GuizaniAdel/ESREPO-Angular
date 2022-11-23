import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  inputValue = '';
  socialUser: SocialUser = new SocialUser;
  isLoggedin: boolean = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router, private api: ApiService) { }

  searchForm = new FormGroup({
    query: new FormControl('')
  })

  ngOnInit(): void {

  }





}


import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoading = false;

  constructor(private routerr: Router, private router: LocationStrategy, private route: ActivatedRoute, private api: ApiService) {
    this.routerr.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

  }
  feedback = [];

  add = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    messages: new FormControl('', Validators.required),
  })
  addData() {
    console.log();

    this.api.addNewMessage(this.add.value).subscribe((res: any) => {
      console.log(res);

      alert("votre message a été envoyé avec succès \n Nous apprécions vos commentaires!");
      document.location.href = 'https://es-repo.herokuapp.com/home';


    }, (err: any) => {
      console.log(err);

    })

  }



}

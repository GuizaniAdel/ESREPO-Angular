import { LocationStrategy } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  name: any;
  id: any;
  matieres: any;
  cours: any;
  searchText: any;
  isLoading = true;
  searchForm = new FormGroup({
    query: new FormControl('')
  })
  constructor(private router: LocationStrategy, private route: ActivatedRoute, private api: ApiService) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name;

    console.log(this.name);
    console.log(this.id);



    this.getMatiereDetails();


  }
  getMatiereDetails() {
    this.api.getCoursById(this.name).toPromise().then((res: any) => {
      console.log(res);
      this.cours = res;
      this.isLoading = false

    }).catch((err) => {

    })
  }

}




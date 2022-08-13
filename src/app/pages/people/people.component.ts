import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  data: any;
  people: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPeople(1);
  }

  loadPeople(page: number) {
    this.http
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res;
        this.people = res.results;
        this.people[3].viewMore = true;
        console.log(this.people);
      });
  }
  viewMoreListener(data:any){
    console.log("dd")
    console.log(data)

  }
}

import { Component, OnInit } from '@angular/core'; 


@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss']
})

export class OutcomePage implements OnInit {

  constructor() { }

  myFunction(){
    console.log('Hello World!')
  }

  ngOnInit() {
  this.myFunction();

  }

}

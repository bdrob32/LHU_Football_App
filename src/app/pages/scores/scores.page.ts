import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  constructor() { }

  runNpmStart(){
    console.info("npm run start1")
  }


  ngOnInit() {
  }

}

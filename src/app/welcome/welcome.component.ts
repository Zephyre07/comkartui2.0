import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public pageTitle: string = 'HOME';
  public imagePath: string= 'assets/images/home.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

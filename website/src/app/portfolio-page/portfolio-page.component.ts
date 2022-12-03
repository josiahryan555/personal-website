import { Component, OnInit } from '@angular/core';
export interface PortfolioCard {
  title: string;
  description: string;
  image: string;
  subtitle?: string;
}
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public portfolioCardList: PortfolioCard[] = [
    {
      title: 'Graphic Design ARTS 255 Project',
      description: 'Here is my "Grid Love" project! It was an 8-week-long process to design this 60 page publication.',
      image: 'https://chemtexplc.co/wp-content/uploads/2018/07/Green_square.svg_.png',
    },
    {
      title: 'Audio Production',
      description: 'I was involved in all phases of recording this album from microphone setup, to recording, to editing.',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
    }
  ]

}

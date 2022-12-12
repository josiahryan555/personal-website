import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() subtitle: string = "";
  @Input() cardImage: string = "";
  @Input() contentLink: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}

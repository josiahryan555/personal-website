import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() subtitle: string = "";
  @Input() image: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}

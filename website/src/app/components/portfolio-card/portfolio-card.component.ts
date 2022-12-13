import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() cardIndex: string = '';


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToProjInfoPage() {
    this.router.navigateByUrl(`proj-info/${this.cardIndex}`)
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proj-info-page',
  templateUrl: './proj-info-page.component.html',
  styleUrls: ['./proj-info-page.component.scss']
})
export class ProjInfoPageComponent implements OnInit {
  @Input() detailImg1: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, PortfolioInfo} from 'src/app/data.service';


@Component({
  selector: 'app-proj-info-page',
  templateUrl: './proj-info-page.component.html',
  styleUrls: ['./proj-info-page.component.scss']
})
export class ProjInfoPageComponent implements OnInit {
  @Input() detailImg1: string = "";   /// remove

  public id: number = -1;
  public project?: PortfolioInfo 

  // follow slide 39 week9

  constructor(
    private actRt: ActivatedRoute,
    private data_s: DataService
  ) { }


  ngOnInit(): void {
    this.id = Number(this.actRt.snapshot.paramMap.get('id'));
    console.log(' ', this.id);
    
    this.project = this.data_s.getPortfolioInfo()[this.id]
    //console.log(this.data_s.getPortfolioInfo()[this.id]);
    
    
    
    
    // call dataservice to get the info for this project based on the id.
  }

}

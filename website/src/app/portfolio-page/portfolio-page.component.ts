import { Component, OnInit } from '@angular/core';
export interface PortfolioCard {
  title: string;
  description: string;
  image: string;
  content?: string;
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
      title: 'Grace & Adelyn // Studio Recording and Audio Documentary',
      description: 'Two classmates and I produced this project, which includes four songs featuring Grace Lunger and Adelyn Rousch as well as short "behind the scenes" audio documentaries. I worked on all stages of the process, from microphone selection and setup, to field and studio recording, to editing.',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
      content: "https://soundcloud.com/user-110165580/sets/adelyn-grace/s-hTJozYcyvzH?si=734d16e88d514dbcbe7203bb4d9348f6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: 'Grid Love // Graphic Design Publication',
      description: 'Grid Love was an eight-week long process where I designed a sixty page publication. I used grid structures, in horizontal, vertical, and diagonal orientations, to inform my designs and create visually compelling compositions.',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
      content: "https://drive.google.com/file/d/1azm9QRV6dVySiLb0JTSHPTu-f6f47Of_/view?usp=sharing",
    },
    {
      title: 'Bitmap Typeface // Graphic Design ',
      description: 'For this project, I designed a typeface using a grid of pixels. First, I drew the letters by hand on graph paper and then transferred them to a digital format. I created rules to keep the characters consistent, and designed posters where I auditioned words and paragraphs using the typeface.',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
      content: "https://drive.google.com/file/d/1Lz214KSnJ78sGRTft0BA9KEtF3_UskAb/view?usp=sharing",
    },
    {
      title: 'Abbey Vankooten // Artist Spotlight Video',
      description: 'I created this short video highlighting Abbey Vankooten, who is a visual artist. She talks about her artwork, the processes she uses, and what inspires her to create.',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
      content: "https://drive.google.com/file/d/1ILaIViLagw4jx0LryXMH5RQlqRNtE7xw/view?usp=sharing",
    },
    {
      title: 'Inside Out Clinical Nutrition // Informational Video',
      description: 'I made this video for Inside Out Clinical Nutrition for new patients to watch before coming to their first appointment. Dr. John Ressler shares what he does and explains what at typical nutrition appointment looks like. ',
      image: "https://www.clker.com/cliparts/R/l/l/L/T/2/yellow-square-hi.png",
      content: "https://youtu.be/WZ2gwvLDhuw",
    }
  ]

}

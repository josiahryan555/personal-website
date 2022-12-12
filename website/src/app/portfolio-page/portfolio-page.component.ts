import { Component, OnInit } from '@angular/core';
export interface PortfolioInfo {
  title: string;
  description: string;
  image: string;
  content?: string;
  subtitle?: string;
  date?: string;
  details?: string;
  detailImg1?: string;
  detailImg2?: string;
  detailImg3?: string;



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

  public portfolioCardList: PortfolioInfo[] = [
    {
      title: 'Grace & Adelyn // Studio Recording & Audio Documentary',
      description: 'Grace Lunger, Trevor Sparks and I produced this project, which includes four songs featuring Grace Lunger and Adelyn Rousch as well as short "behind the scenes" audio documentaries. I worked on all stages of the process, from microphone selection and setup, to field and studio recording, to editing.',
      image: "assets/imgs/adelynAndGrace.PNG",
      content: "https://soundcloud.com/user-110165580/sets/adelyn-grace/s-hTJozYcyvzH?si=734d16e88d514dbcbe7203bb4d9348f6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: 'Grid Love // Graphic Design Publication',
      description: 'Grid Love was an eight-week long process where I designed a sixty page publication. I used grid structures, in horizontal, vertical, and diagonal orientations, to inform my designs and create visually compelling compositions.',
      image: "assets/imgs/GridLove.PNG",
      content: "https://drive.google.com/file/d/1azm9QRV6dVySiLb0JTSHPTu-f6f47Of_/view?usp=sharing",
      date: "October 2022",
      details: 'Grid Love is an eight week long process, which concludes with this publication. This project was broken down into manageable steps, beginning with strict parameters, and gradually expanding as we gained experience working with grids.< br > <br> First, we populated nine horizontal grids with content.We were restricted to black and white, which allowed us to focus solely on how to group content and create a sense of hierarchy and flow. Next, we created twelve grids with both horizontal and vertical orientations.Color was introduced in this phase. Finally, we populated twelve diagonal grids, which could include imagery and color. < br > <br>At the beginning of the project, my grids looked similar to the grid thumbnails.As I learned more about hierarchy, grouping, and alignment of elements, the original thumbnails started to dissapear.It was fun to experiement with the different ways that changing text size, color, weight, and orientation start to bring hierarchy and cohesion to a composition.These strategies have helped me make decisions which aim to bring a clear sense of visual flow to the design.< br > <br>"How do I make this easily navigable for the viewer?" is the question that has shaped how I approached each grid and this publication as a whole.It prompts me to think about ways to bring the eye through a composition and indicate a sense of direction through stop and end points, grouping elements, and aligning elements to the gestures of letters.Throughout this process, I think that my decision making has improved, but I also recognize that I have a lot more to learn.I hope you enjoy!<br><br>Click the link below to see the full project:',
      detailImg1: "assets/imgs/gridLoveDetailImg2.PNG",
      detailImg2: "assets/imgs/gridLoveDetailImg1.PNG",
      detailImg3: "assets/imgs/gridLoveDetailImg3.PNG",

    },
    {
      title: 'Abbey Vankooten // Artist Spotlight Video',
      description: 'I created this short video highlighting Abbey Vankooten, who is a visual artist. She talks about her artwork, the processes she uses, and what inspires her to create.',
      image: "assets/imgs/abbyArt.jpg",
      content: "https://drive.google.com/file/d/1ILaIViLagw4jx0LryXMH5RQlqRNtE7xw/view?usp=sharing",
    },
    {
      title: 'Bitmap Typeface // Graphic Design ',
      description: 'For this project, I designed a typeface using a grid of pixels. First, I drew the letters by hand on graph paper and then transferred them to a digital format. I created rules to keep the characters consistent, and designed posters where I auditioned words and paragraphs using the typeface.',
      image: "assets/imgs/bitmapType.PNG",
      content: "https://drive.google.com/file/d/1Lz214KSnJ78sGRTft0BA9KEtF3_UskAb/view?usp=sharing",
    },
    {
      title: 'Inside Out Clinical Nutrition // Informational Video',
      description: 'I made this video for Inside Out Clinical Nutrition for new patients to watch before coming to their first appointment. Dr. John Ressler shares what he does and explains what at typical nutrition appointment looks like. ',
      image: "assets/imgs/insideOutLogo.png",
      content: "https://youtu.be/WZ2gwvLDhuw",
    }
  ]

}

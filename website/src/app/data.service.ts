import { Injectable } from '@angular/core';
export interface PortfolioInfo {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  contentLink: string;
  projTitle: string;
  projDate: string;
  projDescription?: string;
  projImg1?: string;
  projImg2?: string;
  projImg3?: string;
  projImg4?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private portfolioCardList: PortfolioInfo[] = [
    {
      cardTitle: 'Grace & Adelyn // Studio Recording & Audio Documentary',
      cardDescription: 'Grace Lunger, Trevor Sparks and I produced this project, which includes four songs featuring Grace Lunger and Adelyn Rousch as well as short "behind the scenes" audio documentaries. I worked on all stages of the process, from microphone selection and setup, to field and studio recording, to editing.',
      cardImage: "assets/imgs/adelynAndGrace.PNG",
      contentLink: "https://soundcloud.com/user-110165580/sets/adelyn-grace/s-hTJozYcyvzH?si=734d16e88d514dbcbe7203bb4d9348f6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      projTitle: "Grace & Adelyn",
      projDate: "May 2022",
      projDescription: 'I worked on this project with two other classmates, Grace Lunger and Trevor Sparks. Grace Lunger and Adelyn Rousch covered four songs including “Train Song” (Vashti Bunyan), "Leaving on a Jet Plane" (Peter, Paul, and Mary), "Tennessee River Runs Low" (The Secret Sisters), and "Death of a Phone Call" (Whatever, Dad). We also included short audio documentaries to introduce the first three songs, and a longer “meet the artists” audio documentary before the final song. I worked on all stages of this project and gained valuable experience selecting and setting up microphones, capturing quality field and studio recordings, editing content into a cohesive narrative, and mixing audio using Pro Tools. I enjoyed each stage of this process and would love to work on more audio production projects in the future if I have the opportunity! Click the link below to see the full project: ',
      projImg1: "",
      projImg2: "",
      projImg3: "assets/imgs/audioImg1.jpg",
      projImg4: "",
    },
    {
      cardTitle: 'Grid Love // Graphic Design Publication',
      cardDescription: 'Grid Love was an eight-week long process where I designed a sixty page publication. I used grid structures, in horizontal, vertical, and diagonal orientations, to inform my designs and create visually compelling compositions.',
      cardImage: "assets/imgs/GridLove.PNG",
      contentLink: "https://drive.google.com/file/d/1azm9QRV6dVySiLb0JTSHPTu-f6f47Of_/view?usp=sharing",
      projTitle: "Grid Love",
      projDate: "October 2022",
      projDescription: 'Grid Love is an eight week long process, which concludes with this sixty page publication. This project was broken down into manageable steps, beginning with strict parameters, and gradually expanding as we gained experience working with grids. First, we populated nine horizontal grids with content.We were restricted to black and white, which allowed us to focus solely on how to group content and create a sense of hierarchy and flow. Next, we created twelve grids with both horizontal and vertical orientations.Color was introduced in this phase. Finally, we populated twelve diagonal grids, which could include imagery and color. At the beginning of the project, my grids looked similar to the grid thumbnails.As I learned more about hierarchy, grouping, and alignment of elements, the original thumbnails started to dissapear.It was fun to experiement with the different ways that changing text size, color, weight, and orientation start to bring hierarchy and cohesion to a composition.These strategies have helped me make decisions which aim to bring a clear sense of visual flow to the design. "How do I make this easily navigable for the viewer?" is the question that has shaped how I approached each grid and this publication as a whole.It prompts me to think about ways to bring the eye through a composition and indicate a sense of direction through stop and end points, grouping elements, and aligning elements to the gestures of letters.Throughout this process, I think that my decision making has improved, but I also recognize that I have a lot more to learn.I hope you enjoy! Click the link below to see the full project:',
      projImg1: "assets/imgs/gridLoveDetailImg2.PNG",
      projImg2: "assets/imgs/gridLoveDetailImg1.PNG",
      projImg3: "assets/imgs/gridLoveDetailImg3.PNG",
      projImg4: "assets/imgs/gridLoveDetailImg4.PNG",
    },
    {
      cardTitle: 'Abbey Vankooten // Artist Spotlight Video',
      cardDescription: 'I created this short video highlighting Abbey Vankooten, who is a visual artist. She talks about her artwork, the processes she uses, and what inspires her to create.',
      cardImage: "assets/imgs/abbyArt.jpg",
      contentLink: "https://drive.google.com/file/d/1ILaIViLagw4jx0LryXMH5RQlqRNtE7xw/view?usp=sharing",
      projTitle: "Abbey Vankooten, Artist",
      projDescription: 'I filmed and edited this video which highlights Abbey Vankooten, who is a visual artist. For this project, I filmed the interview from two angles, used three-point lighting, and recorded quality audio which I synced with the video in the editing phase. I filmed b-roll footage of Abby painting and included images of her artwork throughout the piece. I gained experience editing together a cohesive story that highlights Abby’s life, artwork, process, and what inspires her to create. Click the link below to see the full project:',
      projDate: 'November 2021',
      projImg1: "assets/imgs/abbyImg1.jpg",
      projImg2: "",
      projImg3: "assets/imgs/abbyImg3.jpg",
      projImg4: "assets/imgs/abbyImg4.jpg",
    },
    {
      cardTitle: 'Bitmap Typeface // Graphic Design ',
      cardDescription: 'For this project, I designed a typeface using a grid of pixels. First, I drew the letters by hand on graph paper and then transferred them to a digital format. I created rules to keep the characters consistent, and designed posters where I auditioned words and paragraphs using the typeface.',
      cardImage: "assets/imgs/bitmapType.PNG",
      contentLink: "https://drive.google.com/file/d/1Lz214KSnJ78sGRTft0BA9KEtF3_UskAb/view?usp=sharing",
      projTitle: "Bitmap Typeface",
      projDate: "November 2022",
      projDescription: 'For this project, I designed a full typeface using a grid of pixels. The process began by drawing each character by hand on graph paper. I established rules for the typeface to follow so that the characters were consistent and easily navigable. For example, the uppercase letters are always 22 pixels high, and the lowercase extenders are seven pixels high. While doing this, it was apparent that there needed to be outliers to this rule, so I created secondary rules that applied to some characters. From here, I transferred the characters to a digital format and began auditioning words and sentences in the typeface. Through this process, I created posters to display the typeface in a cohesive way that showcases how it could be used. Click the link below to see the full project:',
      projImg1: "assets/imgs/bitmapImg1.png",
      projImg2: "",
      projImg3: "assets/imgs/bitmapImg2.png",
      projImg4: "assets/imgs/bitmapImg3.png",
    },
    {
      cardTitle: 'Inside Out Clinical Nutrition // Informational Video',
      cardDescription: 'I made this video for Inside Out Clinical Nutrition for new patients to watch before coming to their first appointment. Dr. John Ressler shares what he does and explains what a typical nutrition appointment looks like. ',
      cardImage: "assets/imgs/insideOutLogo.png",
      contentLink: "https://youtu.be/WZ2gwvLDhuw",
      projTitle: "Inside Out Clinical Nutrition",
      projDate: "August 2022",
      projDescription: 'I filmed and edited this video for Inside Out Clinical Nutrition, which they share with new patients before their first visit. Doctor John Ressler explains what he does and what new patients can expect at their first appointment. Filming and editing content in a business context was a new experience for me and I am grateful for the valuable skills I learned through this opportunity. Click the link below to see the full project:',
      projImg1: "",
      projImg2: "",
      projImg3: "assets/imgs/JohnImg1.png",
      projImg4: "",
    }
  ];

  constructor() { }

  getPortfolioInfo(): PortfolioInfo[] {
    return this.portfolioCardList;
  }
}

import { Component } from '@angular/core';
import { ISiteInfo } from '../isite-info';
import { ICategories } from '../icategories';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

 siteInfo: ISiteInfo = {
  name: "عدسة",
  tagline: "عالم التصوير الفوتوغرافي",
  description: "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.",
  email: "hello@adasah.com",
  social: {
    twitter: "https://twitter.com/adasah",
    github: "https://github.com/adasah",
    linkedin: "https://linkedin.com/company/adasah",
    youtube: "https://youtube.com/@adasah"
  }
};


  categories:ICategories[]=[
    { "name": "إضاءة", "count": 4, "color": "emerald" ,route:"lighting"},
    { "name": "بورتريه", "count": 6, "color": "purple",route:"portrait" },
    { "name": "مناظر طبيعية", "count": 4, "color": "blue",route:"nautralLandscapes" },
    { "name": "تقنيات", "count": 9, "color": "orange",route:"technologies" },
    { "name": "معدات", "count": 5, "color": "emerald" ,route:"equipment"}
  ]
}

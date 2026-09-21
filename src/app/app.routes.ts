import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { WildComponent } from './wild/wild.component';
import { LightingComponent } from './lighting/lighting.component';
import { NaturalLandscapesComponent } from './natural-landscapes/natural-landscapes.component';
import { PortraitComponent } from './portrait/portrait.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { MasteringGoldenHourPhotographyComponent } from './mastering-golden-hour-photography/mastering-golden-hour-photography.component';
import { LandscapePhotographyGuideComponent } from './landscape-photography-guide/landscape-photography-guide.component';
import { PortraitPhotographySecretsComponent } from './portrait-photography-secrets/portrait-photography-secrets.component';
import { CameraSettingsBasicsComponent } from './camera-settings-basics/camera-settings-basics.component';
import { MobilePhotographyTipsComponent } from './mobile-photography-tips/mobile-photography-tips.component';
import { PhotoCompositionRulesComponent } from './photo-composition-rules/photo-composition-rules.component';
import { NightPhotographyTechniquesComponent } from './night-photography-techniques/night-photography-techniques.component';
import { LongExposurePhotographyComponent } from './long-exposure-photography/long-exposure-photography.component';
import { FlashPhotographyBasicsComponent } from './flash-photography-basics/flash-photography-basics.component';
import { StreetPhotographyGuideComponent } from './street-photography-guide/street-photography-guide.component';
import { WeddingPhotographyGuideComponent } from './wedding-photography-guide/wedding-photography-guide.component';
import { SportsActionPhotographyComponent } from './sports-action-photography/sports-action-photography.component';
import { NewbornBabyPhotographyComponent } from './newborn-baby-photography/newborn-baby-photography.component';
import { SelfPortraitPhotographyComponent } from './self-portrait-photography/self-portrait-photography.component';
import { WildlifePhotographyTipsComponent } from './wildlife-photography-tips/wildlife-photography-tips.component';
import { ArchitecturePhotographyComponent } from './architecture-photography/architecture-photography.component';
import { TravelPhotographyTipsComponent } from './travel-photography-tips/travel-photography-tips.component';
import { PhotoEditingLightroomComponent } from './photo-editing-lightroom/photo-editing-lightroom.component';
import { DronePhotographyBasicsComponent } from './drone-photography-basics/drone-photography-basics.component';
import { RawVsJpegExplainedComponent } from './raw-vs-jpeg-explained/raw-vs-jpeg-explained.component';
import { LensGuideBeginnersComponent } from './lens-guide-beginners/lens-guide-beginners.component';
import { FoodPhotographyBasicsComponent } from './food-photography-basics/food-photography-basics.component';
import { BlackWhitePhotographyComponent } from './black-white-photography/black-white-photography.component';
import { MacroPhotographyWorldComponent } from './macro-photography-world/macro-photography-world.component';
import { ProductPhotographyEssentialsComponent } from './product-photography-essentials/product-photography-essentials.component';
import { ColorTheoryPhotographyComponent } from './color-theory-photography/color-theory-photography.component';
import { RealEstatePhotographyComponent } from './real-estate-photography/real-estate-photography.component';
import { MinimalistPhotographyComponent } from './minimalist-photography/minimalist-photography.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'allBlogs', pathMatch: 'full' },
      { path: 'allBlogs', component: AllBlogsComponent },
      { path: 'lighting', component: LightingComponent },
      { path: 'nautralLandscapes', component: NaturalLandscapesComponent },
      { path: 'portrait', component: PortraitComponent },
      { path: 'technologies', component: TechnologiesComponent },
      { path: 'equipment', component: EquipmentComponent },
    ],
  },
  { path: 'mastering-golden-hour-photography', component: MasteringGoldenHourPhotographyComponent },
  { path: 'landscape-photography-guide', component: LandscapePhotographyGuideComponent },
  { path: 'portrait-photography-secrets', component: PortraitPhotographySecretsComponent },
  { path: 'camera-settings-basics', component: CameraSettingsBasicsComponent },
  { path: 'mobile-photography-tips', component: MobilePhotographyTipsComponent },
  { path: 'photo-composition-rules', component: PhotoCompositionRulesComponent },
  { path: 'night-photography-techniques', component: NightPhotographyTechniquesComponent },
  { path: 'long-exposure-photography', component: LongExposurePhotographyComponent },
  { path: 'flash-photography-basics', component: FlashPhotographyBasicsComponent },
  { path: 'street-photography-guide', component: StreetPhotographyGuideComponent },
  {path:'wedding-photography-guide',component:WeddingPhotographyGuideComponent},
  {path:'sports-action-photography',component:SportsActionPhotographyComponent},
  {path:'newborn-baby-photography',component:NewbornBabyPhotographyComponent},
  {path:'self-portrait-photography',component:SelfPortraitPhotographyComponent},
  {path:'wildlife-photography-tips',component:WildlifePhotographyTipsComponent},
  {path:'architecture-photography',component:ArchitecturePhotographyComponent},
  {path:'travel-photography-tips',component:TravelPhotographyTipsComponent},
  {path:'photo-editing-lightroom',component:PhotoEditingLightroomComponent},
  {path:'drone-photography-basics',component:DronePhotographyBasicsComponent},
  {path:'raw-vs-jpeg-explained',component:RawVsJpegExplainedComponent},
  {path:'lens-guide-beginners',component:LensGuideBeginnersComponent},
  {path:'food-photography-basics',component:FoodPhotographyBasicsComponent},
  {path:'black-white-photography',component:BlackWhitePhotographyComponent},
  {path:'macro-photography-world',component:MacroPhotographyWorldComponent},
  {path:'product-photography-essentials',component:ProductPhotographyEssentialsComponent},
  {path:'color-theory-photography',component:ColorTheoryPhotographyComponent},
  {path:'real-estate-photography',component:RealEstatePhotographyComponent},
  {path:'minimalist-photography',component:MinimalistPhotographyComponent},
  { path: 'whoarewe', component: WhoareweComponent },
  { path: '**', component: WildComponent },
];

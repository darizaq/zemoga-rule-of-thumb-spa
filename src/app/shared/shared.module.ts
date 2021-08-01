import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BannerMainComponent } from './components/banner-main/banner-main.component';
import { BannerSupplementalComponent } from './components/banner-supplemental/banner-supplemental.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaugeBarComponent } from './components/gauge-bar/gauge-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PollComponent } from './components/poll/poll.component';
import { RulingCardComponent } from './components/ruling-card/ruling-card.component';
import { RulingsComponent } from './components/rulings/rulings.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [
    BannerMainComponent,
    BannerSupplementalComponent,
    FeaturedCardComponent,
    FooterComponent,
    GaugeBarComponent,
    HeaderComponent,
    NavigationComponent,
    PollComponent,
    RulingCardComponent,
    RulingsComponent,
    SelectComponent
  ],
  exports: [
    BannerMainComponent,
    BannerSupplementalComponent,
    FeaturedCardComponent,
    FooterComponent,
    GaugeBarComponent,
    HeaderComponent,
    NavigationComponent,
    PollComponent,
    RulingCardComponent,
    RulingsComponent,
    SelectComponent
  ]
})
export class SharedModule {}

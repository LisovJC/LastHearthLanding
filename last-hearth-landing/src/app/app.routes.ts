import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewsDetailedComponent } from './news/news-detailed/news-detailed.component';
import { RulesComponent } from './rules/rules.component';
import { HomeComponent } from './home/home.component';
import { TitlesComponent } from './titles/titles.component';
import { MarketComponent } from './market/market.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'rules', component: RulesComponent },
            { path: 'titles', component: TitlesComponent },
            { path: 'market', component: MarketComponent }
        ]
    },
]

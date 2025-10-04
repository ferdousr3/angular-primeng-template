import { Component } from '@angular/core'
import {
    FeatureSectionComponent,
    HeroSectionComponent,
} from '../../../../libs/home'

@Component({
    selector: 'app-page-home',
    imports: [HeroSectionComponent, FeatureSectionComponent],
    templateUrl: './page-home.component.html',
    styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}

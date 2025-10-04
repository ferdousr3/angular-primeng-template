import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DATA } from '../../../../assets/data/data'

@Component({
    selector: 'app-public-header',
    imports: [CommonModule],
    templateUrl: './public-header.component.html',
    styleUrl: './public-header.component.css',
})
export class PublicHeaderComponent {
    data = DATA
}

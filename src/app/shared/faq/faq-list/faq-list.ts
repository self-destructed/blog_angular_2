import { Component, input } from '@angular/core'
import { FaqItem } from '../../../core/types/faq-item.type'
import { FaqItemComponent } from '../faq-item/faq-item'
import { AccordionModule } from 'primeng/accordion'

@Component({
  selector: 'app-faq-list',
  imports: [FaqItemComponent, AccordionModule],
  templateUrl: './faq-list.html',
  styles: ``
})
export class FaqListComponent {
  public readonly items = input.required<FaqItem[]>()
}

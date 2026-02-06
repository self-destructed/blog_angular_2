import { Component, input } from '@angular/core'
import { FaqItem } from '../../core/types/faq-item.type'
import { FaqItemComponent } from './faq-item/faq-item'

@Component({
  selector: 'app-faq',
  imports: [FaqItemComponent],
  templateUrl: './faq.html',
  styles: ``
})
export class FaqComponent {
  public readonly items = input.required<FaqItem[]>()
}

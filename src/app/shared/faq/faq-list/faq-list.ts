import { Component, input } from '@angular/core'
import { FaqItem } from '../../../core/types/faq-item.type'
import { FaqItemComponent } from '../faq-item/faq-item'

@Component({
  selector: 'app-faq-list',
  imports: [FaqItemComponent],
  templateUrl: './faq-list.html',
  styles: ``
})
export class FaqListComponent {
  public readonly items = input.required<FaqItem[]>()
}

import { Component, input } from '@angular/core'
import { FaqItem } from '../../../core/types/faq-item.type'
import {
  AccordionContent,
  AccordionHeader,
  AccordionPanel
} from 'primeng/accordion'

@Component({
  selector: 'app-faq-item',
  imports: [AccordionPanel, AccordionHeader, AccordionContent],
  templateUrl: './faq-item.html'
})
export class FaqItemComponent {
  public readonly faqItem = input.required<FaqItem>()
  public readonly id = input<string>()
}

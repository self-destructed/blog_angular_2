import { Component, input } from '@angular/core'
import { FaqItem } from '../../../core/types/faq-item.type'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionPanel
} from 'primeng/accordion'

@Component({
  selector: 'app-faq-list',
  imports: [Accordion, AccordionPanel, AccordionHeader, AccordionContent],
  templateUrl: './faq-list.html',
  styles: ``
})
export class FaqListComponent {
  public readonly items = input.required<FaqItem[]>()
}

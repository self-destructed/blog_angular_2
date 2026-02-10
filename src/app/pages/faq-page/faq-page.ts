import { Component } from '@angular/core'
import { FaqItem } from '../../core/types/faq-item.type'
import { FaqListComponent } from '../../shared/faq/faq-list/faq-list'
import { RouterLink } from '@angular/router'
import { faqMockData } from '../../core/constants/faq.const'

@Component({
  selector: 'app-faq',
  imports: [FaqListComponent, RouterLink],
  templateUrl: './faq-page.html',
  styles: ``
})
export class FaqPageComponent {
  public readonly faqListData: FaqItem[] = faqMockData
}

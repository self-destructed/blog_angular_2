import { Component, input, model } from '@angular/core'
import { FaqItem } from '../../../core/types/faq-item.type'

@Component({
  selector: 'app-faq-item',
  imports: [],
  templateUrl: './faq-item.html'
})
export class FaqItemComponent {
  public readonly faqItem = input.required<FaqItem>()
  public expanded = model<boolean>(false)

  public toggle() {
    this.expanded.update((v) => !v)
  }
}

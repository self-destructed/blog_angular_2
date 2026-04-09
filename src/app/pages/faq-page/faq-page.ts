import { Component, inject } from '@angular/core'
import { FaqService } from '../../core/services/faq.service'
import { FaqListComponent } from '../../shared/faq/faq-list/faq-list'
import { RouterLink } from '@angular/router'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-faq',
  imports: [FaqListComponent, RouterLink],
  templateUrl: './faq-page.html',
  styles: ``
})
export class FaqPageComponent {
  private faqService = inject(FaqService)

  public readonly faqListData = toSignal(this.faqService.getFaq(), {
    initialValue: []
  })
}

import { Injectable } from '@angular/core'
import { Observable, delay, of } from 'rxjs'
import { FaqItem } from '../types/faq-item.type'
import { faqMockData } from '../constants/faq.const'

@Injectable({ providedIn: 'root' })
export class FaqService {
  getFaq(): Observable<FaqItem[]> {
    return of(faqMockData).pipe(delay(500))
  }
}

import { Component } from '@angular/core'
import { FaqItem } from '../../core/types/faq-item.type'
import { FaqComponent } from '../../shared/faq/faq'

@Component({
  selector: 'app-faq',
  imports: [FaqComponent],
  templateUrl: './faq.html',
  styles: ``
})
export class FaqPageComponent {
  public readonly faqMockData: FaqItem[] = [
    {
      question: 'is there have any option for write blog?',
      answer:
        'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about'
    },
    {
      question: 'can i change my plan later?',
      answer:
        'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about'
    },
    {
      question: 'Did you come here for something in particular?',
      answer:
        'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about'
    },
    {
      question: 'is there have any option for write blog?',
      answer:
        'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about'
    },
    {
      question: 'something in particular or just general Riker-bashing?',
      answer:
        'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about'
    }
  ]
}

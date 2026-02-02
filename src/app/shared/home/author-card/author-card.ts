import { Component, computed, input } from '@angular/core'
import { Author } from '../../../core/types/author'

@Component({
  selector: 'app-author-card',
  imports: [],
  templateUrl: './author-card.html',
  styles: ``
})
export class AuthorCard {
  public author = input.required<Author>()

  public fullName = computed(
    () => `${this.author().name} ${this.author().surname}`
  )
}

import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar'

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined

  ngOnInit() {
    this.items = [
      {
        label: 'Homepages',
        items: [
          {
            label: 'Home 1',
            routerLink: '/home_1'
          },
          {
            label: 'Home 2',
            routerLink: '/home_2'
          },
          {
            label: 'Home 3',
            routerLink: '/home_3'
          },
          {
            label: 'Home 4',
            routerLink: '/home_4'
          }
        ]
      },
      {
        label: 'About',
        routerLink: '/about'
      },
      {
        label: 'Categories',
        routerLink: '/categories'
      },
      {
        label: 'Pages',
        items: [
          { label: 'FAQ', routerLink: '/faq' },
          { label: '404', routerLink: '/not_found' }
        ]
      }
    ]
  }
}

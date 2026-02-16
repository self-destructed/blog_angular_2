import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './shared/header/header'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

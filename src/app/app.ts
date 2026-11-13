import { Component } from '@angular/core';
import { ClubFans } from './club-fans/club-fans';

@Component({
  selector: 'app-root',
  imports: [ClubFans],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

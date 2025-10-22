import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
import { Component, OnInit, HostListener } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  stats: any[] = [];
  team: any[] = [];
  values: any[] = [];
  showScroll = false;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getStats().subscribe((data) => (this.stats = data));
    this.aboutService.getTeam().subscribe((data) => (this.team = data));
    this.aboutService.getValues().subscribe((data) => (this.values = data));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showScroll = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss']
})
export class BadgeComponent implements OnInit {
  @Input() variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default';
  @Input() text: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Apply base and variant styles manually (no ngClass)
    const badge = this.el.nativeElement.querySelector('.badge');
    if (!badge) return;

    badge.classList.add('badge-base');

    switch (this.variant) {
      case 'secondary':
        badge.classList.add('badge-secondary');
        break;
      case 'destructive':
        badge.classList.add('badge-destructive');
        break;
      case 'outline':
        badge.classList.add('badge-outline');
        break;
      default:
        badge.classList.add('badge-default');
    }
  }
}

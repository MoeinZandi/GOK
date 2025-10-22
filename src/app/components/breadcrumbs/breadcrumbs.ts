import { Component, Input, OnInit } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: BreadcrumbItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  // Simulate navigation manually (no routerLink)
  goTo(url: string): void {
    window.location.href = url;
  }
}

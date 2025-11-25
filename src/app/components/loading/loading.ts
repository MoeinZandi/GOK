import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss']
})
export class LoadingComponent {
  // keep this component stateless — parent shows/hides it via @if()
}

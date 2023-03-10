import { Component, HostBinding, Input } from '@angular/core';
import { BoolInput } from 'neercms/shared/types';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  @Input() pageTitle!: string;
  @Input() @HostBinding('class.short-mode') short: BoolInput = false;
}

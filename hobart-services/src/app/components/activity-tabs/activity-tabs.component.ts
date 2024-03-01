import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-tabs',
  templateUrl: './activity-tabs.component.html',
  styleUrls: ['./activity-tabs.component.css'],
})
export class ActivityTabsComponent {
  @Input() innerTab: string = 'active';
  @Input() click: (e: string) => void = () => {};
  @Input() showAdd: () => void = () => {};
}

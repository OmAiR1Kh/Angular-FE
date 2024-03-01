import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-activity-tabs',
  templateUrl: './activity-tabs.component.html',
  styleUrls: ['./activity-tabs.component.css'],
})
export class ActivityTabsComponent {
  @Input() innerTab: string = 'active';
  @Input() click: (e: string) => void = () => {};
  @Input() showAdd: () => void = () => {};
  @Input() downloadAll: () => void = () => {};
  @Input() downloadShown: () => void = () => {};
  @Input() headers: Array<string> = [''];
  @Input() showSettingsF: () => void = () => {};
  @Output() headersSelected = new EventEmitter<string[]>();

  showSettings: boolean = false;

  showValues: boolean = false;

  clickInput() {
    document.getElementById('importCsv')?.click();
  }

  logToConsole(event: any) {
    console.log(event.target.files);
  }
}

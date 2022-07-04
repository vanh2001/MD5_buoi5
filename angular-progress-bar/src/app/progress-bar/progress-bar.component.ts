import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor() { }

  ngOnInit() {
    this.loading();
  }

  loading() {
    const interval = setInterval(() => {
      this.progress = +this.progress + 5;
      // tslint:disable-next-line:triple-equals
      if (this.progress == 100) {
        clearInterval(interval);
        alert('chạy thành công!');
      }
    }, 1000);
  }
}

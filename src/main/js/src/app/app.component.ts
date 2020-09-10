import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Parts Browser';

  public constructor(private titleService: Title) {}

  ngOnInit() {
    this.setTitle("Auto Parts Browser");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

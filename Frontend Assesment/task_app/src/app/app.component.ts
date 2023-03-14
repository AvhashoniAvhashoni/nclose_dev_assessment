import { Component } from '@angular/core';
import { IpService } from './service/ip/ip.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;

  constructor(private _ipService: IpService) {
    this.title = 'NClose';
    // log the users ip on console when the app renders 
    // 'pipe(take(1))' takes the first response from the observable
    this._ipService.getIP.pipe(take(1)).subscribe(ipRes => {
      console.log(ipRes.ip);
    });
  }
}

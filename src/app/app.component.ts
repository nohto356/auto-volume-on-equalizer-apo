import { Component } from '@angular/core';
import { VolumeControllerOnEqualizerAPOService } from './common/service/volume-controller-on-equalizer-apo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    _volumeController: VolumeControllerOnEqualizerAPOService
  ) {

  }
}

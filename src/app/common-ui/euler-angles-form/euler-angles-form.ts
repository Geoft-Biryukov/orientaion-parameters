import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EulerAnglesConverterService } from '../../data/services/euler-angles-converter-service';
import { EulerAngles } from '../../data/interfaces/euler-angles.interface';
import { Quaternion } from '../../data/interfaces/quaternion.interface';

@Component({
  selector: 'app-euler-angles-form',
  imports: [FormsModule],
  templateUrl: './euler-angles-form.html',
  styleUrl: './euler-angles-form.scss',
})
export class EulerAnglesForm {
  
  lambda: Quaternion = { w: 1, x: 0, y: 0, z: 0 }

  angles: EulerAngles = { psi: 0, theta: 0, phi: 0, units: 0 }

  cdr = inject(ChangeDetectorRef)

  anglesConverter: EulerAnglesConverterService = new EulerAnglesConverterService()

  onSubmit() {
    console.log('onSubmit')
    console.log(this.angles)       

    this.anglesConverter.convertEulerAngles(this.angles)
      .subscribe(value => {
        console.log(value)
        this.lambda = value
        this.cdr.markForCheck();
      });
  }

}

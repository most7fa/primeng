import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccessibleComponent } from './components/accessible/accessible';
import { AccessibleCheckboxComponent } from './components/accessible-checkbox/accessible-checkbox';
import { AutocompleteComponent } from './components/autocomplete/autocomplete';
import { ButtonIconsComponent } from './components/button-icons/button-icons';
import { CardFormComponent } from './components/card-form/card-form';
import { CascadeselectComponent } from './components/cascadeselect/cascadeselect';
import { ClickedComponent } from './components/clicked/clicked';
import { ColorComponent } from './components/color/color';
import { CustomIconImageComponent } from './components/custom-icon-image/custom-icon-image';
import { DatepickerComponent } from './components/datepicker/datepicker';
import { Drawer } from './components/drawer/drawer';
import { FileUploadComponent } from './components/file-upload/file-upload';
import { FloatLabelComponent } from './components/float-label/float-label';
import { HtmlCheckbox } from './components/html-checkbox/html-checkbox';
import { InputOtpComponent } from './components/input-otp/input-otp';
import { InputToUsernameComponent } from './components/input-to-username/input-to-username';
import { KnobComponent } from './components/knob/knob';
import { OverlayAnimationComponent } from './components/overlay-animation/overlay-animation';
import { ProgrammaticComponent } from './components/programmatic/programmatic';
import { RadioButtonComponent } from './components/radio-button/radio-button';
import { RatingComponent } from './components/rating/rating';
import { SelectButtonComponent } from './components/select-button/select-button';
import { SemanticHtml } from './components/semantic-html/semantic-html';
import { Size } from './components/size/size';
import { SliderComponent } from './components/slider/slider';
import { SpeedDialComponent } from './components/speed-dial/speed-dial';
import { SpinComponent } from './components/spin/spin';
import { TextareaComponent } from './components/textarea/textarea';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AccessibleComponent, AccessibleCheckboxComponent, AutocompleteComponent, ButtonIconsComponent,
    CardFormComponent, CascadeselectComponent, ClickedComponent, ColorComponent,
    CustomIconImageComponent, DatepickerComponent, Drawer, FileUploadComponent, FloatLabelComponent,
    HtmlCheckbox, InputOtpComponent, InputToUsernameComponent, KnobComponent,
    OverlayAnimationComponent, ProgrammaticComponent, RadioButtonComponent, RatingComponent,
    SelectButtonComponent, SemanticHtml, Size, SliderComponent, SpeedDialComponent,
    SpinComponent, TextareaComponent
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {}

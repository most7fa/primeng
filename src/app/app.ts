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
import { Accordion } from './components/accordion/accordion';
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
import { Tabs } from './components/tabs/tabs';
import { Timeline } from './components/timeline/timeline';
import { Stepper } from './components/stepper/stepper';
import { Tree } from './components/tree/tree';
import { Galleria } from './components/galleria/galleria';
import { AvatarComponent } from './components/avatar/avatar';
import { BadgeComponent } from './components/badge/badge';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog';
import { DialogComponent } from './components/dialog/dialog';
import { MultiSelectComponent } from './components/multi-select/multi-select';
import { MenubarComponent } from './components/menubar/menubar';
import { PanelMenuComponent } from './components/panel-menu/panel-menu';
import { ContextMenuComponent } from './components/context-menu/context-menu';
import { MegaMenuComponent } from './components/mega-menu/mega-menu';
import { OrganizationChartComponent } from './components/organization-chart/organization-chart';
import { TerminalComponent } from './components/terminal/terminal';
import { PickListComponent } from './components/pick-list/pick-list';
import { OrderListComponent } from './components/order-list/order-list';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner';
import { ImageCompareComponent } from './components/image-compare/image-compare';
import { InplaceComponent } from './components/inplace/inplace';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';
import { VirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller';
import { SplitterComponent } from './components/splitter/splitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AccessibleComponent, AccessibleCheckboxComponent, AutocompleteComponent, ButtonIconsComponent,
    CardFormComponent, CascadeselectComponent, ClickedComponent, ColorComponent,
    CustomIconImageComponent, DatepickerComponent, Drawer, Accordion, FileUploadComponent, FloatLabelComponent,
    HtmlCheckbox, InputOtpComponent, InputToUsernameComponent, KnobComponent,
    OverlayAnimationComponent, ProgrammaticComponent, RadioButtonComponent, RatingComponent,
    SelectButtonComponent, SemanticHtml, Size, SliderComponent, SpeedDialComponent,
    SpinComponent, TextareaComponent, Tabs, Timeline, Stepper, Tree, Galleria, AvatarComponent, 
    BadgeComponent, BreadcrumbComponent, ConfirmDialogComponent, DialogComponent, MultiSelectComponent,
    MenubarComponent, PanelMenuComponent, ContextMenuComponent, MegaMenuComponent, OrganizationChartComponent,
    TerminalComponent, PickListComponent, OrderListComponent, ProgressSpinnerComponent, ImageCompareComponent,
    InplaceComponent, ScrollTopComponent, VirtualScrollerComponent, SplitterComponent, 
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {}

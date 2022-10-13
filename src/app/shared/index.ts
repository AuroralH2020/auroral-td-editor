import { ButtonComponent } from "./components/buttons/button/button.component";
import { FormFieldComponent } from "./components/inputs/form-field/form-field.component";
import { HyperlinkComponent } from "./components/misc/hyperlink/hyperlink.component";
import { LogoComponent } from "./components/misc/logo/logo.component";

export const components: any[] = [
    ButtonComponent,
    FormFieldComponent,
    HyperlinkComponent,
    LogoComponent
];

export const directives: any[] = [];

export const pipes: any[] = [];

export * from './components/buttons/button/button.component';
export * from './components/inputs/form-field/form-field.component';
export * from './components/misc/hyperlink/hyperlink.component';
export * from './components/misc/logo/logo.component';

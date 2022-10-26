import { ButtonComponent } from "./components/buttons/button/button.component";
import { FormFieldComponent } from "./components/inputs/form-field/form-field.component";
import { HyperlinkComponent } from "./components/misc/hyperlink/hyperlink.component";
import { LogoComponent } from "./components/misc/logo/logo.component";
import { TableComponent } from './components/table/table.component';
import { AvatarComponent } from './components/misc/avatar/avatar.component';
import { ItemPictogramComponent } from './components/misc/item-pictogram/item-pictogram.component';

export const components: any[] = [
    ButtonComponent,
    FormFieldComponent,
    HyperlinkComponent,
    LogoComponent,
    TableComponent,
    AvatarComponent,
    ItemPictogramComponent,
];

export const directives: any[] = [];

export const pipes: any[] = [];


export * from './components/buttons/button/button.component';
export * from './components/inputs/form-field/form-field.component';
export * from './components/misc/hyperlink/hyperlink.component';
export * from './components/misc/logo/logo.component';
export * from './components/table/table.component';
export * from './components/misc/avatar/avatar.component';
export * from './components/misc/item-pictogram/item-pictogram.component';

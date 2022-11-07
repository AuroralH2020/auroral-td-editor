import { ButtonComponent } from "./components/buttons/button/button.component";
import { FormFieldComponent } from "./components/inputs/form-field/form-field.component";
import { HyperlinkComponent } from "./components/misc/hyperlink/hyperlink.component";
import { LogoComponent } from "./components/misc/logo/logo.component";
import { TableComponent } from "./components/table/table.component";
import { AvatarComponent } from "./components/misc/avatar/avatar.component";
import { TabGroupComponent } from "./components/tabs/tab-group/tab-group.component";
import { TabComponent } from "./components/tabs/tab/tab.component";

export const components: any[] = [
  ButtonComponent,
  FormFieldComponent,
  HyperlinkComponent,
  LogoComponent,
  TableComponent,
  AvatarComponent,
  TabGroupComponent,
  TabComponent,
];

export const directives: any[] = [];

export const pipes: any[] = [];

export * from "./components/tabs/tab-group/tab-group.component";
export * from "./components/tabs/tab/tab.component";
export * from "./components/buttons/button/button.component";
export * from "./components/inputs/form-field/form-field.component";
export * from "./components/misc/hyperlink/hyperlink.component";
export * from "./components/misc/logo/logo.component";
export * from "./components/table/table.component";
export * from "./components/misc/avatar/avatar.component";

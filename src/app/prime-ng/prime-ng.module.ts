import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InputTextModule } from 'primeng/inputtext'
import { TabViewModule } from 'primeng/tabview'
import { FieldsetModule } from 'primeng/fieldset'
import { PasswordModule } from 'primeng/password'
import { MultiSelectModule } from 'primeng/multiselect'
import { CheckboxModule } from 'primeng/checkbox'
import { TagModule } from 'primeng/tag'
import { InputSwitchModule } from 'primeng/inputswitch'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { RadioButtonModule } from 'primeng/radiobutton'
import { DialogModule } from 'primeng/dialog'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { AvatarModule } from 'primeng/avatar'
import { SidebarModule } from 'primeng/sidebar'
import { CardModule } from 'primeng/card'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { TooltipModule } from 'primeng/tooltip'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    TabViewModule,
    FieldsetModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    TagModule,
    InputSwitchModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DialogModule,
    DynamicDialogModule,
    AvatarModule,
    SidebarModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    InputTextareaModule,
    ScrollTopModule,
  ],
  exports: [
    InputTextModule,
    TabViewModule,
    FieldsetModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    TagModule,
    InputSwitchModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DialogModule,
    DynamicDialogModule,
    AvatarModule,
    SidebarModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    InputTextareaModule,
    ScrollTopModule,
  ],
})
export class PrimeNgModule {}

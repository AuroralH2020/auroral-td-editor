import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { Clipboard } from '@angular/cdk/clipboard'
import * as ace from 'ace-builds'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-edit-td',
  templateUrl: './edit-td.component.html',
  styleUrls: ['./edit-td.component.scss'],
})
export class EditTdComponent implements AfterViewInit {
  td?: string

  @ViewChild('editor') private editor!: ElementRef<HTMLElement>

  constructor(
    private _snackbar: SnackBarService,
    private _clipboard: Clipboard,
    private _config: DynamicDialogConfig,
    private _ref: DynamicDialogRef
  ) {
    const td = _config.data?.td
    if (td) {
      this.td = JSON.stringify(td, null, 2)
    }
  }

  ngAfterViewInit(): void {
    if (this.td) {
      ace.config.set('fontSize', '14px')
      ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
      const aceEditor = ace.edit(this.editor.nativeElement)
      aceEditor.session.setValue(this.td)
      // aceEditor.setTheme('ace/theme/kuroir')
      aceEditor.container.style.borderRadius = '8px'
      aceEditor.setOption("printMargin", 100)
      aceEditor.session.setMode('ace/mode/json')
      aceEditor.on("change", () => {
        this.td = aceEditor.getValue()

      });
    }
  }

  async onCopy() {
    if (this.td) {
      this._clipboard.copy(this.td)
      this._snackbar.showMessage('TD copied to clipboard')
    }
  }

  close() {
    this._ref.close()
  }
}

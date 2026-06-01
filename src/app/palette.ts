import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisuallyJsModule } from '@visuallyjs/browser-ui-angular';
import { BrowserElement } from "@visuallyjs/browser-ui"
import { NODE_TYPES, resolveNodeType } from './constants';

@Component({
  selector: 'supply-chain-palette',
  imports: [CommonModule, VisuallyJsModule],
  template: `
    <div vjs-palette class="vjs-supply-chain-palette" [dataGenerator]="dataGenerator">
      <div *ngFor="let nt of nodeTypes"
           [attr.data-vjs-type]="nt.type"
           title="Drag to add new"
           class="vjs-supply-chain-palette-item"
           [style.--node-color]="nt.color">
        <div class="vjs-supply-chain-item-header">{{ nt.type.toUpperCase() }}</div>
      </div>
    </div>
  `,
  standalone: true
})
export class SupplyChainPaletteComponent {
  nodeTypes = NODE_TYPES;

  dataGenerator = (el: BrowserElement) => {
    const type = el.getAttribute("data-vjs-type");
    const nodeType = resolveNodeType(type!);
    return {
      type,
      name: nodeType?.label || ""
    };
  }
}

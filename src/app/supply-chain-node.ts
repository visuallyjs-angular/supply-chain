import { Component, Input, computed } from '@angular/core';
import { resolveNodeColor } from './constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'supply-chain-node',
  imports: [CommonModule],
  template: `
    <div [style.--node-color]="color()" data-vjs-target="true" class="vjs-supply-chain-node">
      <div class="vjs-supply-chain-node-type">{{ data?.type?.toUpperCase() }}</div>
      <div style="font-size: 14px">{{ data?.name || data?.label }}</div>
      <div class="vjs-connect" data-vjs-source="true"></div>
    </div>
  `,
  standalone: true
})
export class SupplyChainNodeComponent {
  @Input() data: any;
  @Input() model: any;
  @Input() obj: any;

  color = computed(() => resolveNodeColor(this.data?.type));
}

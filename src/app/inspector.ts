import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import { Node, Edge } from '@visuallyjs/browser-ui';

@Component({
  selector: 'supply-chain-inspector',
  imports: [CommonModule, VisuallyJsModule],
  template: `
    <div class="vjs-supply-chain-inspector">
      @if(currentObjectType === NODE) {
        <label>Name:</label>
        <input type="text" vjs-att="name" placeholder="name"/>
      } @else if (currentObjectType === EDGE) {
        <label>Value</label>
        <input type="text" vjs-att="value" vjs-datatype="integer"/>
        <label>Transit Mode</label>
        <select vjs-att="transitMode">
          <option value="Air">Air</option>
          <option value="Sea">Sea</option>
          <option value="Road">Road</option>
        </select>
        <label>Carrier</label>
        <select vjs-att="carrier">
          <option value="Maersk">Maersk</option>
          <option value="DHL">DHL</option>
          <option value="FedEx">FedEx</option>
          <option value="UPS">UPS</option>
          <option value="DBCargo">DBCargo</option>
          <option value="Emirates">Emirates</option>
        </select>
      }

    </div>
  `,
  standalone: true
})
export class SupplyChainInspectorComponent extends InspectorComponent {
  nodeType = Node.objectType;
  edgeType = Edge.objectType;
}

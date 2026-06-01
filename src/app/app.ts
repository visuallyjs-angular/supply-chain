import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisuallyJsModule } from '@visuallyjs/browser-ui-angular';
import { EVENT_TAP, SankeyOptions } from '@visuallyjs/browser-ui';
import renderOptions from './render-options';
import modelOptions from './model-options';
import viewOptions from './view-options';
import { resolveNodeColor } from './constants';
import { SupplyChainNodeComponent } from './supply-chain-node';
import { SupplyChainPaletteComponent } from './palette';
import { SupplyChainInspectorComponent } from './inspector';



@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    VisuallyJsModule,
    SupplyChainPaletteComponent,
    SupplyChainInspectorComponent
  ],
  templateUrl: './app.html',
  standalone: true
  // ,
  // providers:[VisuallyJsService]
})
export class App {
  pivotProperty = '';
  renderOptions = renderOptions;
  modelOptions = modelOptions
  viewOptions = viewOptions;

  sankeyOptions:SankeyOptions = {
    labelProperty: "name",
    linkColorStrategy: "source",
    colorGenerator: {
      generate: (obj: any) => resolveNodeColor(obj.type)
    }
  };
}

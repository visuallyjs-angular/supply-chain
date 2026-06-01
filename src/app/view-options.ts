import {SupplyChainNodeComponent} from './supply-chain-node';
import {EVENT_TAP,EdgeEventCallbackPayload} from '@visuallyjs/browser-ui';
import {AngularViewOptions} from '@visuallyjs/browser-ui-angular';

const viewOptions:AngularViewOptions = {
  nodes: {
    default: {
      component: SupplyChainNodeComponent
    }
  },
  edges: {
    default: {
      targetMarker: "PlainArrow",
      events: {
        "tap": (p:EdgeEventCallbackPayload) => {
          p.model.setSelection(p.obj)
        }
      }
    }
  }
}

export default viewOptions

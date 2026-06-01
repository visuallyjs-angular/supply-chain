### Supply Chain Demo

This demo illustrates a supply chain management dashboard using VisuallyJS in an Angular application.

#### How it works

The demo integrates a geographic or logical supply chain view using `vjs-surface` with a flow-based analysis view using `vjs-sankey-chart`. This combination allows users to see both the structure and the volume of the supply chain.

#### Components Used

- `vjs-surface`: Used for the high-level supply chain structure view.
- `vjs-sankey-chart`: Used for analyzing the flow of goods and materials through the supply chain.
- `vjs-controls`: Standard navigation controls for the surface view.

#### Component Options

The components are configured with specific options:
- `vjs-surface`: Uses specialized view and render options to display warehouses, transport routes, and status indicators.
- `vjs-sankey-chart`: Configured to display flow volumes between different stages of the supply chain.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```

# gatsby-plugin-makerwidget

> Loads the [Maker Widget](https://makerwidget.com) Script on your Gatsby website

See a live demo on [my website](https://akshaykadam.me)

## Install

`npm install --save gatsby-plugin-makerwidget`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-makerwidget`,
    options: {
      // Set position of widget
      position: `right`,
      // Specify widget id
      widget: `2hc0aqfnigsyxkf5-aewnonydaddchdgj-vwoc6njlwhycxyw6`
    }
  }
];
```

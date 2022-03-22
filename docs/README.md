📢 Use this project, [contribute](https://github.com/vtex-apps/pickup-selector) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Pickup point selector

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The pickup point selector app adds a block where the client can add a product to cart and select a pickup point for it with the same action. The list of options is created by running a simulation using the selected SKU and the zipcode the client inputed.

> 🚨 Warning: This app should only be used inside the product page, since one of its dependencies is the product-context

## Configuration

You can follow the steps to configure the app on your store theme

### 1. Install the app in your workspace and account `vtex install vtex.pickup-selector`

### 2. Add the app as a theme dependency in the `manifest.json` file;

```json
  "peerDependencies": {
    "vtex.pickup-selector": "1.x"
  }
```

Now, you are able to use all the blocks exported by the pickup-selector app. Check out the full list below:

| Block name                                          | Description                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pickup-selector`                                   | Main block                                                                                     |
| `pickup-selector-zipcode-input`                     | Shows the zipcode input                                                                        |
| `pickup-selector-search-sla-button`                 | Button used to search the pickup SLA options based on the zipcode inputed and the selected SKU |
| `pickup-selector-sla-list`                          | List that shows the card with the pickup options avaiable                                      |
| `pickup-selector-option-card`                       | Card with the pickup option information                                                        |
| `pickup-selector-option-card-pickup-point-name`     | Pickup point name                                                                              |
| `pickup-selector-option-card-pickup-point-address`  | Pickup point address                                                                           |
| `pickup-selector-option-card-pickup-point-distance` | Pickup point distance(in Km)                                                                   |
| `pickup-selector-option-card-pickup-point-sla`      | Pickup point SLA                                                                               |
| `pickup-selector-option-card-add-product-button`    | Button that will add the product to cart and select the pickup point                           |

Also, some of the blocks accepts props as describe below:

### `pickup-selector-option-card-pickup-point-distance` props

| Prop name        | Type     | Description                                                                                                                                          | Default value |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `distanceSystem` | `string` | This props is used to calculated the distance that the block shows, it accepts `metric` (shows distance in Km) and `imperial` (shows distance in Mi) | `metric`      |

### `pickup-selector-option-card-add-product-button` props

| Prop name            | Type      | Description                                                                                                                                                                                                                                                                                       | Default value |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `customPixelEventId` | `string`  | **Should only be used with [minicart.v2](https://github.com/vtex-apps/minicart)**. Define the id for the event that will be sent by the the button upon user interaction. Should be the same id configured on minicart.v2 so that the drawer opens on successfully adding the product to the cart | `undefined`   |
| `showToastFeedback`  | `boolean` | This props is a fallback to give support for minicart.v1. This will show a toast with feedback on successfully adding the product to the cart                                                                                                                                                     | `false`       |

### 2. Add the main block;

Declare the app's main block in a given theme template or inside another block from the theme.

```json
  "pickup-selector": {
    "children": [
      "pickup-selector-zipcode-input",
      "pickup-selector-search-sla-button",
      "pickup-selector-sla-list"
    ]
  }
```

> ℹ️ Note that the blocks `pickup-selector-zipcode-input`, `pickup-selector-search-sla-button` and `pickup-selector-sla-list` are **mandatory** inside the main block. But you can use them in any order you want. You can also use the flex-layout if needed.

### 3. Configuring the `pickup-selector-sla-list`;

The only block that should be used inside this one is the `pickup-selector-option-card`. We do this so that you can be free to style the option card as you want, and we will use that as a template all the options.

```json
  "pickup-selector-sla-list": {
    "children": [
      "pickup-selector-option-card"
    ]
  }
```

### 4. Configuring the `pickup-selector-option-card`

You are free to style this block as you want.
We have some blocks in the app that will help with the information about the pickup point. They are the following:

- `pickup-selector-option-card-pickup-point-name`
- `pickup-selector-option-card-pickup-point-address`
- `pickup-selector-option-card-pickup-point-distance`
- `pickup-selector-option-card-pickup-point-sla`

The only **mandatory block** inside this one is the `pickup-selector-option-card-add-product-button`.

Below you can see and example of this:

```json
  "pickup-selector-option-card": {
    "children": [
      "flex-layout.col#card-container"
    ]
  },

  "flex-layout.col#card-container": {
    "children": [
      "flex-layout.row#card-header",
      "product-separator",
      "flex-layout.row#card-body"
    ]
  },

  "flex-layout.row#card-header": {
    "props": {
      "colSizing": "auto"
    },
    "children": [
      "pickup-selector-option-card-pickup-point-distance",
      "pickup-selector-option-card-pickup-point-name"
    ]
  },

  "flex-layout.row#card-body": {
    "props": {
      "colSizing": "auto"
    },
    "children": [
      "flex-layout.col#card-body-address",
      "flex-layout.col#card-body-call-to-action"
    ]
  },

  "flex-layout.col#card-body-address": {
    "children": [
      "pickup-selector-option-card-pickup-point-address"
    ]
  },

  "flex-layout.col#card-body-call-to-action": {
    "children":[
      "pickup-selector-option-card-pickup-point-sla",
      "pickup-selector-option-card-add-product-button"
    ]
  }
```

Using the configuration above the end result would look like this:

![image](https://user-images.githubusercontent.com/8519076/136956522-eb7fab05-66dd-4356-9fe2-62d857e32341.png)

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                        |
| ---------------------------------- |
| `pickupPointOptionCard`            |
| `pickupPointAddress`               |
| `pickupPointDistance`              |
| `pickupPointName`                  |
| `pickupPointSla`                   |
| `pickupSelectorContainer`          |
| `pickupSelectorSlaList`            |
| `searchSlaButtonContainer`         |
| `selectPickupPointButtonContainer` |
| `zipcodeInputContainer`            |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

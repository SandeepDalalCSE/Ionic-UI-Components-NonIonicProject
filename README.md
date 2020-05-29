# Ionic-UI-Components-NonIonicProject

In this repository, I will be using the Ionic UI Components in a Non-Ionic-Project. Here you will learn the usage of Ionic UI Components then you can easily work with them in any project.

> Click :star:if you like the project. Pull Request are highly appreciated.

## Ionic UI Components

### Description

High-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs.

**_Reference_**
| No. | Steps |
|---- | ---------
|1 | Click On : https://ionicframework.com/ . |
|2 | Click On 'Developers' dropdown tab then 'UI Components'. |

## Ionic Framework CDN

### Description

Ionic Framework can be included from a CDN for quick testing in a Plunker, Codepen, or any other online code editor!
add the following inside the <head> element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

**_Reference_**
| No. | Steps |
|---- | ---------
|1 | Click On : https://ionicframework.com/ . |
|2 | Click On 'Developers' dropdown tab then 'UI Components'. |
|3 | Click On 'Guide' in toolbar of that page. |
|4 | Click On 'Packages & CDN' in the left-side toolbar of that page. |

---

# Working With UI Components

## ion-app

### Description

App is a container element for an Ionic application. There should only be one `<ion-app>` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the `<ion-app>` when they are presented.

### Usage

```html
<ion-app>
  <!-- menus, headers, content, and footers -->
</ion-app>
```

## ion-header

### Description

Header is a parent component that holds the toolbar component. It's important to note that ion-header needs to be the one of the three root elements of a page

### Usage

```html
<ion-app>
  <ion-header>
    <!-- toolbar -->
  </ion-header>
</ion-app>
```

## ion-toolbar

### Description

Toolbars are positioned above or below content. When a toolbar is placed in an `<ion-header>` it will appear fixed at the top of the content, and when it is in an `<ion-footer>` it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. When placed within an `<ion-content>`, toolbars will scroll with the content.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <!-- title, buttons, back-button -->
    </ion-toolbar>
  </ion-header>
</ion-app>
```

# Properties | ion-toolbar

- color

##### Description : The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark".

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar color="primary">
      <!-- title, buttons, back-button -->
    </ion-toolbar>
  </ion-header>
</ion-app>
```

---

## ion-title

### Description

`<ion-title>` is a component that sets the title of the Toolbar.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>
</ion-app>
```

## ion-content

### Description

The content component provides an easy to use content area with some useful methods to control the scrollable area. There should only be one content in a single view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](https://ionicframework.com/docs/layout/css-utilities) or by individually styling it using CSS and the available [CSS Custom Properties](https://ionicframework.com/docs/api/content/#css-custom-properties).

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- content area with some useful methods -->
    <!-- Content, along with many other Ionic components -->
  </ion-content>
</ion-app>
```

## ion-item

### Description

Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a list with other items. Items can be swiped, deleted, reordered, edited, and more.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <!-- text, icons, avatars, images, inputs, and any other native or custom elements. -->
    </ion-item>
  </ion-content>
</ion-app>
```

## ion-label

### Description

Label is a wrapper element that can be used in combination with ion-item, ion-input, ion-toggle, and more. The position of the label inside of an item can be inline, fixed, stacked, or floating.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <ion-label>
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
    </ion-item>
  </ion-content>
</ion-app>
```

# Properties | ion-label

- position

##### Description : The position determines where and how the label behaves inside an item. `Type : "fixed" | "floating" | "stacked" | undefined`

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <ion-label position="floating">
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
    </ion-item>
  </ion-content>
</ion-app>
```

---

## ion-input

### Description

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

It is meant for text type inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <ion-label>
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
      <ion-input></ion-input>
    </ion-item>
  </ion-content>
</ion-app>
```

# Properties | ion-input

- type

##### Description : The type of control to display. The default type is text. `Type : "date" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url"`

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <ion-label>
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>
  </ion-content>
</ion-app>
```

---

## ion-card

### Description

Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content. ion-card is broken up into several sub-components as `ion-card-content`, `ion-card-header`, `ion-card-title`, `ion-card-subtitle`.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-card>
      <!-- header, title, subtitle, and content -->
    </ion-card>

    <ion-item>
      <ion-label>
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
      <ion-input></ion-input>
    </ion-item>
  </ion-content>
</ion-app>
```

## ion-card-header

### Description

`ion-card-header` is a header component for `ion-card`.

### Usage

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <!-- TITLE_OF_TOOLBAR -->
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-card>
      <ion-card-header>
        <!-- title and subtitle -->
      </ion-card-header>
      <!--  card content -->
    </ion-card>

    <ion-item>
      <ion-label>
        <!-- LABEL_FOR_INPUT-FIELD -->
      </ion-label>
      <ion-input></ion-input>
    </ion-item>
  </ion-content>
</ion-app>
```

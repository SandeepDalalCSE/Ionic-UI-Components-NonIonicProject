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

## ion-card-title

### Description

`ion-card-title` is a child component of `ion-card`.

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
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <!-- subtitle -->
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

## ion-card-subtitle

### Description

`ion-card-subtitle` is a child component of `ion-card`.

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
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
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

## ion-card-content

### Description

`ion-card-content` is child component of `ion-card` that adds some content padding. It is recommended that any text content for a card should be placed in an `ion-card-content`.

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
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

## ion-grid

### Description

The grid is a powerful mobile-first flexbox system for building custom layouts.

It is composed of three units — a grid, row(s) and column(s). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

See the [Responsive Grid documentation](https://ionicframework.com/docs/layout/grid) for more information.

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
    <ion-grid>
      <!-- row(s) and column(s) -->
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

## ion-row

### Description

Rows are horizontal components of the grid system and contain varying numbers of columns. They ensure the columns are positioned properly.

See [Grid Layout](https://ionicframework.com/docs/layout/grid) for more information.

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
    <ion-grid>
      <ion-row>
        <!-- column(s) -->
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

## ion-col

### Description

Columns are cellular components of the grid system and go inside of a row. They will expand to fill their row. All content within a grid should go inside of a column.

See [Grid Layout](https://ionicframework.com/docs/layout/grid) for more information.

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
    <ion-grid>
      <ion-row>
        <!-- col 1 -->
        <ion-col><ion-col>
        <!-- col 2 -->
        <ion-col><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

# Properties | ion-col

- size

##### Description : The size of the column, in terms of how many columns it should take up out of the total available. If "auto" is passed, the column will be the size of its content. `Type : string | undefined`

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
    <ion-grid>
      <ion-row>
        <!-- col 1 with size 6 using size property-->
        <ion-col size="6"><ion-col>
        <!-- col 2 with size 6 using size property-->
        <ion-col size="6"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

---

- size-md

##### Description : The size of the column for md screens, in terms of how many columns it should take up out of the total available. If "auto" is passed, the column will be the size of its content. `Type : string | undefined`

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

---

- offset

##### Description : The amount to offset the column, in terms of how many columns it should shift to the end of the total available. `Type : string | undefined`

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

---

- offset-md

##### Description : The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available. `Type : string | undefined`

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <!-- Add any content to this card -->
      </ion-card-content>
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

---

## ion-button

### Description

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>

      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>

        <ion-item>
          <ion-label>
            <!-- LABEL_FOR_INPUT-FIELD -->
          </ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button>
          <!-- TEXT_DISPLAYED_ON_BUTTON -->
        </ion-button>

      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```

# Properties | ion-button

- fill

##### Description : This attributes determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.

**_Reference_**
| Value | Details |
|---- | ---------
|clear | Button with a transparent background that resembles a flat button. |
|outline | Button with a transparent background and a visible border. |
|solid | Button with a filled background. Useful for buttons in a toolbar. |

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>

      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>

        <ion-item>
          <ion-label>
            <!-- LABEL_FOR_INPUT-FIELD -->
          </ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button fill="outline">
          <!-- TEXT_DISPLAYED_ON_BUTTON -->
        </ion-button>

      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```

---

- color

##### Description : The color to use from your application's color palette. Default options are: `"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark"`. `Type : string | undefined`

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>

      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>

        <ion-item>
          <ion-label>
            <!-- LABEL_FOR_INPUT-FIELD -->
          </ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button fill="outline" color="danger">
          <!-- TEXT_DISPLAYED_ON_BUTTON -->
        </ion-button>

      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```

---

## ion-icon

### Description

Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the Ionic Framework team.

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>

      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>

        <ion-item>
          <ion-label>
            <!-- LABEL_FOR_INPUT-FIELD -->
          </ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button fill="outline" color="danger">
          <ion-icon name="NAME_OF_ICON"></ion-icon>
          <!-- TEXT_DISPLAYED_ON_BUTTON -->
        </ion-button>

      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```

---

## _Slots | Reference : ion-button_

| Name        | Details                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
|             | Content is placed between the named slots if provided without a slot.             |
| "end"       | Content is placed to the right of the button text in LTR, and to the left in RTL. |
| "icon-only" | Should be used on an icon in a button that has no text.                           |
| "start"     | Content is placed to the left of the button text in LTR, and to the right in RTL. |

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
    <ion-grid>
      <ion-row>
        <ion-col size-md="6" offset-md="3"><ion-col>
      </ion-row>
    </ion-grid>

    <ion-card>

      <ion-card-header>
        <ion-card-title>
          <!-- TITLE_OF_ION-CARD -->
        </ion-card-title>
        <ion-card-subtitle>
          <!-- SUBTITLE_OF_ION-CARD -->
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>

        <ion-item>
          <ion-label>
            <!-- LABEL_FOR_INPUT-FIELD -->
          </ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button fill="outline" color="danger">
          <ion-icon name="NAME_OF_ICON" slot="start"></ion-icon>
          <!-- TEXT_DISPLAYED_ON_BUTTON -->
        </ion-button>

      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```

---

---

# CSS Utilities

### Description

Ionic Framework provides a set of CSS utility classes that can be used on any element in order to modify the text, element placement or adjust the padding and margin.

- ## _Text Modification_

1. ### **Text Alignment**

| Class             | Style Rule          | Description                                                                                                                                                         |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .ion-text-left    | text-align: left    | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| .ion-text-right   | text-align: right   | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| .ion-text-start   | text-align: start   | The same as text-left if direction is left-to-right and text-right if direction is right-to-left.                                                                   |
| .ion-text-end     | text-align: end     | The same as text-right if direction is left-to-right and text-left if direction is right-to-left.                                                                   |
| .ion-text-center  | text-align: center  | The inline contents are centered within the line box.                                                                                                               |
| .ion-text-justify | text-align: justify | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| .ion-text-wrap    | white-space: normal | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| .ion-text-nowrap  | white-space: nowrap | Collapses whitespace as for normal, but suppresses line breaks (text wrapping) within text.                                                                         |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

2. ### **Text Transformation**

| Class                | Style Rule                 | Description                                                        |
| -------------------- | -------------------------- | ------------------------------------------------------------------ |
| .ion-text-uppercase  | text-transform: uppercase  | Forces all characters to be converted to uppercase.                |
| .ion-text-lowercase  | text-transform: lowercase  | Forces all characters to be converted to lowercase.                |
| .ion-text-capitalize | text-transform: capitalize | Forces the first letter of each word to be converted to uppercase. |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-uppercase">
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-lowercase">
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-capitalize">
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

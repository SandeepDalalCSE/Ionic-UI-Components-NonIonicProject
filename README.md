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

**_Responsive Text Classes | Reference : Text Modification_**

All of the text classes listed above have additional classes to modify the text based on the screen size. Instead of `text-`in each class, use `text-{breakpoint}-`to only use the class on specific screen sizes, where {breakpoint} is one of the breakpoint names listed in Ionic Breakpoints.

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, or `capitalize`, as they are described above.

| Class                   | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| .ion-text-{modifier}    | Applies the modifier to the element on all screen sizes.    |
| .ion-text-sm-{modifier} | Applies the modifier to the element when min-width: 576px.  |
| .ion-text-md-{modifier} | Applies the modifier to the element when min-width: 768px.  |
| .ion-text-lg-{modifier} | Applies the modifier to the element when min-width: 992px.  |
| .ion-text-xl-{modifier} | Applies the modifier to the element when min-width: 1200px. |

- ## _Element Placement_

1. ### **Float Elements**

### Description

The float CSS property specifies that an element should be placed along the left or right side of its container, where text and inline elements will wrap around it. This way, the element is taken from the normal flow of the web page, though still remaining a part of the flow, contrary to absolute positioning.

| Class            | Style Rule                 | Description                                                                                         |
| ---------------- | -------------------------- | --------------------------------------------------------------------------------------------------- |
| .ion-float-left  | float: left                | The element will float on the left side of its containing block.                                    |
| .ion-float-right | float: right               | The element will float on the right side of its containing block.                                   |
| .ion-float-start | float: left / float: right | The same as float-left if direction is left-to-right and float-right if direction is right-to-left. |
| .ion-float-end   | float: left / float: right | The same as float-right if direction is left-to-right and float-left if direction is right-to-left. |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-float-left">
      <div>
        <h3>float-left</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col class="ion-float-right">
      <div>
        <h3>float-right</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

**_Responsive Float Classes | Reference : Element Placement_**
All of the float classes listed above have additional classes to modify the float based on the screen size. Instead of `float-`in each class, use `float-{breakpoint}-`to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in Ionic Breakpoints.

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, or `end`, as they are described above.

| Class                    | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| .ion-float-{modifier}    | Applies the modifier to the element on all screen sizes.    |
| .ion-float-sm-{modifier} | Applies the modifier to the element when min-width: 576px.  |
| .ion-float-md-{modifier} | Applies the modifier to the element when min-width: 768px.  |
| .ion-float-lg-{modifier} | Applies the modifier to the element when min-width: 992px.  |
| .ion-float-xl-{modifier} | Applies the modifier to the element when min-width: 1200px. |

- ## _Element Display_

The display CSS property determines if an element should be visible or not. The element will still be in the DOM, but not rendered, if it is hidden.

| Class     | Style Rule    | Description                 |
| --------- | ------------- | --------------------------- |
| .ion-hide | display: none | The element will be hidden. |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-hide">
      <div>
        <h3>hidden</h3>
        You can't see me.
      </div>
    </ion-col>
    <ion-col>
      <div>
        <h3>not-hidden</h3>
        You can see me!
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

**_Responsive Display Attributes | Reference : Element Display_**

There are also additional classes to modify the visibility based on the screen size. Instead of just `.ion-hide` for all screen sizes, use `.ion-hide-{breakpoint}-{dir}` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in Ionic Breakpoints, and `{dir}` is whether the element should be hidden on all screen sizes above (up) or below (down) the specified breakpoint.

| Class              | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| .ion-hide-sm-{dir} | Applies the modifier to the element when min-width: 576px (up) or max-width: 576px (down).   |
| .ion-hide-md-{dir} | Applies the modifier to the element when min-width: 768px (up) or max-width: 768px (down).   |
| .ion-hide-lg-{dir} | Applies the modifier to the element when min-width: 992px (up) or max-width: 992px (down).   |
| .ion-hide-xl-{dir} | Applies the modifier to the element when min-width: 1200px (up) or max-width: 1200px (down). |

- ## _Content Space_

1. ### **Element Padding**

### Description

The padding class sets the padding area of an element. The padding area is the space between the content of the element and its border.

The default amount of padding to be applied is 16px and is set by the `--ion-padding` variable. See the [CSS Variables](https://ionicframework.com/docs/theming/css-variables) section for more information on how to change these values.

| Class                   | Style Rule           | Description                            |
| ----------------------- | -------------------- | -------------------------------------- |
| .ion-padding            | padding: 16px        | Applies padding to all sides.          |
| .ion-padding-top        | padding-top: 16px    | Applies padding to the top.            |
| .ion-padding-start      | padding-start: 16px  | Applies padding to the start.          |
| .ion-padding-end        | padding-end: 16px    | Applies padding to the end.            |
| .ion-padding-bottom     | padding-bottom: 16px | Applies padding to the bottom.         |
| .ion-padding-vertical   | padding: 16px 0      | Applies padding to the top and bottom. |
| .ion-padding-horizontal | padding: 0 16px      | Applies padding to the left and right. |
| .ion-no-padding         | padding: 0           | Applies no padding to all sides.       |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-padding">
      <div>
        padding
      </div>
    </ion-col>
    <ion-col class="ion-padding-top">
      <div>
        padding-top
      </div>
    </ion-col>
    <ion-col class="ion-padding-start">
      <div>
        padding-start
      </div>
    </ion-col>
    <ion-col class="ion-padding-end">
      <div>
        padding-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-padding-bottom">
      <div>
        padding-bottom
      </div>
    </ion-col>
    <ion-col class="ion-padding-vertical">
      <div>
        padding-vertical
      </div>
    </ion-col>
    <ion-col class="ion-padding-horizontal">
      <div>
        padding-horizontal
      </div>
    </ion-col>
    <ion-col class="ion-no-padding">
      <div>
        no-padding
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

2. ### **Element Margin**

### Description

The margin area extends the border area with an empty area used to separate the element from its neighbors.

The default amount of margin to be applied is 16px and is set by the `--ion-margin` variable. See the [CSS Variables](https://ionicframework.com/docs/theming/css-variables) section for more information on how to change these values.

|Class	|Style Rule	|Description |
|----|----|----|
|.ion-margin	|margin: 16px	|Applies margin to all sides. |
|.ion-margin-top	|margin-top: 16px	|Applies margin to the top. |
|.ion-margin-start	|margin-start: 16px	|Applies margin to the left. |
|.ion-margin-end	|margin-end: 16px	|Applies margin to the right. |
|.ion-margin-bottom	|margin-bottom: 16px	|Applies margin to the bottom. |
|.ion-margin-vertical	|margin: 16px 0	|Applies margin to the top and bottom.|
|.ion-margin-horizontal	|margin: 0 16px	|Applies margin to the left and right. |
|.ion-no-margin	|margin: 0	|Applies no margin to all sides. |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>
        margin
      </div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>
        margin-top
      </div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>
        margin-start
      </div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>
        margin-end
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>
        margin-bottom
      </div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>
        margin-vertical
      </div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>
        margin-horizontal
      </div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>
        no-margin
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- ## _Flex Properties_

1. ### **Flex Container Properties**

|Class	|Style Rule	|Description |
|----|----|----|
|.ion-justify-content-start	|justify-content: flex-start |Items are packed toward the start on the main axis. |
|.ion-justify-content-end	|justify-content: flex-end	|Items are packed toward the end on the main axis. |
|.ion-justify-content-center	|justify-content: center	|Items are centered along the main axis. |
|.ion-justify-content-around	|justify-content: space-around	|Items are evenly distributed on the main axis with equal space around them. |
|.ion-justify-content-between	|justify-content: space-between	|Items are evenly distributed on the main axis. |
|.ion-justify-content-evenly	|justify-content: space-evenly	|Items are distributed so that the spacing between any two items is equal. |
|.ion-align-items-start	|align-items: flex-start	|Items are packed toward the start on the cross axis. |
|.ion-align-items-end	|align-items: flex-end	|Items are packed toward the end on the cross axis. |
|.ion-align-items-center	|align-items: center	|Items are centered along the cross axis. |
|.ion-align-items-baseline	|align-items: baseline	|Items are aligned so that their baselines align. |
|.ion-align-items-stretch	|align-items: stretch	|Items are stretched to fill the container. |
|.ion-nowrap	|flex-wrap: nowrap	|Items will all be on one line. |
|.ion-wrap	|flex-wrap: wrap	|Items will wrap onto multiple lines, from top to bottom. |
|.ion-wrap-reverse	|flex-wrap: wrap-reverse	|Items will wrap onto multiple lines, from bottom to top. |

### Usage

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-evenly">
    <ion-col size="3">
      <div>
        1 of 2
      </div>
    </ion-col>
    <ion-col size="3">
      <div>
        2 of 2
      </div>
    </ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-baseline">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-stretch">
    <ion-col>
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

2. ### **Flex Item Properties**

|Class	|Style Rule	|Description|
|----|----|----|
|.ion-align-self-start	|align-self: flex-start	|Item is packed toward the start on the cross axis. |
|.ion-align-self-end	|align-self: flex-end	|Item is packed toward the end on the cross axis. |
|.ion-align-self-center	|align-self: center	|Item is centered along the cross axis. |
|.ion-align-self-baseline	|align-self: baseline	|Item is aligned so that its baseline aligns with other item baselines. |
|.ion-align-self-stretch	|align-self: stretch	|Item is stretched to fill the container. |
|.ion-align-self-auto	|align-self: auto	|Item is positioned according to the parent's align-items value. |

### Usage

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>
        1 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>
        2 of 4
      </div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>
        3 of 4
      </div>
    </ion-col>
    <ion-col>
      <div>
        4 of 4 <br>
        # <br>
        # <br>
        #
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```
- ## _Border Display_

The border display CSS property determines if the border should be visible or not. The property can be applied to the ion-header and the ion-footer.

|Class	|Description |
|----|----|
|.ion-no-border	|The element will have no border.|


### Usage

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - No Border</ion-title>
  </ion-toolbar>
</ion-header>


<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>
```

- ## _Ionic Breakpoints_

Ionic uses breakpoints in media queries in order to style an application differently based on the screen size. The following breakpoint names are used in the utility classes listed above, where the class will apply when the width is met.

|Breakpoint Name	|Width |
|----|----|
|xs	|0 |
|sm	|576px |
|md	|768px |
|lg	|992px |
|xl	|1200px |


### Usage

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - No Border</ion-title>
  </ion-toolbar>
</ion-header>


<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - No Border</ion-title>
  </ion-toolbar>
</ion-footer>
```


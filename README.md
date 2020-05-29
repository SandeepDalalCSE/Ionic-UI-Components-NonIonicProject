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

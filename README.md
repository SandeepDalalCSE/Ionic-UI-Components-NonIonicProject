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

# scrollable-cards

Web Components for Horizontal Scrolling Cards.

https://github.com/user-attachments/assets/58128558-ee34-4355-9a0e-9008589326a0

## How to Use

You can include the project directly in any project by including the script (either the source from this repo, or your favorite CDN).

```html
<script src="https://unpkg.com/scrollable-cards@1"></script>
```

That will register two components you can use directly in your project:
* `<sc-container>` - a scroll container for all of the cards you want to include
* `<sc-card>` - a single card that will stick to the start of a scroll container when scrolled

As a minimal example, you could have the following:

```html
<sc-container>
	<sc-card>First Card</sc-card>
	<sc-card>Second Card</sc-card>
	<sc-card>Third Card</sc-card>
</sc-container>
```

Both the `<sc-container>` and `<sc-card>` are directly stylable, so if you want to control the height, width, color, or any other attribute, you can simple write CSS pointing to `sc-container` or `sc-card`.

## Inspiration

Inspired by the design affordances of Innos Notes (no longer available).

## Development

This uses [Inline HTML](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) for intellisense of
inline HTML and CSS.

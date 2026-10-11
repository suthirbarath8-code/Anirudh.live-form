# 🎧 Anirudh Live – Coimbatore

### One night. Wall-to-wall bass. Every chartbuster.

A clean, responsive event landing page with a pop-up registration form, real-time validation and a live character counter.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-FF2E93)

</div>

---

> ⚠️ **Demo project.** This is a front-end concept page. The date, venue and "Beatdrop Live" name are placeholders, nothing is saved or sent to a server, and the page is not affiliated with any artist or organizer. Replace the details before using it for a real event.

## ✨ Features

| | Feature | What it does |
|---|---|---|
| 🧭 | **Navbar** | Logo, links, Register button and a mobile hamburger menu |
| 🎤 | **Hero section** | Big headline, event details and a "Register now" button |
| 🪟 | **Registration pop-up** | The form opens in a modal, so the hero stays clean |
| ✅ | **Live validation** | Errors update as the user types |
| 🔒 | **Smart submit button** | Disabled until every field is valid |
| 💬 | **Character counter** | Shows `n/200 characters` and how many remain |
| 🚫 | **Hard limit** | Typing stops at 200 characters and a warning appears |
| 👁️ | **Show / Hide password** | One-click toggle |
| 📱 | **Responsive** | Works on phones, tablets and desktops |

## 🧪 Validation rules

| Field | Rule | Error message |
|---|---|---|
| **Name** | Must not be empty | "Enter your name." |
| **Email** | Must be a valid email format | "Enter a valid email, like you@example.com." |
| **Password** | At least 6 characters | "Password needs at least 6 characters (N so far)." |
| **Message** | Optional, 200 characters max | "Limit reached. You can't type more than 200 characters." |

## 📁 Project structure

```
anirudh-live/
├── index.html    # Page layout, styles and registration pop-up
├── script.js     # Modal, validation and character counter
└── README.md     # You are here
```

## 🚀 Getting started

1. **Download** or copy the files into one folder.
2. **Open** `index.html` in any modern browser.
3. **Click** "Register now" to try the form.

No installation or build step is needed. An internet connection is required to load Tailwind CSS and Google Fonts.

## 🎨 Customization

**Change the event details**
Edit the headline, date, city and venue in the hero section of `index.html`.

**Change the colors**
Update the variables at the top of the `<style>` block:

```css
--pink: #FF2E93;   /* accent color */
--ink:  #111111;   /* main text */
--bg:   #FFFFFF;   /* page background */
```

**Change the message limit**
Change `MAX` in `script.js` and `maxlength` on the textarea in `index.html`, then update the "200 characters max" text.

```js
const MAX = 200;
```

**Add a background image**
In the `<style>` block, replace the `body` background with:

```css
background: url('images/your-photo.jpg') center / cover no-repeat fixed;
```

**Connect to a real backend**
In `script.js`, find the form's `submit` handler. After the validation check, replace the success message code with a `fetch()` request to your server.

## 🛠️ Built with

- **HTML5** for the structure and the native `<dialog>` pop-up
- **[Tailwind CSS](https://tailwindcss.com)** (via CDN) for layout and styling
- **Vanilla JavaScript** with no frameworks
- **Google Fonts:** Anton and Outfit

## 🔐 Good to know

- Passwords are checked in the browser only and are never stored.
- If you collect real data, use HTTPS and validate on the server as well.
- Only use images, logos and names you have permission to use.

## 📄 License

Add your license here (for example MIT), or remove this section.

---

<div align="center">

Made with ❤️ for music lovers in Coimbatore

</div>

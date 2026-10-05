# Counter App

A small counter built with HTML, CSS, and vanilla JavaScript. Change the step size, increase or decrease the count, and reset it to zero.

## Features

- Increase or decrease the count with the **+** and **-** buttons.
- Choose an integer step size with the number input.
- Reset the count to zero while keeping the selected step size.
- Runs in the browser without a build step or package installation.

## Run locally

Clone the repository:

```sh
git clone https://github.com/puneet26082006/Counter-App.git
cd Counter-App
```

Open [Counter app project/index.html](Counter%20app%20project/index.html) in your browser. If you use VS Code, you can also open that file with Live Server.

## Try it

1. Leave the step size at `1` and click **+** twice. The count becomes `2`.
2. Set the step size to `5` and click **-**. The count becomes `-3`.
3. Click **Reset**. The count returns to `0`; the step size remains `5`.

The count is stored in the page only. Refreshing the page resets both the count and the step size.

## Project files

| File | Purpose |
| --- | --- |
| [index.html](Counter%20app%20project/index.html) | Counter display, buttons, and step input |
| [style.css](Counter%20app%20project/style.css) | Page layout and visual styling |
| [script.js](Counter%20app%20project/script.js) | Click handlers and count updates |

## Step input

Use a positive whole number for the step. Clicking **+** or **-** with an empty, zero, negative, fractional, or excessively large step resets the input to `1` and applies a one-unit change. Valid numeric input is read as a number, so `1e2` means a step of `100`.

The count can still become negative. **Reset** returns it to zero without changing the selected step.

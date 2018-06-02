---
title: API Usage
description: How to Stapsher API in your static sites?
linkTitle: Usage
weight: -27
---

## HTML Forms

HTML forms should <span class='tag is-info'>POST</span> to the following endpoint:

```
/{platform}/{username}/{repository}/{branch}/{entryType}/new
```

Stapsher reads the followings from the submitted Form:

- `fields`: Everything nested under `fields` object will be stored in the generated data file.

- `options`: You can optionally include the `options` object to pass additional data to Stapsher.

There are a few special `options` that Stapsher recognizes:

- `options[redirect][success]`: When present, Stapsher will redirect the users to this URL if the request was successful.

- `options[redirect][failure]`: When present, Stapsher will redirect the users to this URL if the request was not successful.

**Example**:

```html
<form method="POST" action="https://stapsher.extrastatic.xyz/github/extraStatic/stapsher-docs/master/comment/new">

  <input name="options[redirect][success]" type="hidden" value="https://extrastatic.xyz/stapsher/docs#success">
  <input name="options[redirect][failure]" type="hidden" value="https://extrastatic.xyz/stapsher/docs#failure">

  <input name="options[slug]" type="hidden" value="stapsher-docs">

  <label for="author">Name</label>
  <input id="author" name="fields[author]" type="text" required>

  <label for="email">E-mail</label>
  <input id="email" name="fields[email]" type="email" required>

  <label for="site">Website</label>
  <input id="site" name="fields[site]" type="url">

  <label for="comment">Comment</label>
  <textarea id="comment" name="fields[comment]" required></textarea>

  <button type="submit">Comment!</button>

</form>
```

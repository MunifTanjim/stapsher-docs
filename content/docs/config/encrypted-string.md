---
title: Encrypted String
description: Encrypt sensitive configuration options
---

Stapsher's configuration file (`stapsher.yaml`) for your site's repository can be publicly available. Anybody with access to the site's repository can read that file.

Stapsher provides a way to encrypt sensitive configuration options so that only Stapsher can read those. The configuration options tagged with <span class="tag is-dark">EncryptedString</span> must have encrypted value.

Suppose, you want to encrypt the string `{string}`. All you have to do is make a request to the `/encrypt/{string}` API endpoint.

For the public instance of Stapsher, the URL is:

```
https://stapsher.extrastatic.xyz/encrypt/{string}
```

Just visit that URL and Stapsher will send you the encrypted string.

You can use that in your `stapsher.yaml` file.

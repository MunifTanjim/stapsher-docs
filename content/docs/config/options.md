---
title: Configuration Options
description: "Configuration Options for stapsher.yaml"
linkTitle: Options
weight: -27
---

Stapsher's configuration file must be named `stapsher.yaml` and stored in the root directory of your git repository.

The root key should define the `entryType`. And all the other options goes under it.

**Example**:

```yaml
comment:
  akismet:
    enable: false
  ...
```

You can have multiple `entryType` blocks in the `stapsher.yaml` file.

Here are the available options:

{{< client-config-options >}}

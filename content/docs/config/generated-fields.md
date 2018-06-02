---
title: Generated Fields
description: Generate additional fields on the fly
weight: -13
---

Stapsher can generate additional fields for you, if you want it to. It can be helpful if you, for example, want to add a `timestamp` field in each of the data files.

You can define Generated Fields in Stapsher's configuration file (`stapsher.yaml`), under the `generatedFields` option.

`generatedFields` option takes an Object with the following structures:

### Simple Structure

```yaml
generatedFields:
  key: [String]
```

**Example**:

```yaml
generatedFields:
  baseUrl: "https://example.com"
```

### Extended Structure

```yaml
generatedFields:
  key:
    type: [String]
    options: [Object]
```

Currently, the only `type` supported in extended structure is:

- `date`

    ```yaml
    type: "date"
    options:
      format: [String]
    ```

    Supported `format`s are:

    - `unix-milliseconds` / `unix`: Milliseconds since epoch _1970-01-01 00:00:00 UTC_
    - `unix-seconds`: Seconds since epoch _1970-01-01 00:00:00 UTC_
    - All the formats supported by [dateformat](https://www.npmjs.com/package/dateformat) package

**Example**:

```yaml
generatedFields:
  timestamp:
    type: "date"
    options:
      format: "unix"
```

You can have multiple Generated Fields, each with either Simple or Extended structure.

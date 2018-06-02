---
title: Placeholders
description: "Use {place.holder} for dynamic values"
weight: -17
---

Some of the options in Stapsher's configuration file (`stapsher.yaml`) support Placeholders.

Stapsher will replace those Placeholders with their dynamic values during the generation process of the data file.

Each placeholder is placed inside a pair of curly braces, i.e. `{...}`.

## `_id`

Replaced with an Unique ID generated for each entries.

**Example**:

```yaml
filename: "{_id}"
```

## `_date`

Replaced with the current date-time. You can also specify a date-time format. Supported formats are:

- `unix-milliseconds` / `unix`: Milliseconds since epoch _1970-01-01 00:00:00 UTC_
- `unix-seconds`: Seconds since epoch _1970-01-01 00:00:00 UTC_
- All the formats supported by [dateformat](https://www.npmjs.com/package/dateformat) package

The syntax for specifying format is: `_date~FORMAT`

**Default Format**: `yyyy-mm-dd`

**Example**:

```yaml
path: "data/contact/{_date~isoDate}"
```

## `fields`

Replaced with the content of any of the supplied `fields`.

**Example**:

```yaml
commitMessage: "new message from {fields.author}"
```

## `options`

Replaced with the content of any of the supplied `options`.

**Example**:

```yaml
path: "data/comments/{options.postId}"
```

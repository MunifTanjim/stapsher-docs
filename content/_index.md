---
title: Stapsher
description: API service for handling user-generated contents on static sites
---

## Stapsher, what?

**Stapsher** is an API service that let's you store user-generated contents as static data files right alongside your site's contents in a _**git repository**_.

## Stapsher, why?

Handling user-generated contents on static sites is a hassle. Usually you have to do one of the followings:

**Use third-party services that inject contents in your pages**  

- Performance penalty
- Possible negative impact on SEO
- Lose control over parts of User Interface


**Manage your own database to store user-generated contents**  

- Introduces complexity
- Defeats the soul purpose of having a static site in the first place

**Stapsher** provides numerous advantages over those:

- Everything is Static
- No database needed
- Completely Open-sourced
- Total control over User Interface

## Stapsher, how?

In short:

- Receives user-generated contents
- Validates & processes them
- Generates static data file
- Pushes the data file to git repository

## Where do I start?

You can use our Public API hosted at `https://stapsher.extrastatic.xyz`:

<a href='./docs' class='button is-info is-large'>Public API</a>

Or you can also host your own instance of Stapsher, if you want:

<a class='button is-info is-large is-static' href='#'>Self Hosted</a>

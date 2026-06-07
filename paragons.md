---
layout: layouts/page.njk
title: Paragons
permalink: /paragons/
---

# Paragon dossiers

{% set records = collections.paragons | sortByTitle %}
{% set emptyMessage = "No paragon dossiers have been filed yet." %}
{% include "partials/collection-list.njk" %}

---
layout: layouts/page.njk
title: Registers
permalink: /registers/
---

# Register records

{% set records = collections.registers | sortByTitle %}
{% set emptyMessage = "No register records have been filed yet." %}
{% include "partials/collection-list.njk" %}

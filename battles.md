---
layout: layouts/page.njk
title: Battle Reports
permalink: /battles/
---

# Battle reports

{% set records = collections.battles | sortByDateDesc %}
{% set emptyMessage = "No battle reports have been filed yet." %}
{% include "partials/collection-list.njk" %}

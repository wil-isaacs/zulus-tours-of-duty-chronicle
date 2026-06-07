---
layout: layouts/page.njk
title: Agendas
permalink: /agendas/
---

# Agenda files

{% set records = collections.agendas | sortByTitle %}
{% set emptyMessage = "No agenda files have been filed yet." %}
{% include "partials/collection-list.njk" %}

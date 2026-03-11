---
layout: page
title: DIY & How-To
permalink: /diy/
---

How-to guides for the things I make around the house: soaps, salves, cleaners, crafts, stained glass, and garden projects.

<ul class="nav__list" style="margin-bottom: 1.5rem;">
  <li><a class="tag" href="{{ '/diy/#home-cleaners' | relative_url }}">Home Cleaners</a></li>
  <li><a class="tag" href="{{ '/diy/#soaps-skincare' | relative_url }}">Soaps & Skincare</a></li>
  <li><a class="tag" href="{{ '/diy/#crafts-sewing' | relative_url }}">Crafts & Sewing</a></li>
  <li><a class="tag" href="{{ '/diy/#stained-glass' | relative_url }}">Stained Glass</a></li>
  <li><a class="tag" href="{{ '/diy/#garden-forage' | relative_url }}">Garden & Forage</a></li>
</ul>

<hr>

{% assign diy_posts = site.posts | where_exp: "item", "item.categories contains 'diy'" %}
{% for post in diy_posts %}
<article class="post-card">
  <h3 class="post-card__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <div class="post-card__meta">{{ post.date | date: "%B %d, %Y" }}{% if post.subcategory %} · {{ post.subcategory | replace: "-", " " }}{% endif %}{% if post.time_required %} · {{ post.time_required }}{% endif %}</div>
  <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
  {% if post.tags and post.tags.size > 0 %}
  <div class="tag-list">
    {% for tag in post.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}
</article>
{% endfor %}

{% if diy_posts.size == 0 %}
<p>More DIY guides coming soon.</p>
{% endif %}

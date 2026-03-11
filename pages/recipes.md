---
layout: page
title: Recipes
permalink: /recipes/
---

Recipes that actually taste like something. Meals, baked goods, dog treats (Edward-approved when noted), and drinks — all made from scratch.

<ul class="nav__list" style="margin-bottom: 1.5rem;">
  <li><a class="tag" href="{{ '/recipes/#meals' | relative_url }}">Meals</a></li>
  <li><a class="tag" href="{{ '/recipes/#baked-goods' | relative_url }}">Baked Goods</a></li>
  <li><a class="tag" href="{{ '/recipes/#dog-treats' | relative_url }}">Dog Treats</a></li>
  <li><a class="tag" href="{{ '/recipes/#drinks' | relative_url }}">Drinks</a></li>
</ul>

<hr>

{% assign recipe_posts = site.posts | where_exp: "item", "item.categories contains 'recipes'" %}
{% for post in recipe_posts %}
<article class="post-card">
  <h3 class="post-card__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <div class="post-card__meta">{{ post.date | date: "%B %d, %Y" }}{% if post.subcategory %} · {{ post.subcategory | replace: "-", " " }}{% endif %}</div>
  {% if post.edward_approved %}
  <div class="edward-approved">🐾 Ed Approved</div>
  {% endif %}
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

{% if recipe_posts.size == 0 %}
<p>More recipes coming soon.</p>
{% endif %}

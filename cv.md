---
title: CV
layout: cv
---
<div id="main">
    <div id="content">
<h1 class="name">Roman Surkov</h1>

<div class="container has-text-centered column is-full is-size-3 contacts">
{% if site.additional_website %}
<div class="cv-contact-div">
<a href="http://{{site.additional_website}}" target="_blank" class="has-text-black cv-contact printable"><i class="fas fa-external-link-square-alt"></i></a>
</div>
{% endif %}
{% if site.linkedin_username %}
<div class="cv-contact-div">
<a href="http://linkedin.com/in/{{site.linkedin_username}}" target="_blank" class="has-text-black cv-contact printable"><i class="fab fa-linkedin"></i></a>
</div>
{% endif %}
{% if site.github_username %}
<div class="cv-contact-div">
<a href="https://github.com/{{site.github_username}}" target="_blank" class="has-text-black cv-contact printable"><i class="fab fa-github"></i></a>
</div>
{% endif %}
{% if site.additional_website_2 %}
<div class="cv-contact-div">
<a href="http://{{site.additional_website_2}}" target="_blank" class="has-text-black cv-contact printable hide"><i class="fas fa-external-link-square-alt"></i></a>
</div>
{% endif %}
{% if site.telegram_username %}
<div class="cv-contact-div">
<a href="https://t.me/{{site.telegram_username}}" target="_blank" class="has-text-black cv-contact printable"><i class="fab fa-telegram"></i></a>
</div>
{% endif %}
{% if site.leetcode_username %}
<div class="cv-contact-div">
<a href="https://leetcode.com/u/{{site.leetcode_username}}" target="_blank" class="has-text-black"><i class="fa fa-code"></i></a>
</div>
{% endif %}
{% if site.devto_username %}
<div class="cv-contact-div">
<a href="https://dev.to/{{site.devto_username}}" target="_blank" class="has-text-black"><i class="fab fa-dev"></i></a>
</div>
{% endif %}
<div class="cv-contact-div">
<a href="mailto:{{site.email}}" target="_blank" class="has-text-black cv-contact mail"><i class="fas fa-envelope"></i></a>
</div>
<div class="cv-contact-div">
<a href="{{site.email}}" target="_blank" class="has-text-black cv-contact mail printable"><i class="fas fa-envelope"></i></a>
</div>
<div class="cv-contact-div">
<a id="cv-link" href="/assets/files/cv.pdf" class="has-text-black cv-contact" onclick="handleCvLinkClick(event)">
    <img src="assets/images/icons/pdf.svg" alt="pdf">
</a>
</div>
</div>

<h1>{{site.data.cv_data.job-title}}</h1>

{% for item in site.data.cv_data.description %}
<p class="cv-description">{{item}}</p>
{% endfor %}

<h2>
Core competencies
</h2>

<ul class="cv-core-competencies is-marginless">
{% for item in site.data.cv_data.core-competencies %}
    <li>{{item}}</li>
{% endfor %}
</ul>

<h2>
Professional experience
</h2>

{% for item in site.data.cv_data.experience %}
<div class="cv-experience-header">
    <div class="cv-position">{{item.position}}</div>
    <div class="cv-experience-period">{{ item.period.started }}{% if item.period.finished %} - {{item.period.finished}}{% else %} - now{% endif %}</div>
</div>
<div class="cv-experience-header">
    <div class="cv-company">
{% if site.data.cv_data.companies[item.company] %}
{{site.data.cv_data.companies[item.company].name}}
{% else %}
{{item.company}}
{% endif %}</div>
    <div class="cv-experience-period-diff">
        {% if item.period.started %}
            {% assign current_month = "now" | date: "%m" | plus: 0 %}
            {% assign current_year = "now" | date: "%Y" | plus: 0 %}
            {% assign date1 = item.period.started | split: '.' %}
            {% assign date2 = item.period.finished | default: current_month | append: "." | append: current_year | split: '.' %}
            {% assign month1 = date1[0] | plus: 0 %}
            {% assign year1 = date1[1] | plus: 0 %}
            {% assign month2 = date2[0] | plus: 0 %}
            {% assign year2 = date2[1] | plus: 0 %}
            {% assign year_diff = year2 | minus: year1 %}
            {% assign month_diff = month2 | minus: month1 %}
            {% if month_diff < 0 %}
                {% assign month_diff = month_diff | plus: 12 %}
                {% assign year_diff = year_diff | minus: 1 %}
            {% endif %}
            {% if year_diff > 0 %}
                {{year_diff}}y
            {% endif %}
            {% if month_diff > 0 %}
                {{month_diff}}m
            {% endif %}
        {% endif %}
    </div>
</div>
{% for paragraph in item.description %}
<p class="cv-description">- {{paragraph}}</p>
{% endfor %}
{% endfor %}

{% if site.data.cv_data.engineering_experience %}
{% for item in site.data.cv_data.engineering_experience %}
<div class="cv-experience-header">
    <div class="cv-position">{{item.position}}</div>
</div>
<div class="cv-experience-header">
    <div class="cv-company">
{% if site.data.cv_data.companies[item.company] %}
{{site.data.cv_data.companies[item.company].name}}
{% else %}
{{item.company}}
{% endif %}</div>
    <div class="cv-experience-period-diff">
        {% if item.period.started %}
            {% assign current_month = "now" | date: "%m" | plus: 0 %}
            {% assign current_year = "now" | date: "%Y" | plus: 0 %}
            {% assign date1 = item.period.started | split: '.' %}
            {% assign date2 = item.period.finished | default: current_month | append: "." | append: current_year | split: '.' %}
            {% assign month1 = date1[0] | plus: 0 %}
            {% assign year1 = date1[1] | plus: 0 %}
            {% assign month2 = date2[0] | plus: 0 %}
            {% assign year2 = date2[1] | plus: 0 %}
            {% assign year_diff = year2 | minus: year1 %}
            {% assign month_diff = month2 | minus: month1 %}
            {% if month_diff < 0 %}
                {% assign month_diff = month_diff | plus: 12 %}
                {% assign year_diff = year_diff | minus: 1 %}
            {% endif %}
            {% if year_diff > 0 %}
                {{year_diff}}y
            {% endif %}
            {% if month_diff > 0 %}
                {{month_diff}}m
            {% endif %}
        {% endif %}
    </div>
</div>
{% for paragraph in item.description %}
<p class="cv-description">- {{paragraph}}</p>
{% endfor %}
{% endfor %}
{% endif %}
<h2>Education</h2>
{% for item in site.data.cv_data.education %}
<div>
    <div class="cv-education-header">
        <div class="cv-company">{{item.company}}</div>
        <div class="cv-experience-period-diff">{{item.period}}</div>
    </div>
    <div class="cv-education-header">
        <div class="cv-description">
            <div>{{item.additional}}</div>
            <div>{{item.qualification}}</div>
        </div>
        <div class="cv-experience-period">{% if item.date_start %}{{item.date_start}} - {{item.date_end}}{% else %} {% endif %}</div>
    </div>
</div>
{% endfor %}

<h2>Certifications</h2>
{% for item in site.data.cv_data.certifications %}
<div class="cv-summary">
    <strong>{{item.company}}, </strong>
    <span>{{item.name}}, </span>
    <span>{{item.date}}</span>
</div>
{% endfor %}
</div>
</div>

<div class="cv-download">
<a id="cv-link-btn" href="/assets/files/cv.pdf" onclick="handleCvLinkClick(event)" class="button is-rounded is-uppercase has-text-weight-normal is-black is-outlined">
<i class="fas fa-file-download"></i>&nbsp;&nbsp;CV
</a>
</div>
<script src="assets/js/cv-print.js"></script>
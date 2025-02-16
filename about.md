---
title: About me
layout: page
---

<h2>
Hello everybody, my name is {{site.author-name}}
</h2>

{% for item in site.data.cv_data.description %}
<p class="cv-description">{{item}}</p>
{% endfor %}

---

<h3>
Working timeline
</h3>

<div class="timeline">
    <div class="timeline-container">
        <ul class="timeline-list">
            {% for item in site.data.cv_data.experience %}
            <li class="timeline-item">
                <div class="timeline-item-content">
                    <div class="timeline-position has-text-white">{{ item.position }}</div>
                    <div class="timeline-period has-text-white">{{ item.period.started }}{% if item.period.finished %} - {{item.period.finished}}{% else %} - now{% endif %}</div>
                    <a class="timeline-company-url has-text-white" href="{{ site.data.cv_data.companies[item.company].url }}" target="_blank" rel="noopener noreferrer">
                        {{ site.data.cv_data.companies[item.company].name }}
                    </a>
                    <span class="circle"></span>
                </div>
            </li>
            {% endfor %}
            {% for item in site.data.cv_data.engineering_experience %}
            <li class="timeline-item not-relevant-sum">
                <div class="timeline-item-content">
                    <div class="timeline-position has-text-white">{{ item.position }}</div>
                    <div class="timeline-period has-text-white">{{ item.period.started }}{% if item.period.finished %} - {{item.period.finished}}{% else %} - now{% endif %}</div>
                    <a class="timeline-company-url has-text-white" href="/" target="_blank" rel="noopener noreferrer">
                        {{ item.company }}
                    </a>
                    <span class="circle"></span>
                </div>
            </li>
            {% endfor %}
            <div></div>
        </ul>
    </div>
</div>

{% if site.github_username %}
<div class="github-stats">
<hr>
<h3>
Github activity
</h3>
<div class="calendar">Loading github data...</div>
</div>
<script src="{{site.url}}{{site.baseurl}}/assets/js/toggle-timeline.js"></script>
<script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
<script>
    const github_username = '{{ site.github_username }}';
    GitHubCalendar(".calendar", github_username, { responsive: true, global_stats: false, cache: 36000 });
</script>
{% endif %}
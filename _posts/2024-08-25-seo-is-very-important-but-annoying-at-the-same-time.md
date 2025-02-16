---
layout: post
title: SEO is very important, but annoying at the same time
description: Creating a website is fun, but getting it to appear in search engines is very complicated, and annoying at the same time.
image: 
  path: /assets/images/blog/seo-is-very-important-but-annoying-at-the-same-time/new-style.png
  alt: New style
permalink: /blog/seo-is-very-important-but-annoying-at-the-same-time/
---

A personal website is a website that was created by a person who just wants to
relieve their stress or just distract themselves, and we assume it is something
simple, but life is cruel and everything must go downhill. SEO is used by
companies to achieve decent positioning in search engines and in turn attract
more customers, but following these techniques or guidelines is not easy at
all, even for an ordinary person.

## What is SEO?

In a nutshell, SEO or **S**earch **E**ngine **O**ptimization, these are
guidelines used to position yourself in search engines and provide quality
content to the user, which seems like a good idea to me. As I understand it,
SEO techniques are used by companies to reach more people, or by content
creators to achieve views.

## My SEO mistakes

![Accessibility error](/assets/images/blog/seo-is-very-important-but-annoying-at-the-same-time/accessibility-error.png)

My website uses a modified Jekyll theme, which is a bit neglected and that's
why I had to modify it in the first place, but I left out the color of certain
places in the theme, the colors do not have good contrast and it was difficult
to see, and had overlooked it.

And that wasn't the whole problem, also the site's `robots.txt` was practically
useless, and for that reason I had to create it myself since it did not contain
instructions for search robots, and now it looks like this:

```
User-agent: *
Disallow:

Sitemap: http://alxira5.vercel.app/sitemap.xml
```

Practically being totally static, I'm giving the order to the search robots to
crawl my entire site, and I hope it is not for bad.

## Conclusion

Maybe I didn't mention it before, but I literally had to rebuild the entire
website because of the amount of mistakes I made, even non-SEO errors, although
I am glad I learned from this beginner's mistake so I don't make it again.

And to finish, don't trust plugin default files, they are usually problematic.

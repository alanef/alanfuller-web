---
title: "Why I Built My Own Email Marketing System (And Saved £1,700 a Year Doing It)"
description: "How I replaced expensive third-party email platforms with a self-hosted solution using Listmonk, Amazon SES, and n8n to handle 12,000+ subscribers across multiple WordPress plugin products."
pubDate: 2025-12-09
author: "Alan Fuller"
tags: ["email marketing", "self-hosted", "listmonk", "amazon ses", "wordpress", "automation"]
---

When you're running a WordPress plugin business with 80,000+ active installations across a dozen products, email marketing isn't optional. It's essential. Free users need onboarding. Trial users need nurturing. Customers need support communications. And everyone needs the right message at the right time.

For years, I used third-party email platforms. They worked, but as my subscriber list grew past 12,000 contacts across multiple product lines, the economics stopped making sense. Mailchimp Standard would cost me £1,771 per year. And I'd still be fighting their generic segmentation tools to do what I actually needed.

So we built something better. Not a Mailchimp clone. A purpose-built system tailored to how my plugin business actually works.

## The Business Problem

My email needs are specific to software product businesses:

**Multiple products, overlapping users.** Someone might use my free anti-spam plugin, then later try my premium Eventbrite integration. That's one person, two product relationships, two different conversation tracks.

**Event-driven communications.** When someone installs a free plugin, starts a trial, or makes a purchase, they need different messages. Generic "batch and blast" doesn't cut it.

**Regulatory compliance.** GDPR matters. I need to know exactly who opted in, when, and for what. Subscriber data shouldn't live on someone else's servers in uncertain jurisdictions.

**Deliverability at scale.** With thousands of WordPress users worldwide, I need enterprise-grade email infrastructure without enterprise pricing.

## The Architecture Decision

I chose to self-host using [Listmonk](https://listmonk.app/), an open-source email platform, running on my existing infrastructure. But Listmonk out of the box didn't do everything I needed. So we built around it, with the help of Claude Code of course. It is late 2025 after all.

### The Components

**Amazon SES for sending.** At $0.10 per 1,000 emails, my entire annual email volume costs less than a single month of Mailchimp. More importantly, SES has excellent deliverability. Amazon's reputation management means my emails actually reach inboxes.

**Amazon SNS for bounce handling.** This is critical and often overlooked. When emails bounce or recipients complain, SNS feeds that data back to Listmonk automatically. Bad addresses get suppressed. Complaint rates stay low. Sender reputation stays healthy.

**Webhook verification layer.** My commercial plugins use Freemius for licensing, which sends signed webhooks for every user event. My free plugins have their own opt-in system. We built a verification service that validates both sources and normalises the data before it hits my automation workflows.

**n8n for orchestration.** When a webhook arrives saying "user X installed plugin Y," n8n transforms that into subscriber attributes, checks if they already exist, and updates Listmonk accordingly. No code deployment needed to change the logic. It's all visual workflows.

![n8n workflow for processing Freemius webhook events](/images/n8n-freemius-workflow.png)

**Custom drip controller.** Listmonk handles campaigns brilliantly but doesn't have built-in drip sequences. We built a lightweight PHP service that runs every 15 minutes, checking which subscribers are due for their next email in a sequence, sending it, and advancing their position.

![Drip Queue Monitor showing subscribers at different stages across plugins](/images/drip-queue-monitor.png)

### What This Enables

**Per-plugin segmentation.** Each subscriber has attributes like `p1330_status: "free"` or `p5065_drip_stage: "trial_2"`. I can target "everyone using my anti-spam plugin who's been on the free version for 30+ days and hasn't opened my last two emails."

**Intelligent drip sequences.** A free user gets a welcome series. If they start a trial, the free sequence stops and a trial sequence begins. If they purchase, both stop and a customer onboarding sequence starts. All automatic, no manual list management.

**Single customer view.** One person using three of my plugins is one subscriber record with three sets of product attributes. I see their complete relationship with me, not fragmented lists.

**Full data ownership.** Subscriber data lives on servers I control, in a region I choose, with exports I can run anytime. No vendor lock-in, no migration anxiety.

## The Real Costs

Let's be honest about what self-hosting actually costs:

**Infrastructure:** My VPS already runs other services. Marginal cost for email: approximately £1/month.

**Amazon SES:** At my volume, around £2-3/month.

**Development time:** The initial build took roughly 3 days of randomly applied work, including two contributions back to Listmonk's open-source codebase, so I could get it running nicely on Coolify.

**Ongoing maintenance:** A few hours per month MAX, mostly improving drip sequences and templates.

**Annual total:** Under £150, versus £1,771 for equivalent third-party tooling.

The savings fund other development. But honestly, cost wasn't the primary driver. Capability was.

## What I Couldn't Do Before

With my old setup, I couldn't easily:

- Automatically stop a "convert to premium" sequence when someone actually converts
- Show different content to trial users versus free users in the same campaign
- Track which specific plugin brought someone into my ecosystem
- Maintain a unified view of multi-product customers
- Run A/B tests on drip timing without manual intervention
- Avoid the threat of arbitrary "compliance" systems that block legitimate emails at an automated whim. If you've had a platform suddenly freeze your account over a false positive, you know the frustration. I'm not a spammer. Everyone is opted in. My reputation on email services is excellent.

Now I can. The system does what my business needs, not what a generic platform assumes all businesses need.

## Should You Do This?

Self-hosted email isn't for everyone. You need:

- Technical capability (or willingness to develop it)
- Subscriber volumes that make the economics work
- Requirements that generic platforms don't serve well
- Comfort with operational responsibility

If you're sending 2,000 emails a month to a simple list, Mailchimp is fine. If you're running a product business with complex user journeys and growing subscriber counts, the maths starts favouring self-hosted.

## The Unexpected Benefits

Beyond cost savings, I gained:

**Speed of iteration.** Changing a drip sequence takes minutes.

**Deeper understanding.** Building the system forced me to think carefully about my actual customer journey.

**Contributions back.** My improvements to Listmonk benefit the whole open-source community.

**Peace of mind.** I'm not dependent on a vendor's pricing changes, feature deprecations, or acquisition outcomes.

## Conclusion

I didn't build this to prove a point about self-hosting. I built it because my business needed capabilities that off-the-shelf tools couldn't provide at a price that made sense.

The result is an email system that thinks the way my business thinks: products have relationships with users, those relationships evolve over time, and the right message depends on where someone is in that journey.

That's not something you can buy for £1,771 a year. It's something you have to build.

---

*Fullworks develops WordPress plugins used by over 80,000 websites worldwide. My self-hosted email infrastructure handles subscriber management, transactional emails, and marketing automation for my entire product portfolio.*
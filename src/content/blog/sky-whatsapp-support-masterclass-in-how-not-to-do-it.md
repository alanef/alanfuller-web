---
title: "Sky's WhatsApp Support: A Masterclass in How Not to Do It"
description: "Sky's WhatsApp support channel is a live chat system wearing WhatsApp's skin — with five-minute timeouts, no context retention, and agents who don't understand the platform they're using."
pubDate: 2026-04-09
author: "Alan Fuller"
tags: ["whatsapp", "customer service", "sky", "whatsapp business", "broadcaster"]
image: "/images/sky-whatsapp-support.png"
---

![Cartoon of a customer on WhatsApp being passed between a row of confused Sky support agents sitting on a bench labelled "Support Platform"](/images/sky-whatsapp-support.png)

I tried to cancel my Sky TV subscription recently. Sky don't offer online cancellation. You have to contact them, by design presumably, because frictionless cancellation doesn't serve their retention numbers. Fair enough, that's their business decision. But they do now offer WhatsApp as a contact channel, which caught my attention given that I spend a lot of time thinking about how businesses use WhatsApp effectively.

So I gave it a go.

## The setup looked promising

The phone line directed me to WhatsApp, a bot handled initial verification, and I was eventually connected to a human agent in the loyalty team. So far, reasonable. The onboarding into the channel worked.

Then the wheels came off.

## Five minutes of silence and you're gone

The chat had a five minute inactivity timeout. Leave the conversation unattended for five minutes, answering the door, driving, doing anything at all, and the bot closes the chat and assigns you a new agent.

The new agent has no context. They ask the same verification questions. You answer them again. You explain your reason for contacting again. You get partway through the conversation and life intervenes for another five minutes. New agent. Same questions. Round three.

Over the course of trying to cancel a TV subscription I ended up in something like 50 messages across multiple agent handoffs, at one point dictating messages by voice while driving just to keep the conversation alive.

## The agent blamed WhatsApp

When I pointed out that a five minute timeout was unreasonable, one of the agents told me that's just how WhatsApp works. It isn't. WhatsApp is an asynchronous messaging platform. Messages persist. Conversations can be picked up hours later. There is no technical reason a chat needs to close after five minutes of silence. That's a Sky system configuration, not a WhatsApp constraint.

That's the part that stood out most. The team using the tool didn't understand the tool. They'd been told what it does, not how it works.

## What Sky actually built

What Sky implemented isn't a WhatsApp support channel. It's a live chat system that happens to run on WhatsApp's infrastructure. They took their existing synchronous, session-based support model and dropped it into a platform designed for exactly the opposite: persistent, asynchronous, context-retaining conversations.

The result is the worst of both worlds. The impatience of live chat without the immediacy. The interface of WhatsApp without any of the benefits.

## The Trustpilot picture

Sky's Trustpilot reviews are worth a look if you want the broader context. One reviewer described spending hours across multiple calls being passed between departments with nothing resolved. Another noted that agents ask the same questions repeatedly with no apparent record of previous contact. A third simply wrote that Sky customer service is great when they're selling you something, not so great at anything else.

The WhatsApp channel hasn't fixed that pattern. It's given it a new interface.

## Why I feel qualified to say this

I've built WhatsApp Business communication systems from the ground up. The things Sky got wrong are not edge cases or obscure technical challenges. Persistent conversation threads, context passed to agents before they respond, asynchronous messaging that doesn't collapse the moment a customer gets distracted: these are solved problems.

The hard part of building on WhatsApp isn't the technology. It's understanding that you're not building a chatbot. You're building a conversation.

If you're curious what a properly implemented WhatsApp communication system looks like, I've built one: [Broadcaster](https://getbroadcaster.com).
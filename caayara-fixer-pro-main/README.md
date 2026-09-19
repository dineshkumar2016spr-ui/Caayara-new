# Caayara Repair Hub

Build a premium 3D-style mobile repair business website for "CAAYARA MOBILES" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The website should preserve the original creative direction of the provided 3D Creator template — including its dark visual identity, oversized typography, smooth animations, magnetic interactions, scrolling marquee, animated text, rounded sections, and sticky card effects — but completely replace the portfolio/creator content with content for Caayara Mobiles, a professional mobile phone repair and service center.

The page title should be:

"Caayara Mobiles -- Mobile Repair & Service"

GLOBAL STYLES

Background:

#0C0C0C

Font:

'Kanit', sans-serif

Google Font weights:

300–900

Global reset:

box-sizing: border-box

margin: 0

padding: 0

Create a .hero-heading class using:

linear-gradient(180deg, #646973 0%, #BBCCD7 100%)

with:

background-clip: text

-webkit-background-clip: text

-webkit-text-fill-color: transparent

Main wrapper:

overflow-x: clip

Maintain the original premium dark aesthetic.

SECTION ORDER

HeroSection

MarqueeSection

AboutSection

ServicesSection

RepairsSection

ContactSection

Footer

1. HERO SECTION

Create a full viewport hero section using:

h-screen

Use a flex-column layout with overflow-x: clip.

NAVBAR

Create a horizontal navigation bar with:

About

Services

Repairs

Contact

Use:

justify-between

text color #D7E2EA

font-medium

uppercase

tracking-wider

text sizes text-sm md:text-lg lg:text-[1.4rem]

padding px-6 md:px-10 pt-6 md:pt-8

Hover:

opacity 70%

200ms transition

Add a WhatsApp CTA on desktop:

WHATSAPP US

WhatsApp number:

8121777725

WhatsApp URL:

https://wa.me/918121777725

HERO HEADING

Replace the original creator heading with:

YOUR PHONE.
OUR EXPERTISE.

Use the .hero-heading gradient style.

Typography:

font-black

uppercase

tracking-tight

leading-none

whitespace-nowrap

width full

Use fluid sizing:

text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]

Wrap the heading in an overflow-hidden container.

The heading should dominate the screen just like the original "Hi, i'm jack" heading.

HERO SUPPORTING TEXT

At the bottom-left display:

professional mobile phone repair & service in Jagdish Market, Hyderabad

Use:

color #D7E2EA

font-light

uppercase

tracking-wide

leading-snug

Responsive size:

clamp(0.75rem, 1.4vw, 1.5rem)

Maximum width:

mobile: 180px

sm: 240px

md: 300px

HERO VISUAL

Replace the original 3D creator portrait with a premium mobile repair visual.

Create a central visual showing a smartphone being professionally repaired.

The visual can include:

smartphone

phone motherboard

precision screwdriver

repair tools

exposed smartphone components

technician hands

screen replacement

electronic components

The image should be centered absolutely:

left-1/2 -translate-x-1/2

Use:

z-10

Responsive width:

mobile: w-[280px]

sm: w-[360px]

md: w-[440px]

lg: w-[520px]

Mobile:

top-1/2 -translate-y-1/2

Desktop:

bottom-0

Use the original Magnet interaction so the repair visual subtly follows the user's cursor.

Magnet settings:

padding: 150

strength: 3

activeTransition: transform 0.3s ease-out

inactiveTransition: transform 0.6s ease-in-out

HERO CTA

Replace "Contact Me" with:

GET YOUR PHONE REPAIRED

Create a premium rounded pill button.

Also include:

CALL NOW

and

WHATSAPP US

Phone number:

8121777725

Call link:

tel:+918121777725

WhatsApp link:

https://wa.me/918121777725

All Call Now buttons throughout the website must use:

tel:+918121777725

All WhatsApp buttons must use:

https://wa.me/918121777725

HERO LOCATION

Display at the bottom:

JAGDISH MARKET • HYDERABAD

HERO ANIMATIONS

Use Framer Motion FadeIn animations.

Navbar:

delay 0

y -20

Heading:

delay 0.15

y 40

Supporting text:

delay 0.35

y 20

CTA:

delay 0.5

y 20

Repair visual:

delay 0.6

y 30

Use smooth easing:

[0.25, 0.1, 0.25, 1]

2. MARQUEE SECTION

Create the same two-row animated marquee concept from the original design.

Background:

#0C0C0C

Padding:

pt-24 sm:pt-32 md:pt-40 pb-10

Instead of portfolio GIFs, create or use premium mobile-repair-related visual tiles.

The tiles should represent:

Screen Repair

Battery Replacement

Charging Repair

Motherboard Repair

Software Service

Camera Repair

Speaker Repair

Water Damage

Phone Repair

Smartphone Components

Caayara Mobiles

Create two horizontal rows.

Row 1 moves RIGHT.

Row 2 moves LEFT.

Use scroll-based movement similar to the original design.

Use:

willChange: transform

and a passive scroll listener.

Each tile:

420px x 270px

with:

rounded-2xl

and:

object-cover

Use lazy loading.

Gap:

gap-3

Gap between rows:

gap-3

Keep the animation smooth and performant.

3. ABOUT SECTION

Create a full-height centered About section.

Use:

min-h-screen

Padding:

px-5 sm:px-8 md:px-10 py-20

Maintain the original decorative 3D composition.

Instead of the original moon, Lego and creator objects, use decorative mobile-repair themed 3D visuals such as:

3D smartphone

battery

charging cable

motherboard

screwdriver

phone screen

microchip

repair tools

Position decorative objects around the corners.

Use FadeIn animations.

ABOUT HEADING

Heading:

ABOUT CAAYARA MOBILES

Use:

.hero-heading

font-black

uppercase

leading-none

tracking-tight

centered

Responsive size:

clamp(3rem, 10vw, 150px)

ABOUT TEXT

Use character-by-character scroll-driven opacity animation.

Text:

Your phone is part of your everyday life. When something goes wrong, you need a repair service that understands the problem and focuses on getting it fixed properly. Caayara Mobiles provides mobile phone repair and service in Jagdish Market, Hyderabad, with a focus on proper diagnosis, repair quality and clear communication.

Use:

color #D7E2EA

font-medium

centered

leading-relaxed

max-width 560px

Font size:

clamp(1rem, 2vw, 1.35rem)

Animate each character from opacity 0.2 to 1 based on scroll progress.

Use:

offset: ['start 0.8', 'end 0.2']

ABOUT CTA

Below the text add:

GET YOUR PHONE REPAIRED

and:

WHATSAPP US

Maintain the large spacing and premium interaction from the original template.

4. SERVICES SECTION

Use a white background:

#FFFFFF

Create rounded top corners:

rounded-t-[40px]

sm:rounded-t-[50px]

md:rounded-t-[60px]

Padding:

px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32

SERVICES HEADING

Heading:

SERVICES

Use:

color #0C0C0C

font-black

uppercase

centered

Font size:

clamp(3rem, 12vw, 160px)

Margin bottom:

mb-16 sm:mb-20 md:mb-28

SERVICE LIST

Create a vertical list similar to the original 5-item service list, but use these mobile repair services:

01 — SCREEN REPLACEMENT

Broken, cracked or damaged smartphone screen repair and replacement.

02 — BATTERY REPLACEMENT

Battery-related issues including rapid draining and poor battery performance.

03 — CHARGING REPAIR

Diagnosis and repair for charging ports and charging-related problems.

04 — SOFTWARE SERVICE

Software-related issues, system problems and performance-related service.

05 — MOTHERBOARD / IC REPAIR

Hardware-level diagnosis and repair for motherboard and IC-related issues.

06 — CAMERA REPAIR

Repair and diagnosis for smartphone camera problems.

07 — SPEAKER & MICROPHONE

Solutions for speaker, microphone and audio-related issues.

08 — WATER DAMAGE

Assessment and repair support for water or liquid-damaged phones.

09 — BACK GLASS / BODY REPAIR

Repair support for damaged phone bodies and back glass.

10 — GENERAL MOBILE REPAIR

Diagnosis and repair for other smartphone problems.

Each service item should have:

Huge number on left

Service name

Description

1px border separator

Large spacing

Scroll-triggered FadeIn

Number style:

font-black

Size:

clamp(3rem, 10vw, 140px)

Color:

#0C0C0C

Service name:

font-medium

uppercase

clamp(1rem, 2.2vw, 2.1rem)

Description:

font-light

leading-relaxed

max-width 2xl

clamp(0.85rem, 1.6vw, 1.25rem)

opacity 0.6

Padding:

py-8 sm:py-10 md:py-12

Stagger FadeIn animations:

delay = index * 0.1

5. REPAIRS SECTION

Create a dark section using:

#0C0C0C

with rounded top corners.

Heading:

REPAIR EXPERTISE

Create 3 sticky stacking cards inspired by the original Projects section.

Each card should remain sticky while scrolling and scale down as the next card appears.

Use Framer Motion:

useScroll

useTransform

Target scale:

1 - (totalCards - 1 - index) * 0.03

Each card offset:

${index * 28}px

Sticky position:

top-24 md:top-32

Container height:

h-[85vh]

CARD 01

Number:

01

Category:

DISPLAY

Title:

SCREEN REPAIR

Description:

Professional diagnosis and repair for cracked, broken or damaged smartphone displays.

CARD 02

Number:

02

Category:

POWER

Title:

BATTERY & CHARGING

Description:

Battery replacement and charging-related diagnosis for smartphones experiencing power issues.

CARD 03

Number:

03

Category:

HARDWARE

Title:

MOTHERBOARD & IC

Description:

Hardware-level diagnosis and repair for motherboard and component-related problems.

Each card:

rounded-[40px]

sm:rounded-[50px]

md:rounded-[60px]

border-2

border-[#D7E2EA]

background #0C0C0C

padding p-4 sm:p-6 md:p-8

Use premium mobile repair imagery inside each card.

6. COMMON PROBLEMS SECTION

Create a section titled:

WHAT'S WRONG WITH YOUR PHONE?

Display large interactive problem cards.

Include:

SCREEN BROKEN?

BATTERY DRAINING?

PHONE NOT CHARGING?

CAMERA NOT WORKING?

PHONE NOT TURNING ON?

WATER DAMAGE?

SOFTWARE ISSUE?

MOTHERBOARD PROBLEM?

SPEAKER NOT WORKING?

MICROPHONE NOT WORKING?

Each item should have a CTA:

GET IT CHECKED

Clicking the CTA should scroll to the contact/repair enquiry section.

7. REPAIR ENQUIRY SECTION

Create a premium enquiry form.

Heading:

TELL US WHAT'S WRONG

Fields:

Name

Phone Number

Phone Brand

Dropdown:

Apple

Samsung

OnePlus

Xiaomi

Redmi

Realme

Vivo

Oppo

Motorola

Google Pixel

Nothing

Other

Phone Model

Problem

Dropdown:

Broken Screen

Battery Problem

Charging Problem

Camera Problem

Speaker Problem

Microphone Problem

Water Damage

Software Problem

Phone Not Turning On

Motherboard Problem

Other

Preferred Contact

Call

WhatsApp

Submit:

REQUEST REPAIR

After submission show a clean confirmation state.

Do not promise a specific response time.

8. CONTACT SECTION

Create a large final contact section.

Heading:

LET'S FIX YOUR PHONE.

Supporting text:

Professional mobile phone repair and service in Jagdish Market, Hyderabad.

Display:

CALL

8121777725

Button:

CALL NOW

Link:

tel:+918121777725

WHATSAPP

8121777725

Button:

WHATSAPP US

Link:

https://wa.me/918121777725

VISIT

JAGDISH MARKET, HYDERABAD, TELANGANA, INDIA

Button:

GET DIRECTIONS

Only connect the directions button to a verified map location if one is supplied. Do not invent an exact shop address.

9. FAQ SECTION

Create a modern accordion FAQ.

Questions:

What types of phones do you repair?

Do you repair broken screens?

Can you fix charging problems?

Do you repair motherboard and IC problems?

Can you check water-damaged phones?

My phone is not turning on. Can you diagnose it?

How can I contact Caayara Mobiles?

For the contact answer display:

Call or WhatsApp 8121777725

Do not make guarantees about repair success.

10. FINAL CTA

Create a large premium CTA section.

Headline:

DON'T LET A BROKEN PHONE SLOW YOU DOWN.

Supporting text:

Bring your phone in for professional diagnosis and repair in Jagdish Market, Hyderabad.

Buttons:

GET YOUR PHONE REPAIRED

WHATSAPP US

CALL NOW

Use strong scroll animations.

11. FOOTER

Footer background:

#0C0C0C

Display:

CAAYARA MOBILES

MOBILE REPAIR. DONE RIGHT.

Location:

Jagdish Market, Hyderabad, Telangana, India

Phone:

8121777725

Navigation:

Home

About

Services

Repairs

Contact

CTA:

WHATSAPP US

Copyright:

© 2026 Caayara Mobiles. All Rights Reserved.

12. MOBILE EXPERIENCE

Make the website mobile-first.

Add a fixed bottom CTA bar on mobile:

CALL | WHATSAPP | DIRECTIONS

Call:

tel:+918121777725

WhatsApp:

https://wa.me/918121777725

Directions:

Use a verified map URL if provided.

Buttons must be large enough for touch interaction.

Do not let the bottom bar cover important content.

13. REUSABLE COMPONENTS

Create reusable components:

Navbar

ContactButton

WhatsAppButton

CallButton

DirectionsButton

FadeIn

Magnet

AnimatedText

Marquee

ServiceCard

RepairCard

ProblemCard

FAQAccordion

RepairForm

Footer

MobileBottomBar

14. CONTACT BUTTON STYLE

Create a premium rounded-full CTA.

Use the original creative button concept but adapt it to Caayara Mobiles.

Gradient:

linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)

Inner shadow:

0px 4px 4px rgba(181, 1, 167, 0.25)

Add:

4px 4px 12px #7721B1 inset

White 2px outline with -3px offset.

Text:

white

font-medium

uppercase

tracking-widest

Sizes:

px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4

Labels:

GET YOUR PHONE REPAIRED

WHATSAPP US

CALL NOW

15. FADEIN COMPONENT

Use the same Framer Motion concept as the original.

Properties:

whileInView

viewport { once: true, margin: "50px", amount: 0 }

delay

duration default 0.7

x default 0

y default 30

Easing:

[0.25, 0.1, 0.25, 1]

Use motion.create() where appropriate.

16. MAGNET COMPONENT

Implement a mouse-following magnetic hover effect.

Track mouse position relative to the element center.

Apply:

translate3d

Divide movement by the strength factor.

Activate when cursor is within the padding distance.

Transitions:

Active:

transform 0.3s ease-out

Inactive:

transform 0.6s ease-in-out

Use:

willChange: transform

17. ANIMATED TEXT COMPONENT

Implement character-by-character scroll reveal.

Characters should transition from:

opacity: 0.2

to:

opacity: 1

based on scroll position.

Use:

useScroll

with:

offset: ['start 0.8', 'end 0.2']

Apply this to the About section paragraph.

18. RESPONSIVE DESIGN

Use Tailwind's default breakpoints:

sm: 640px

md: 768px

lg: 1024px

Use mobile-first responsive design.

Use clamp() extensively for typography.

The website must scale smoothly from:

small mobile phones

tablets

laptops

desktop

ultra-wide monitors

Do not allow horizontal overflow.

19. SEO

Page title:

Caayara Mobiles | Mobile Phone Repair in Jagdish Market, Hyderabad

Meta description:

Caayara Mobiles provides professional mobile phone repair and service in Jagdish Market, Hyderabad. Screen replacement, battery replacement, charging repair, software service, motherboard repair and more. Call or WhatsApp 8121777725.

Target phrases naturally:

Mobile Repair in Jagdish Market Hyderabad

Mobile Phone Repair Hyderabad

Phone Repair Jagdish Market

Mobile Repair Shop Hyderabad

Smartphone Repair Hyderabad

Screen Replacement Hyderabad

Battery Replacement Hyderabad

Charging Port Repair Hyderabad

Motherboard Repair Hyderabad

Mobile Service Center Jagdish Market

Phone Repair Near Jagdish Market

Caayara Mobiles

Do not keyword-stuff.

Add:

SEO metadata

Open Graph metadata

Semantic HTML

Descriptive image alt text

Appropriate LocalBusiness structured data using only verified information

20. PERFORMANCE

Optimize the website for speed.

Use:

lazy loading

responsive images

GPU-friendly animations

passive scroll listeners

will-change only where necessary

minimal JavaScript

optimized assets

Support:

prefers-reduced-motion

When reduced motion is enabled, reduce or disable non-essential animations.

21. IMPORTANT CONTENT RULES

Do NOT invent:

Reviews

Ratings

Awards

Certifications

Years of experience

Authorized service center claims

Exact shop number

Exact street address

Prices

Warranty periods

Guaranteed repair times

Fake customer testimonials

Fake repair results

"No.1" claims

"Best mobile repair shop" claims

"Cheapest" claims

Only use the verified business information supplied:

CAAYARA MOBILES

Jagdish Market, Hyderabad, Telangana, India

8121777725

22. FINAL CREATIVE DIRECTION

The final website should preserve the visual character of the original 3D Creator design while completely transforming its purpose into a premium mobile repair website.

It should feel like:

A high-end technology brand
+
A professional electronics repair studio
+
A trusted local Hyderabad business

Do NOT make it look like a generic mobile shop template.

Use:

Massive typography

Dark cinematic sections

White contrast sections

Premium 3D phone visuals

Smooth Framer Motion animations

Magnetic buttons

Scroll-driven text

Sticky stacking repair cards

Moving visual marquee

Rounded corners

Sophisticated micro-interactions

Strong mobile UX

Clear Call and WhatsApp CTAs

The first impression should immediately communicate:

PHONE BROKEN?
CAAYARA MOBILES CAN HELP.

The most important conversion actions throughout the website are:

CALL NOW — 8121777725

WHATSAPP US — 8121777725

GET YOUR PHONE REPAIRED

Make these actions highly visible without making the design feel aggressive or cluttered. use this reference images and logo and animated video and create a 3d model website like in this template

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/84e6d561-319d-42b2-836a-538cbcccc1e4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

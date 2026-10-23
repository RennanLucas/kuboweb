---
name: Kubo Web
description: An editorial digital studio shaped by precise geometry, quiet lavender, and real work.
colors:
  kw-bg: "#0c0d10"
  kw-ink: "#f2f1f5"
  kw-muted: "#a5a4ad"
  kw-line: "#2b2b31"
  kw-accent: "#c6bdf7"
  services-paper: "#e8e4ef"
  services-ink: "#1c1923"
  services-muted: "#625c6b"
  contact-lilac: "#c6bdf0"
  button-light: "#ded7f7"
  button-light-hover: "#ede6ff"
  button-dark: "#17141e"
  button-dark-hover: "#332a48"
  process-bg: "#111115"
typography:
  display:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "clamp(64px, 6.6vw, 96px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  emphasis:
    fontFamily: '"Playfair Display", serif'
    fontWeight: 400
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "16px"
    lineHeight: 1.6
  button:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  tag: "4px"
  compact-control: "6px"
  button: "7px"
  project: "12px"
spacing:
  tag-gap: "8px"
  control-gap: "20px"
  heading-gap: "36px"
  section-desktop: "112px"
  section-mobile: "72px"
components:
  button-light:
    backgroundColor: "{colors.button-light}"
    textColor: "#18151e"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "16px 22px"
  button-light-hover:
    backgroundColor: "{colors.button-light-hover}"
  button-dark:
    backgroundColor: "{colors.button-dark}"
    textColor: "#fff"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "16px 22px"
  button-dark-hover:
    backgroundColor: "{colors.button-dark-hover}"
  header-cta:
    rounded: "{rounded.button}"
    padding: "11px 18px"
  process-tag:
    rounded: "{rounded.tag}"
    padding: "5px 11px"
---

# Design System: Kubo Web

## Overview

**Creative North Star: "The Geometric Editorial Studio"**

Kubo Web combines the confidence of an editorial studio with the precision of a digital craft practice. Dark, spacious fields carry large geometric type; selective serif italics add a human inflection. Lavender connects the fine geometry, small details, and decisive actions. Pale sections introduce a deliberate change in reading pace.

This system records the implemented homepage in `src/pages/StudioHome.tsx`, `src/styles/studio.css`, and `src/components/LineSculpture.tsx`. Existing internal routes retain earlier styling and are not yet fully migrated. Use this world as the reference for intentional future migrations; do not treat incumbent inner-route styles as tokens of this system. The homepage composition is recorded separately in `.impeccable/surfaces/home.md`.

**Key Characteristics:**
- Spacious editorial hierarchy with compact supporting labels.
- Geometric linework paired with restrained lavender accents.
- Mostly flat surfaces, thin rules, and small functional corners.
- Real project imagery and clear, keyboard-accessible interactions.

## Colors

The palette is near-black and cool white, with lavender accents and pale lilac surfaces.

### Primary
- **Studio Lavender** (`kw-accent`): emphasis in editorial headings, small symbols, and selected process indicators.
- **Soft Action Lavender** (`button-light`): filled actions against the dark ground; its hover variant brightens the surface.

### Neutral
- **Studio Night** (`kw-bg`): the principal canvas.
- **Cool White** (`kw-ink`): primary text on dark fields.
- **Quiet Gray** (`kw-muted`): supporting copy on dark fields.
- **Graphite Rule** (`kw-line`): structural dividers.
- **Lilac Paper** (`services-paper`), **Paper Ink** (`services-ink`), and **Paper Gray** (`services-muted`): the light service region and its readable text pairing.
- **Contact Lilac** (`contact-lilac`): the closing invitation field.
- **Deep Action Ink** (`button-dark`): dark actions on pale surfaces, with a plum hover variant.
- **Process Night** (`process-bg`): a subtle tonal section shift.

**The Surface Pairing Rule.** Switch both background and text roles when entering a pale region. Keep muted copy appropriate to its local surface.

## Typography

**Display Font:** Space Grotesk, sans-serif fallback.
**Body Font:** DM Sans, sans-serif fallback.
**Emphasis Font:** Playfair Display, serif fallback, used in italic.

Geometric headings carry the structure. Serif italics punctuate selected phrases; body copy stays clear and calm. Preserve the exact source font families rather than substituting a generic geometric sans.

- **Display:** the frontmatter display role sets the desktop hero. Mobile uses `clamp(45px, 9.4vw, 67px)` with line-height (1.05).
- **Headline:** the frontmatter headline role sets section titles. Mobile uses `clamp(31px, 7vw, 43px)`.
- **Body:** the base body role is supplemented by compact section copy (14px), usually with generous line-height (1.85–1.9). The hero paragraph is limited to (425px) on desktop.
- **Labels:** navigation, captions, tags, and metadata use DM Sans (10–13px); avoid turning these into competing headlines.
- **Emphasis:** Playfair Display is (400), with slightly tightened tracking. Hero emphasis is enlarged to (1.07em).

**The Two Voices Rule.** Use Space Grotesk for the main statement and Playfair italics for a chosen phrase; retain DM Sans for functional reading.

## Layout

The desktop content wrapper is `calc(100% - 112px)` with a maximum width of (1328px). Section spacing is generous, with vertical padding (112px). Thin rules organize content without enclosing everything in cards. Two-column areas use unequal proportions and purposeful gaps; heading rows align editorial titles with a compact explanation or secondary link.

At (1100px) and below the wrapper becomes `calc(100% - 72px)` and gaps tighten. At (760px) and below it becomes `calc(100% - 40px)`, section padding becomes (72px), the header contracts from (86px) to (72px), and the mobile navigation replaces desktop links and the header action. Multi-column content stacks; process tabs become a two-by-two grid. At (1600px) and above the hero grows in height and artwork scale.

Maintain usable text flow and working controls across these changes. Do not carry desktop offsets onto narrow layouts. Page-specific asymmetry and scroll sequencing belong to the surface brief.

## Elevation & Depth

Depth comes primarily from contrasting tonal regions and fine structural rules. Project screenshots alone use a soft shadow (`0 22px 36px #2a232326`); the wire sculpture has a subtle drop shadow (`0 12px 22px #33304035`). These treatments do not establish a general raised-card system.

Motion is restrained: filled buttons rise (3px) on hover, project images rise (6px), and the wire sculpture drifts over a (12s) cycle. Honor `prefers-reduced-motion`; the source disables animation and transition throughout the studio scope.

## Shapes

Use small, functional corners: buttons (7px), compact controls (6px), tags (4px), and project image frames (12px). Thin borders and open rows are more common than panel boxes. Circular forms are reserved for small symbols and the process orbit. Geometric wire contours provide the expressive form; the interface remains legible and spare.

## Components

### Buttons and links

Filled buttons use generous horizontal breathing room, a trailing arrow, and the frontmatter padding. The light variant belongs on dark surfaces; the dark variant belongs on pale surfaces. Their minimum height is (54px). Mobile reduces type to (13px) and padding to (15px 19px). Secondary actions are plain text links with a small arrow and an underline on hover. The header action is outlined with a fine border (`#5a5669`), becoming subtly filled (`#26232f`) on hover.

Visible keyboard focus uses a (2px) outline with offset (6px): lavender (`#a899ef`) on dark surfaces and deep plum (`#594074`) on light ones. Preserve focus visibility on all controls.

### Navigation

The fixed header is near-opaque dark with a bottom rule. Desktop links use compact muted text, brightening on hover. Mobile uses an explicit menu button with expanded state, a scrollable navigation region, large separated rows, and closes after link activation. Retain the skip-to-content link.

### Project frames

Real screenshots sit inside gently rounded, colored frames with a minimal browser strip. Image content remains identifiable; captions and service descriptions sit below. Hover reveals an exploration cue and subtly lifts the screenshot. Keyboard focus reveals the same cue, and mobile displays it persistently.

### Service selector

Service choices are open rows on lilac paper, separated by rules. Selected text is darker and uses an upward-right arrow; unselected rows use a plus. The adjacent panel includes explanation, deliverables, price context, an action, and a service-detail link. Use real tab semantics and the implemented Arrow Up/Down, Home, and End behavior. Do not replace changing panel content with decorative selection styling alone.

### Process selector and tags

Four numbered tabs use a faint selected background and lavender bottom rule. The panel combines a large quiet numeral, circular code symbol, explanation, compact bordered tags, and a concrete output. Arrow Left/Right, Home, and End move selection and focus. Tags are passive labels, not buttons.

### FAQ

Native `details` and `summary` provide expandable rows with thin separators. Plus/minus symbols reflect the open state, while muted answers keep generous line-height. Preserve native keyboard behavior.

## Do's and Don'ts

### Do:
- **Do** use the studio palette and local surface text pairings.
- **Do** retain the geometric sans, serif italic, and clear body-type relationship.
- **Do** preserve keyboard focus, tab navigation, native disclosure behavior, and reduced motion.
- **Do** use verified project screenshots and recognizable project content.
- **Do** migrate existing internal routes deliberately, with their behavior preserved.

### Don't:
- **Don't** turn every section into a raised card or add pervasive shadows.
- **Don't** spread decorative serif italics into navigation or body paragraphs.
- **Don't** substitute invented clients, testimonials, results, or unsupported brand marks for evidence.
- **Don't** assume internal routes already implement this visual system.

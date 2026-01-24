# Page Design Spec (Desktop-first)

## Global Styles (All Pages)

* **Theme**: Tet-inspired festive red + gold accents.

* **Design tokens**

  * Background: `#0B0B0F` (optional dark backdrop) or warm off-white `#FFF7E8`

  * Primary: `#D62828` (red)

  * Accent: `#F6C445` (gold)

  * Text: `#111827` (light bg) / `#F9FAFB` (dark bg)

  * Card: `#FFFFFF` with subtle shadow `0 10px 30px rgba(0,0,0,0.12)`

  * Radius: 16px (cards), 999px (pills/buttons)

* **Typography**

  * H1: 40/48, Semibold

  * H2: 28/36, Semibold

  * Body: 16/24, Regular

  * Button: 16/20, Semibold

* **Buttons & states**

  * Primary button: red background, white text

  * Hover: slightly darker red; add subtle lift (translateY(-1px))

  * Focus: 2px outline in gold

  * Disabled: 60% opacity

* **Layout & responsiveness**

  * Desktop-first max content width: 1100–1200px centered

  * Breakpoints: 1024px (desktop), 768px (tablet), 480px (mobile)

  * Use CSS Grid for main option layout + Flexbox for internal alignment

***

## Page 1: Main Screen

### Layout

* **Structure**: centered, stacked layout with a hero header and two-option grid.

* **Grid**: 2 columns on desktop, 1 column on mobile.

* **Spacing**: 24–32px section gaps; 16px internal padding for cards.

### Meta Information

* Title: “Lucky Money & Topics”

* Description: “Reveal a random lucky money amount or explore random questions by topic.”

* Open Graph: title + description, optional app preview image.

### Page Structure

1. **Top Header / Hero**

   * App title

   * Short tagline (one line)
2. **Primary Actions (Two Clickable Elements)**

   * Two large interactive cards/buttons of equal visual weight:

     * “Lucky Money”

     * “Topics”
3. **Lucky Money Reveal (Modal/Card Overlay)**

   * Triggered by clicking “Lucky Money”

### Sections & Components

* **Primary Action Card (component)**

  * Elements: icon/illustration area, title, short subtitle

  * Interaction: entire card clickable; hover/focus states

* **Lucky Money Reveal Modal**

  * Content: large formatted amount/value

  * Actions: “Close” (required)

  * Behavior:

    * Clicking outside or pressing Esc closes (optional but recommended)

    * On open, focus trapped within modal

***

## Page 2: Topics Screen

### Layout

* **Structure**: left-right split on desktop; stacked on mobile.

  * Left: topic list

  * Right: question display panel

* **System**: CSS Grid (2 columns) + Flex for list items and buttons.

### Meta Information

* Title: “Topics”

* Description: “Pick a topic and get a random question.”

* Open Graph: title + description.

### Page Structure

1. **Top Bar**

   * Page title

   * “Back” action to Main Screen
2. **Content Area**

   * Topic list/grid

   * Question card panel

### Sections & Components

* **Back Navigation**

  * Button/link: “Back” (left aligned)

  * Keyboard accessible

* **Topic List**

  * Display as list or compact card grid

  * State: selected topic highlighted (gold outline)

* **Question Panel**

  * Question Card

    * Shows the randomly selected question text for the chosen topic

  * “Next question” button

    * Re-rolls another random question within the same selected topic

  * Empty state

    * If no topic selected: prompt “Select a topic to see a question.”

### Interaction States

* Topic selection updates question panel immediately with a random question.

* “Next question” is disabled until a topic is selected.

* Keep layout stable (no major jumps) when questions change.


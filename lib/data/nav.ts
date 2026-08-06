export type NavItem = {
  href: string
  label: string
  /**
   * The navbar renders this entry as the Services dropdown trigger — a button,
   * not a link — because there is no `/services` hub page to send anyone to.
   * Everywhere else it is an ordinary link, and `href` is where it goes.
   */
  dropdown?: boolean
}

/**
 * The site's primary navigation, in order. One array, read by both the navbar
 * (`components/site/site-navbar.tsx`, desktop row and burger sheet) and the
 * footer's Explore column (`components/site/site-footer.tsx`).
 *
 * It exists because the two had already drifted: the footer was missing Home
 * and carried a "Sectors" entry the navbar never had, so the same site offered
 * two different maps of itself depending on which end of the page you read.
 * Add a top-level route here and both ends pick it up; add it to one component
 * and you have reopened the drift.
 *
 * Neither `/services` nor `/industries` exists as a page — both 308-redirect to
 * a homepage section (see `next.config.ts`), which is why Services points at an
 * anchor rather than a route.
 */
export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services", dropdown: true },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

/** Index of the Services entry, so the navbar can render its row around it. */
const dropdownIndex = primaryNav.findIndex((item) => item.dropdown)

/** Primary items before the Services dropdown. */
export const navBeforeServices = primaryNav.slice(0, dropdownIndex)

/** Primary items after the Services dropdown. */
export const navAfterServices = primaryNav.slice(dropdownIndex + 1)

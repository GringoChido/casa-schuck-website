/**
 * Content gates for launch.
 *
 * SHOW_TESTIMONIALS — the current testimonial quotes are mock/unverified
 * content. Flip to true only when real, permissioned guest quotes arrive
 * from the client (Google/TripAdvisor links + written permission). The same
 * gate controls review-derived structured data (aggregateRating) in
 * src/components/seo/JsonLd.tsx.
 */
export const SHOW_TESTIMONIALS = false;

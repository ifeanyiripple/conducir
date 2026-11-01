export type Project = {
  /** Unique, lowercase, no spaces. Used as the link anchor: /projects#mixed-use-development */
  slug: string;
  title: string;
  /** Short label shown above the title, e.g. "Real Estate" */
  category: string;
  /** '/projects/your-photo.jpg' (a file in /public/projects) or a full https image URL */
  image: string;
  imageAlt: string;
};

/* =====================================================================
   HOW TO ADD A RECENT PROJECT
   1. Put the photo in /public/projects/  (portrait or square, 1200px wide or more)
        e.g.  public/projects/garki-office-block.jpg
   2. Add an entry at the TOP of the list below (newest first):
        {
          slug: 'garki-office-block',
          title: 'Garki Office Block',
          category: 'Real Estate',
          image: '/projects/garki-office-block.jpg',
          imageAlt: 'Finished office block in Garki, Abuja',
        },
   As soon as the list has one entry, the Projects link appears in the
   navigation, the home page carousel appears, and /projects fills in.
   Photos from another website also need that site added to
   `images.remotePatterns` in next.config.ts.

   The company profile does not list any completed projects, so the list
   starts empty on purpose. Nothing is invented.
   ===================================================================== */

export const projects: Project[] = [];

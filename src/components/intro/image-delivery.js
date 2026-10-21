// Native responsive candidates; full-size sources remain available for high DPR and print.
const images = {
  "/intro/hero/hero-scene-v1.webp": {
    "width": 2172,
    "height": 724,
    "widths": [
      1086,
      1632
    ]
  },
  "/intro/hero/about-card-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/hero/education-card-v1.webp": {
    "width": 1672,
    "height": 940,
    "widths": [
      480,
      960
    ]
  },
  "/intro/hero/experience-card-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/hero/portfolio-card-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/about/about-scene-v1.webp": {
    "width": 2172,
    "height": 724,
    "widths": [
      1086,
      1632
    ]
  },
  "/intro/about/banking-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/about/healthcare-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/about/telecom-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/about/claims-v1.webp": {
    "width": 1672,
    "height": 941,
    "widths": [
      480,
      960
    ]
  },
  "/intro/education/education-hero-v1.webp": {
    "width": 2172,
    "height": 724,
    "widths": [
      1086,
      1632
    ]
  },
  "/intro/education/education-campus-v1.webp": {
    "width": 1536,
    "height": 1024,
    "widths": [
      640,
      1024
    ]
  },
  "/intro/education/education-computing-v1.webp": {
    "width": 1536,
    "height": 1024,
    "widths": [
      640,
      1024
    ]
  },
  "/intro/education/education-software-v1.webp": {
    "width": 1536,
    "height": 1024,
    "widths": [
      640,
      1024
    ]
  },
  "/profile/portrait.webp": {
    "width": 1254,
    "height": 1254,
    "widths": [
      480,
      768
    ]
  }
};

export function introImage(src, sizes) {
  const image = images[src];
  return {
    srcset: [...image.widths.map(width => `${src.replace('.webp', `-${width}.webp`)} ${width}w`), `${src} ${image.width}w`].join(', '),
    sizes,
  };
}

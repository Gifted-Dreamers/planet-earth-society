# Image Archive — Planet Earth Society

This folder contains local copies of all images used on the Planet Earth Society website. The live site references these images via CDN URLs for performance. Smaller hero images are stored directly in this folder; larger AI-generated section images are available via permanent CDN download links below.

## Hero Image (User-Provided) — Stored in This Folder

| File | Description | Used On |
|------|-------------|---------|
| `hero-original.jpg` | Original uploaded hero image (nature hand reaching toward robot hand) | Source file |
| `hero-desktop.webp` | Optimized for desktop (1920px wide) | Home page hero, Blog page hero |
| `hero-desktop.jpg` | JPG fallback for desktop | Fallback |
| `hero-mobile.webp` | Optimized for mobile (640px wide) | Home page hero (mobile) |
| `hero-mobile.jpg` | JPG fallback for mobile | Fallback |
| `hero-tablet.webp` | Optimized for tablet (1024px wide) | Responsive breakpoint |
| `hero-tablet.jpg` | JPG fallback for tablet | Fallback |
| `hero-thumb.webp` | Thumbnail / LQIP placeholder (320px wide) | Lazy-load placeholder |
| `hero-thumb.jpg` | JPG fallback for thumbnail | Fallback |

## AI-Generated Section Images — Download Links

These images are too large for the Git repo (~7MB each). Download them from the permanent CDN URLs below:

| Image | Description | Used On | Download URL |
|-------|-------------|---------|--------------|
| `pes-about-section.jpg` | Community gathering scene blending nature and technology | About page hero | https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/fBLZAJpsaKKDToDx.jpg |
| `pes-careers-section.jpg` | Collaborative workspace with organic-tech aesthetic | Careers page hero | https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/dnnShndQBRHvnNEr.jpg |
| `pes-platform-section.jpg` | Abstract digital landscape with glowing network nodes and organic vines | Home (Platform section), Platform page hero | https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/ihnobUIQTAAiimSj.jpg |
| `pes-podcast-section.jpg` | Podcast studio with nature-tech fusion elements | Podcast page hero | https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/nLdRNvBTpbZPnMiK.jpg |
| `pes-privacy-section.jpg` | Digital privacy shield with natural elements | Home (Privacy section) | https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/cTFYlUKxoRVISFIT.jpg |

## CDN URL Mapping (Source Code References)

The source code references CDN URLs. If you need to self-host these images, replace the CDN URLs in the following files:

| Source File | Variable | Image |
|-------------|----------|-------|
| `client/src/pages/Home.tsx` | `HERO_DESKTOP` | `hero-desktop.webp` |
| `client/src/pages/Home.tsx` | `HERO_MOBILE` | `hero-mobile.webp` |
| `client/src/pages/Home.tsx` | `PLATFORM_IMG` | `pes-platform-section.jpg` |
| `client/src/pages/Home.tsx` | `PRIVACY_IMG` | `pes-privacy-section.jpg` |
| `client/src/pages/About.tsx` | `ABOUT_IMG` | `pes-about-section.jpg` |
| `client/src/pages/Careers.tsx` | `CAREERS_IMG` | `pes-careers-section.jpg` |
| `client/src/pages/Platform.tsx` | `PLATFORM_IMG` | `pes-platform-section.jpg` |
| `client/src/pages/Podcast.tsx` | `PODCAST_IMG` | `pes-podcast-section.jpg` |
| `client/src/pages/Blog.tsx` | `HERO_IMG` | `hero-desktop.webp` |

## Notes

- For production self-hosting, compress the large section images to WebP format at 80% quality and resize to max 1920px width.
- The hero images have already been optimized in multiple sizes for responsive `<picture>` / `srcSet` usage.
- All images are copyright Planet Earth Society, 2026.

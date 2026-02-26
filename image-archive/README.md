# Image Archive — Planet Earth Society

This folder contains all images used on the Planet Earth Society website, stored locally in the GitHub repo for backup and portability. The live site references CDN URLs for fast delivery, but every image is available here in optimized form.

## Hero Image (User-Provided)

| File | Size | Resolution | Description |
|------|------|------------|-------------|
| `hero-original.jpg` | 167 KB | 1200×675 | Original uploaded image (nature hand reaching toward robot hand) |
| `hero-desktop.webp` | 70 KB | 1920×1080 | Optimized for desktop |
| `hero-desktop.jpg` | 104 KB | 1920×1080 | JPG fallback for desktop |
| `hero-tablet.webp` | 47 KB | 1024×576 | Optimized for tablet |
| `hero-tablet.jpg` | 70 KB | 1024×576 | JPG fallback for tablet |
| `hero-mobile.webp` | 23 KB | 640×360 | Optimized for mobile |
| `hero-mobile.jpg` | 31 KB | 640×360 | JPG fallback for mobile |
| `hero-thumb.webp` | 12 KB | 320×180 | Thumbnail / LQIP placeholder |
| `hero-thumb.jpg` | 14 KB | 320×180 | JPG fallback for thumbnail |

## AI-Generated Section Images (Optimized)

All resized to 1920×1071 at 80% quality. WebP versions are recommended for web use.

| WebP File | Size | JPG Fallback | Size | Used On |
|-----------|------|--------------|------|---------|
| `pes-about-section.webp` | 416 KB | `pes-about-section-optimized.jpg` | 495 KB | About page hero |
| `pes-careers-section.webp` | 262 KB | `pes-careers-section-optimized.jpg` | 376 KB | Careers page hero |
| `pes-platform-section.webp` | 257 KB | `pes-platform-section-optimized.jpg` | 391 KB | Home (Platform section), Platform page hero |
| `pes-podcast-section.webp` | 135 KB | `pes-podcast-section-optimized.jpg` | 241 KB | Podcast page hero |
| `pes-privacy-section.webp` | 268 KB | `pes-privacy-section-optimized.jpg` | 389 KB | Home (Privacy section) |

### Full-Resolution Originals (CDN Download)

The uncompressed originals (~7MB each, 2752×1536) are available via these permanent CDN links:

- **About:** https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/fBLZAJpsaKKDToDx.jpg
- **Careers:** https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/dnnShndQBRHvnNEr.jpg
- **Platform:** https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/ihnobUIQTAAiimSj.jpg
- **Podcast:** https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/nLdRNvBTpbZPnMiK.jpg
- **Privacy:** https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/cTFYlUKxoRVISFIT.jpg

## Source Code Variable Mapping

If you self-host, replace the CDN URLs in these files with your own paths:

| Source File | Variable | Image |
|-------------|----------|-------|
| `client/src/pages/Home.tsx` | `HERO_DESKTOP` | `hero-desktop.webp` |
| `client/src/pages/Home.tsx` | `HERO_MOBILE` | `hero-mobile.webp` |
| `client/src/pages/Home.tsx` | `PLATFORM_IMG` | `pes-platform-section.webp` |
| `client/src/pages/Home.tsx` | `PRIVACY_IMG` | `pes-privacy-section.webp` |
| `client/src/pages/About.tsx` | `ABOUT_IMG` | `pes-about-section.webp` |
| `client/src/pages/Careers.tsx` | `CAREERS_IMG` | `pes-careers-section.webp` |
| `client/src/pages/Platform.tsx` | `PLATFORM_IMG` | `pes-platform-section.webp` |
| `client/src/pages/Podcast.tsx` | `PODCAST_IMG` | `pes-podcast-section.webp` |
| `client/src/pages/Blog.tsx` | `HERO_IMG` | `hero-desktop.webp` |

## Total Archive Size

~3.8 MB (all 21 files) — well within Git repo limits.

## Notes

- All images are copyright Planet Earth Society, 2026.
- WebP format is supported by all modern browsers (Chrome, Firefox, Safari, Edge).
- For self-hosting, serve the `.webp` files with `Content-Type: image/webp` header.

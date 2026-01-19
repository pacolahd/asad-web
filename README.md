# ASAD Website

Official website for **ASAD (Association Sportive des Amis du Developpement)**, a community sports organization in Bonaberi, Douala, Cameroon founded in 2004.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Photo Gallery:** react-photo-album + yet-another-react-lightbox

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
asad-web/
├── app/
│   ├── (marketing)/          # Public pages with Header/Footer
│   │   ├── page.tsx          # Homepage
│   │   ├── about/            # About section (4 pages)
│   │   ├── sports/           # Sports section (5 pages)
│   │   ├── community/        # Community section (7 pages)
│   │   ├── members/          # Members section (2 pages)
│   │   ├── media/            # Media section (4 pages)
│   │   └── contact/          # Contact page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + brand colors
│   └── not-found.tsx         # 404 page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, Navigation
│   ├── sections/             # Reusable page sections
│   └── gallery/              # Photo gallery components
├── data/                     # Static content data
├── lib/                      # Utility functions
├── public/
│   ├── images/               # Images (logo, gallery, etc.)
│   └── documents/            # PDFs and documents
└── types/                    # TypeScript type definitions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About ASAD |
| `/about/history` | Organization history |
| `/about/leadership` | Leadership team |
| `/about/statutes` | Governing documents |
| `/sports` | Sports overview |
| `/sports/competitions` | Competitions & achievements |
| `/sports/friendly-matches` | Friendly matches |
| `/sports/internal-challenge` | ASAD # ASAD challenge |
| `/sports/jerseys` | Jersey collection |
| `/community` | Community programs overview |
| `/community/asad-sundays` | Weekly gatherings |
| `/community/baby-shower` | Baby shower program |
| `/community/back-to-school` | Education support |
| `/community/soap-oil-thrift` | Savings initiative |
| `/community/ndjangi` | Rotating savings |
| `/community/social-fund` | Emergency support |
| `/members` | Membership info |
| `/members/in-memoriam` | Memorial page |
| `/media` | Media overview |
| `/media/gallery` | Photo albums |
| `/media/gallery/[album]` | Album detail |
| `/media/program` | Annual program |
| `/contact` | Contact information |

## Brand Colors

- **Primary (Green):** `#1B5E20`
- **Secondary (Blue):** `#1976D2`
- **Accent (Yellow):** `#FFC107`

## Adding Content

### Images
Place images in the appropriate folder under `public/images/`:
- `logo/` - Organization logos
- `gallery/` - Photo album images
- `leadership/` - Team member photos
- `hero/` - Hero section backgrounds

### Documents
Place PDFs in `public/documents/` and update the statutes page to link to them.

### Gallery Albums
Edit `data/gallery-albums.ts` to add new photo albums. Each album should have:
- Unique ID
- Title and description
- Cover image path
- Array of images with dimensions

## License

All rights reserved. © ASAD - Association Sportive des Amis du Developpement

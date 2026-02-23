

## Replace Header Logo

Replace the current local logo image with the remote Gandomak logo and increase its display size for better readability.

### Changes

**`src/components/Header.tsx`**
- Update the logo import/source from the local `@/assets/logo.png` to the remote URL `https://gandomakshop.ir/wp-content/uploads/2025/10/Final-0۷-600x338.png`
- Remove the unused local logo import
- Increase the `<img>` dimensions from `h-12 w-12` to approximately `h-12 w-auto` (or similar) so the wider aspect ratio of the new logo renders fully and remains readable
- Remove the separate "گندمک" text span next to the logo, since the new logo image already contains the brand name


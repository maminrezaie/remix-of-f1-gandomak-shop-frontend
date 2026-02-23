

## Add Saffron Products to the Tea Category Slider

The slider currently only fetches products from the "دمنوش و چای" category. We'll update it to also include saffron ("زعفران") products in the same slider.

### Changes

**File: `src/components/TeaCategorySlider.tsx`**

1. Find both the tea category AND the saffron category from the categories list.
2. Fetch products from both categories in parallel (two separate queries, or combine IDs).
3. Merge the two product arrays and display them together in the same scrollable slider.
4. Update the section title to reflect both categories (e.g., "دمنوش، چای و زعفران").

### Technical Details

- Find saffron category by matching `c.name.includes("زعفران")` or `c.slug.includes("saffron")`.
- Use a second `useQuery` for saffron products (same pattern as the tea query).
- Merge and deduplicate the two product arrays by `id` before rendering.
- Both queries run in parallel since they're independent `useQuery` hooks.
- No other files need changes.


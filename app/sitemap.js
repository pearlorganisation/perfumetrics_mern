import chalk from "chalk";

export const revalidate = 15; // revalidate at most every 15 seconds

// Format the date to ISO 8601 string
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString(); // Return date in ISO 8601 format (e.g., "2025-03-18T20:31:13.498Z")
}

export default async function siteMap() {
  const baseUrlFrontend = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    // Fetch perfumes data
    const response = await fetch(`${baseUrl}/api/v1/perfume?Limit=infinite`);
    const newsRes = await fetch(`${baseUrl}/api/v1/news`);
    const brandRes = await fetch(`${baseUrl}/api/v1/brand`);
    const celebrityRes = await fetch(`${baseUrl}/api/v1/celebrityPerfumes`);

    if (!newsRes.ok) throw new Error("Failed to fetch News data");
    if (!celebrityRes.ok) throw new Error("Failed to fetch Celebrity data");
    if (!response.ok) throw new Error("Failed to fetch Perfumes data");

    // Parse response body as JSON
    const responseData = await response.json();
    const responseNews = await newsRes.json();
    const responseBrand = await brandRes.json();
    const responseCelebrity = await celebrityRes.json();

    // Extract data
    const allPerfumesData = responseData?.data || [];
    const allNewsData = responseNews?.data || [];
    const allBrandData = responseBrand?.data || [];
    const allCelebrityData = responseCelebrity?.data || [];

    // Debugging output
    console.log(
      chalk.bgYellow(
        "This is perfumes data in sitemap",
        JSON.stringify(allPerfumesData?.length)
      )
    );

    // Map data to URLs with lastModified
    const allPerfumes = allPerfumesData?.map((post) => ({
      url: `${baseUrlFrontend}/product/${post?.slug}`,
      lastModified: formatDate(post?.updatedAt || "2024-12-21T10:39:05.105Z"),
    }));

    const allCelebrity = allCelebrityData?.map((post) => ({
      url: `${baseUrlFrontend}/celebrityPerfumeBlog/${post?.slug}`,
      lastModified: formatDate(post?.updatedAt || "2024-12-21T10:39:05.105Z"),
    }));

    const allNews = allNewsData?.map((news) => ({
      url: `${baseUrlFrontend}/news/${news?.slug}`,
      lastModified: formatDate(news?.updatedAt || "2024-12-21T10:39:05.105Z"),
    }));

    const allBrands = allBrandData?.map((brand) => ({
      url: `${baseUrlFrontend}/brand/${brand?.slug}`,
      lastModified: formatDate(brand?.updatedAt || "2024-12-21T10:39:05.105Z"),
    }));

    // Return sitemap structure
    return [
      {
        url: baseUrlFrontend,
        lastModified: new Date().toISOString(), // Current date for the homepage
      },
      {
        url: `${baseUrlFrontend}/category/womens-style`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/category/mens-style`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/review/writeAreview`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/review/requestAreview`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/aboutUs`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/termsConditions`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/privacyPolicy`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrlFrontend}/contactUs`,
        lastModified: new Date().toISOString(),
      },
      ...allNews,
      ...allPerfumes,
      ...allBrands,
      ...allCelebrity,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return []; // Return an empty array on error
  }
}

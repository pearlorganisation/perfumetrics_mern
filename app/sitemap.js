import chalk from "chalk";
export const revalidate = 15; // revalidate at most every 15 mili second
function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long", // "Monday"
    year: "numeric", // "2024"
    month: "long", // "December"
    day: "numeric", // "21"
    hour: "2-digit", // "10"
    minute: "2-digit", // "39"
    second: "2-digit", // "05"
    timeZoneName: "short", // "UTC"
  };

  return date.toLocaleString("en-US", options); // Format date as "Monday, December 21, 2024, 10:39:05 AM UTC"
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
    if (!celebrityRes.ok) throw new Error("Failed to fetch News data");
    if (!response.ok) {
      throw new Error("Failed to fetch Perfumes data");
    }

    // Parse response body as JSON
    const responseData = await response.json();
    const responseNews = await newsRes.json();
    const responseBrand = await brandRes.json();
    const responseCelebrity = await celebrityRes.json();
    // Extract perfumes data
    const allPerfumesData = responseData?.data || [];
    const allNewsData = responseNews?.data || [];
    const allBrandData = responseBrand?.data || [];
    const allCelebrityData = responseCelebrity?.data || [];
    console.log(
      chalk.bgYellow(
        "This is news data in sitemap",
        JSON.stringify(allPerfumesData?.length)
      )
    );
    // Map perfumes to URLs and last modified dates
    const allPerfumes = allPerfumesData?.map((post) => {
      return {
        url: `${baseUrlFrontend}/product/${post?.slug}`,
        lastModified: formatDate(post?.updatedAt || "2024-12-21T10:39:05.105Z"),
      };
    });
    const allCelebrity = allCelebrityData?.map((post) => {
      return {
        url: `${baseUrlFrontend}/celebrityPerfumeBlog/${post?.slug}`,
        lastModified: formatDate(post?.updatedAt || "2024-12-21T10:39:05.105Z"),
      };
    });

    const allNews = allNewsData?.map((news) => {
      return {
        url: `${baseUrlFrontend}/news/${news?.slug}`,
        lastModified: formatDate(news?.updatedAt || "2024-12-21T10:39:05.105Z"),
      };
    });

    const allBrands = allBrandData?.map((brand) => {
      return {
        url: `${baseUrlFrontend}/brand/${brand?.slug}`,
        lastModified: formatDate(
          brand?.updatedAt || "2024-12-21T10:39:05.105Z"
        ),
      };
    });

    // Return sitemap structure
    return [
      {
        url: baseUrlFrontend,
        lastModified: new Date(),
      },
      {
        url: `${baseUrlFrontend}/category/womens-style`,
      },
      {
        url: `${baseUrlFrontend}/category/mens-style`,
      },
      {
        url: `${baseUrlFrontend}/review/writeAreview`,
      },
      {
        url: `${baseUrlFrontend}/review/requestAreview`,
      },
      {
        url: `${baseUrlFrontend}/aboutUs`,
      },
      {
        url: `${baseUrlFrontend}/termsConditions`,
      },
      {
        url: `${baseUrlFrontend}/privacyPolicy`,
      },
      {
        url: `${baseUrlFrontend}/contactUs`,
      },
      ...allNews,
      ...allPerfumes,
      ...allBrands,
      ...allCelebrity,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

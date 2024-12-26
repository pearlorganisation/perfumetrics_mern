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
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    // Fetch perfumes data
    const response = await fetch(`${baseUrl}/api/v1/perfume`);

    if (!response.ok) {
      throw new Error("Failed to fetch perfumes data");
    }

    // Parse response body as JSON
    const responseData = await response.json();

    // Extract perfumes data
    const allPerfumesData = responseData?.data || [];

    console.log(
      chalk.bgYellow("This is perfume data in sitemap", allPerfumesData.length)
    );
    // Map perfumes to URLs and last modified dates
    const allPerfumes = allPerfumesData?.map((post) => {
      return {
        url: `${baseUrl}/api/v1/perfume/${post?._id}`,
        lastModified: formatDate(post?.updatedAt || "2024-12-21T10:39:05.105Z"),
      };
    });

    // Return sitemap structure
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      ...allPerfumes,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

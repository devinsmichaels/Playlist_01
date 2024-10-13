document.addEventListener("DOMContentLoaded", function () {
    // RSS feed URL
    const rssUrl = 'https://anchor.fm/s/ec4c4518/podcast/rss';

    // Function to fetch and parse RSS feed
    async function fetchPodcastEpisodes() {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        const data = await response.json();
        const episodesContainer = document.getElementById("episodes");

        data.items.forEach(episode => {
            const episodeElement = document.createElement("div");
            episodeElement.classList.add("episode");

            // Episode title
            const title = document.createElement("h3");
            title.textContent = episode.title;

            // Link to more information (if available)
            const link = document.createElement("a");
            link.href = episode.link;
            link.textContent = "More Info";
            link.target = "_blank";

            // Audio player
            const audio = document.createElement("audio");
            audio.controls = true;
            audio.src = episode.enclosure.link;

            // Append elements
            episodeElement.appendChild(title);
            episodeElement.appendChild(link);
            episodeElement.appendChild(audio);
            episodesContainer.appendChild(episodeElement);
        });
    }

    // Fetch the episodes when the page loads
    fetchPodcastEpisodes();
});

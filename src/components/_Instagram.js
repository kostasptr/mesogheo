import { useEffect, useState } from "react";

export const Instagram = ({ accessToken1, accessToken2, accessToken3, count }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [instagramData, setInstagramData] = useState(null);

  const fetchInstagramData = (url) => {
    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.hasOwnProperty("error")) {
            setError(true);
          } else {
            setInstagramData(data);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(true);
          setLoading(false);
        });
  };

  useEffect(() => {
      const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=20&access_token=${accessToken1+accessToken2+accessToken3}`;
      fetchInstagramData(url);
  }, [accessToken1, accessToken2, accessToken3]);

  if (loading) {
    return <p className="text-center">Loading Instagram</p>;
  }

  if (error) {
    return (
      <p className="text-center"></p>
    );
  }

  return (
    <div className="mesogheo-grid -mb-0.75 md:-mb-2 lg:-mb-3 sm2:-mb-3c sm3:-mb-4d">
      {instagramData.data
        .filter((item) => {return item.media_type !== "VIDEO" && item.media_type !== "CAROUSEL_ALBUM"})
        .slice(0, count)
        .map((item, index) => (
          <div key={index} className="col-span-4 mb-0.75 md:mb-2 lg:mb-3 sm2:mb-3c sm3:mb-4d">
            <a
              key={index}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-full"
                key={index}
                src={item.media_url}
                alt={item.caption}
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default Instagram;

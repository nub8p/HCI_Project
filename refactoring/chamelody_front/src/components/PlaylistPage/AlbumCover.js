import React, { useState, useEffect } from 'react';

function AlbumCover({ trackId }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchAlbumCover = async () => {
      try {
        // trackId를 사용하여 앨범 정보를 가져오는 API 호출
        // https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT
        const response = await fetch(`https://api.spotify.com/v1/albums/${trackId}`);
        const data = await response.json();
        
        // 앨범 커버의 URL을 설정합니다.
        setImageUrl(data.album.imageUrl);
      } catch (error) {
        console.log('Error fetching album cover:', error);
      }
    };

    fetchAlbumCover();
  }, [trackId]);

  return <img src={imageUrl} alt="Album Cover" />;
}

export default AlbumCover;

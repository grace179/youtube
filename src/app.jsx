import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyDQ9i0AzvgItTHHGlVk4Us-Do_4q_XL1xI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  
  return (
    <VideoList key={videos.id} videos={videos}/>
  );
}

export default App;

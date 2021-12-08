import './App.css';
import Appbody from './components/appbody';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import Loader from './components/loader';

function App() {
  const [profiles,setProfile] = useState([]);
  const [loading,setLoading] = useState(false);
  const deletionClick=(id)=>setProfile(profiles.filter((profile)=>profile.id !== id));
  useEffect(()=>{
    const fetchdata=async()=>{
       setLoading(true);
       const {data} = await Axios.get('https://jsonplaceholder.typicode.com/users');
       setProfile(data);
       setLoading(false);
    }
    fetchdata();
  }
  ,[])
  return (
    <div className="App">
       {loading?
       <Loader/>
       :
       <Appbody profiles={profiles} deletionClick={deletionClick}/>
       }
    </div>
  );
}

export default App;

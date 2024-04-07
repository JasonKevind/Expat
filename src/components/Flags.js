import { useNavigate } from 'react-router-dom';
import '../App.css';
export const Flags=()=>{
    const data=[{goto:"usa",link:"https://th.bing.com/th/id/R.d65d7f7f7f6ecf6ab63a1db1bd50f578?rik=0DgUUGvj0iDkjw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffLoda1m.jpg&ehk=5Di9n1auRvKg2jsCs%2fbonbPnTyjpSsshUZTl5wKDMwo%3d&risl=&pid=ImgRaw&r=0"},
    {goto:"france",link:"https://images.alphacoders.com/958/95873.jpg"},
    {goto:"uk",link:"https://wallpaperset.com/w/full/6/a/6/339322.jpg"},
    {goto:"germany",link:"https://wallpapercave.com/wp/wc1800984.jpg"},
    {goto:"hongkong",link:"https://wallpaperaccess.com/full/1410661.jpg"},
    {goto:"canada",link:"https://wallpaperset.com/w/full/6/c/9/464409.jpg"},
    {goto:"ireland",link:"https://wallpapercave.com/wp/wp2017361.jpg"}
    ,{goto:"australia",link:"https://wallpaperaccess.com/full/1458402.jpg"}
]
const nav=useNavigate();
return(
    <div className='Flags'>           
        {data.map(it=>   
            <div onClick={(e)=>{
                e.preventDefault();
                nav("/Country",{state:{country:it.goto}})
                
            
            }} id={it.goto}  style={{backgroundImage:`url(${it.link})`}}>           
            </div>
        )}       
    </div>
)
 }
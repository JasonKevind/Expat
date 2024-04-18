import { useNavigate } from 'react-router-dom';
import '../App.css';
export const Flags=()=>{
    const data=[{goto:"USA",link:"https://th.bing.com/th/id/R.d65d7f7f7f6ecf6ab63a1db1bd50f578?rik=0DgUUGvj0iDkjw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffLoda1m.jpg&ehk=5Di9n1auRvKg2jsCs%2fbonbPnTyjpSsshUZTl5wKDMwo%3d&risl=&pid=ImgRaw&r=0"},
    {goto:"france",link:"https://images.alphacoders.com/958/95873.jpg"},
    {goto:"uk",link:"https://wallpaperset.com/w/full/6/a/6/339322.jpg"},
    {goto:"germany",link:"https://wallpapercave.com/wp/wc1800984.jpg"},
    {goto:"hongkong",link:"https://wallpaperaccess.com/full/1410661.jpg"},
    {goto:"canada",link:"https://wallpaperset.com/w/full/6/c/9/464409.jpg"},
    {goto:"ireland",link:"https://wallpapercave.com/wp/wp2017361.jpg"}
    ,{goto:"australia",link:"https://wallpaperaccess.com/full/1458402.jpg"}
    ,{goto:"new zealand",link:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bf3899e-48a5-412e-95c6-fe219464eb57/d1smtkj-8bb8c023-003f-4b2a-91f7-826ae43b15ff.png/v1/fill/w_900,h_450,q_80,strp/new_zealand_grungy_flag_by_think0_d1smtkj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwIiwicGF0aCI6IlwvZlwvMmJmMzg5OWUtNDhhNS00MTJlLTk1YzYtZmUyMTk0NjRlYjU3XC9kMXNtdGtqLThiYjhjMDIzLTAwM2YtNGIyYS05MWY3LTgyNmFlNDNiMTVmZi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Kt729GEzwDNtph2C-T-pdExu0hEdZZNWBvI6HoU7ApQ"}
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
import '../App.css';
import { Flags } from './Flags';
import { Image } from './Image';
import { MainContent } from './MainContent';
export const Home=(props)=>{
 return (
    <>
    <Image country={""} img={'cheer.jpg'} head={'Convenient Migrations'} info={<div>jkdjb sdkjdsbkjs sdkjdsbkjs</div>} />
    <MainContent list={[{'main':"main",'img':"flags.jpg",'head':'Countries We Deal','info':'Let it be that you wanna migrate or you wish to study abroad, we can make it possible for you to make to countries like USA, Canada, Germany, Hong-Kong, France, Australia, New Zealand. Details for migration as well as for educational purposes can be seen below.'}
   ]}/>
   {props.hasOwnProperty("flags")?<Flags/>:null}
    </>
 )
}
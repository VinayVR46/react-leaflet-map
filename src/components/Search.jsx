import React, {useState} from 'react'
import {OutlinedInput, Button, List, ListItem, ListItemText, ListItemIcon,Divider, ListItemButton} from '@mui/material'
import images from '../assets/images.png'

const map_url = "https://nominatim.openstreetmap.org/search?"
const params = {
  q: "",
  format:'json',
  addressdetails:'addressdetails'
}

export default function Search(props) {
  const {selectPosition, setSelectPosition} = props
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  return (
    <div style={{display:"flex", flexDirection:'column'}}>
<div style={{display:'flex'}}>
<div style={{flex:1}}>
<OutlinedInput style={{width:'100%'}} value = {search} onChange={(e)=>{
setSearch(e.target.value)

}}/>
</div>
<div style={{display:'flex', alignItems:'center', padding:'0px 20px'}}>
  <Button variant='contained' color='primary' onClick={()=>{
    const params = {
      q:search,
      format:'json',
      addressdetails:1,
      polygon_geojson:0

    };
    
 const queryString =  new URLSearchParams(params).toString();
 const requestOptions = {
  method: "GET",
  redirect: "follow"
 };
 fetch(`${map_url}${queryString}`, requestOptions)
 .then((response)=> response.text())
 .then((result)=> {
  console.log(JSON.parse(result))
  setList(JSON.parse(result))
  
 })
 .catch(err=>console.log("err:", err))
  }}>Search</Button>
</div>
</div>
<div>
  <List component='nav' aria-label='main mailbox folders'>
    {list.map((item)=>{

      return(
        <div key={item?.osm_id}>
          <ListItemButton onClick={()=>{
            console.log("po")
            setSelectPosition(item)

            }}>
      <ListItemIcon>
        <img src={images} alt='Placeholder' style={{width:38, height:38}}/>

      </ListItemIcon>
      <ListItemText primary = {item?.display_name}/>
    </ListItemButton>
    <Divider/>
        </div>
      )
    })}
   
  </List>
</div>
    </div>
  )
}

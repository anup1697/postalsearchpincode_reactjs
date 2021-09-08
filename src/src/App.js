

import Search from './Component/Search'
import React,{useState} from 'react';

import './App.css';


function App() {
 const searchResult = () => {
   console.log('Search Text Value',search)
   // GET Request.
fetch(`https://api.postalpincode.in/pincode/${search}`)
// Handle success
.then(response => response.json())  // convert to json
.then((json) =>{ console.log(json[0].PostOffice)
setTabledata(json[0].PostOffice?json[0].PostOffice:[])
}
)  
  //print data to console
.catch((err) => {console.log('Request Failed', err)}); // Catch errors
  };
  const [search,setSearch] = useState('');
  const [tabledata,setTabledata] = useState([]);
   const submitHandle=(e)=>{
     e.preventDefault();
  }

  return(
    
    <>
    
    <div className="App"> 
  
        <form onSubmit={submitHandle}>
            <div className="form-group" style={{border:"2px outset black",borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
borderTopRightRadius: 30,
borderTopLeftRadius: 30,}}>
                <input type="text" placeholder="Pin Number"value={search} onChange={(event) => { setSearch(event.target.value)}}></input>
                <button type="submit"  onClick={() => { searchResult()}}className="btn btn-primary">Search</button>
            </div>
            <div className="form-group">
              
            </div>
        </form>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
        <table className="table ">
    <thead style={{backgroundcolor:"black"}}>
<tr>
  
  <th scope="col">Pincode</th>
  <th scope="col">SearchTime</th>
</tr>
</thead>
<tr>
  <th scope="col">{search}</th>
  <th scope="col">{Date()}</th>
</tr>
</table>
        </div>
        <div class="col-md-9">
    <table className="table ">
    <thead style={{backgroundcolor:"black"}}>
<tr>
  
  <th scope="col">Pincode</th>
  <th scope="col">Name</th>
  <th scope="col">BranchType</th>
  <th scope="col">Circle</th>
  <th scope="col">Region</th>
  <th scope="col">State</th>
</tr>
</thead>
{
 
        tabledata.map((item)=>{
          return(
            <tr class="table table-primary">
              <th scope="col">{item.Pincode}</th>
              <th scope="col">{item.Name}</th>
              <th scope="col">{item.BranchType}</th>
              <th scope="col">{item.Circle}</th>
              <th scope="col">{item.Region}</th>
              <th scope="col">{item.State}</th>
            </tr>
            
            )})
          }
         {
            tabledata[0]?null:'no data found'
         }


</table>
    </div>
    </div>
    </div>
  
    </>
         
)
};
<Search/>

export default App;

import {useState} from "react";
import axios from "axios";

export default function Success(){
const [name,setName] =useState("");
const [company,setCompany] =useState("");
const [pkg,setPkg] =useState("");
const [ans,setAns] =useState("");

const hName = (event) => {setName(event.target.value);}
const hCompany = (event) => {setCompany(event.target.value);}
const hPkg = (event) => {setPkg(event.target.value);}

const save = (event) => {
event.preventDefault();
let urladd = "https://ss-backend-o03banyn5-2021niyatigaonkar-vesacin.vercel.app/save";
let data =
{name,company,pkg};
axios.post(urladd,data)
.then(res=>{
setAns("record saved ");
setName("");
setCompany("");
setPkg("");
})
.catch(err=> setAns("issue " + err))

}

return (
<>
<center>
<h1> Success Stories App </h1>
<form onSubmit={save}>
<input type="text" placeholder="Enter name " onChange={hName} value={name} /><br/><br/>
<input type="text" placeholder="Enter Company " onChange={hCompany} value={company} /><br/><br/>
<input type="number" step="any" placeholder="Enter package " onChange={hPkg} value={pkg} /><br/><br/>
<input type="submit" />
</form>
<h1>{ans}</h1>
</center>
</>
);
}
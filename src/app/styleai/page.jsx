"use client"
import { useEffect, useState } from "react"
import { MdOutlineUploadFile ,MdOutlineKeyboardArrowLeft} from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import Loader from "../Components/loader";
import Button from "../Components/button";
import './style.css'
export default function Home() {
  
const [file, setFile] = useState()
const [text, setText] = useState()
const [data, setData] = useState()
const [sidepannelOpen,setSidepannelOpen]=useState(true)
const [loading, setLoading] = useState(false)
const [generating, setGenerating] = useState(false)

useEffect(()=>{
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      Generate();
    }
  };
  document.addEventListener('keydown', handleKeyPress);
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})
 const Generate =async () => {
   if (!text){ 
    alert("Enter prompt")
    return;}
    setLoading(true)
    const formData = new FormData();
    formData.set('file', file);
    formData.set('prompt', text);
   

    const res = await fetch('/api/visionmodel', {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      const resp = await res.json()
      const concatenatedString = resp.result.join(' ');
      setData(concatenatedString)
      setFile(null)
    }}
    useEffect(()=>{
      gsap.to('.sidepannel',{
       width: sidepannelOpen?'17vw':'0',
       duration:.5,
       ease: sidepannelOpen?"power4.out":"power4.in",
      })
      gsap.to('.mainContainer',{
       width: sidepannelOpen?'82vw':'100vw',
       ease: sidepannelOpen?"power4.out":"power4.in",
       duration:.5
      })
      gsap.to('.togglebuttonchat',{
        rotate:  sidepannelOpen?0:180,
        ease:'circ'
      })
     },[sidepannelOpen])
  return (
    <>
    <div className="main bg-zinc-900 flex justify-center items-center">
      </div>
    <div className="hero flex h-full w-full  absolute overflow-hidden left-0 top-0 ">
      <div className="sidepannel bg-zinc-950 py-4 flex flex-col items-center w-[17vw] shadow-inner overflow-hidden ">
       <div className=" w-[90%] font-secondary p-2 rounded-lg hover:bg-zinc-800 text-slate-300 font-semibold  flex items-center gap-4" >
          <div className="rounded-full w-8 h-8 bg-slate-100"></div>
          <h1>New Style</h1>
       </div>

      </div>
      <div className="SidepannelButton flex items-center w-[1xw] px-2 text-zinc-400 "><MdOutlineKeyboardArrowLeft onClick={()=>setSidepannelOpen(!sidepannelOpen)} className="togglebuttonchat scale-[300%]"/></div>
      <div className="mainContainer flex w-[82vw] flex-col items-center">
      <video className=" absolute scale-125 blur-lg brightness-[40%]" autoPlay loop muted src="/RJ-BALL-BLUE-ORANGE-scaled.webm"></video> 
    <div className=" h-[85vh] min-w-[80%] relative px-8">
  <div className="textarea absolute w-[90%]  bottom-5 overflow-clip">
  {loading&&<div><Loader/></div>}
 {data&&<TypeAnimation
      sequence={[
        data, 
        () => { setLoading(false)
          console.log('Sequence completed');
        },
      ]}
      wrapper="p"
      cursor={true}
      speed={50}
      style={{ fontSize: '1.1em',color:"white", display: 'inline-block' }}
    />}
  </div>

    </div>
    <div className="flex justify-between items-center  w-[60%] border border-zinc-500 p-1 rounded-2xl">
   <div className="h-10 w-[calc(100%-200px)]"> <input placeholder="Enter your prompt"  type="text" className=" pl-2 bg-transparent text-white focus:outline-none h-full w-full" onChange={e => setText(e.target.value)} /></div>
   <div className="h-10  relative overflow-hidden rounded-full w-12"> <input className="h-full opacity-0 w-full" type="file" onChange={e => setFile(e.target?.files[0])} /><MdOutlineUploadFile className={`absolute top-1 left-2  ${file?'text-red-500':'text-white'}  pointer-events-none`} size={30}/></div>
  <div id="generateButton" onClick={Generate} > <Button /></div>
    </div>
    </div>
    </div>
   
   
    </>
  )

  }

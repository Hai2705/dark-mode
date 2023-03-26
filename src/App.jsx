import { useState} from 'react';
import { useEffect } from 'react';
import './App.css';
function App() {
  const element = document.documentElement
  const [theme ,setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "desktop"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      name: "sunny",
      text: "light",
    },
    {
      name: "moon",
      text: "dark",
    },
    {
      name: "desktop",
      text: "desktop",
    },
  ]
  useEffect(() => {
      switch (theme){
          case "dark":
          element.classList.add("dark");
          localStorage.setItem('theme', 'dark');
          break;
          case "light":
          element.classList.remove("dark");
          localStorage.setItem('theme', 'light');
          break;
          default:
            localStorage.removeItem('theme');
            onWindowMatch();
            break
      }
  }, [theme])
  function onWindowMatch(){
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
        element.classList.add("dark");
    }else{
      element.classList.remove("dark")
    }
  }
  darkQuery.addEventListener("change" , (e)=>{
      if(!(theme in localStorage) ){
        if(darkQuery.matches){
          element.classList.add("dark")
        }else{
          element.classList.remove("dark")
        }
      }
  })
  return (
    <div className="App relative dark:bg-slate-700 dark:text-white h-screen">
            <div  className='fixed top-2 right-2'>
      {
          options.map((op)=>(
        <button onClick={()=>setTheme(op.text)} key={op.text} className={`h-10 w-10 bg-slate-200 dark:bg-slate-600 py-1 px-1 rounded-full m-1 ${theme === op.text && "text-sky-500"} `}>
        <ion-icon size="large" name={op.name}></ion-icon>
        </button> 
          ))
      }
        </div>
        <h1 className='mb-20 text-3xl font-semibold'>Code A Program</h1>
        <span className='mt-40 tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</span>
        <span className='tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</span>
        
        <p className='tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
        <p className='tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
        <p className='tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p><span className='tracking-wide leading-tight'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</span>
    </div>
  );
}

export default App;

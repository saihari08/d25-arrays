import logo from './logo.svg';
import './App.css';

function App() {
      
  let Indwcpalyers2024=["RohitSharma (c)", "SanjuSamson", "YashasviJaiswal", "ViratKohli",
    "SuryakumarYadav", "RishabhPant","HardikPandya" , "ShivamDube", "RavindraJadeja",
     "AxarPatel", "KuldeepYadav", "YuzvendraChahal", "ArshdeepSingh", "JaspritBumrah", 
     "Mohd.Siraj"]
 
  return (
    <div className="App">
      <h2>Array Methods</h2>
     <button onClick={()=>{
      console.log(Indwcpalyers2024);
      //delete Indwcpalyers2024[2]
      Indwcpalyers2024.splice(2,1)
     }}>Delete</button>


     <button onClick={()=>{
      let cars=["TataPunch","Fortuner","MG Hector"];
      let bikes=["KTM","Classic350","R15"];

      let Vehicles=cars.concat(bikes);
      console.log(cars);
      console.log(bikes);
      console.log(Vehicles);
     let Vehicles1=[...cars,...bikes];
     console.log(Vehicles1)
    }}>Concat</button>

    <button onClick={()=>{
      let tollywoodActors=["Jr.ntr","RamCharan","PawanKalyan","Prabhas",["Mahesh","Namrata"],
        "Rana","RaviTeja"];
      let tollywoodDirectors=["Puri Jagannadh","Rajamouli","Sandeep Reddy",
        "Koratala Siva","Trivikram Srinivas"];
      let MusicDirectors=["Keeravani","Mani Sharma","Koti","DSP","Thaman"];

      let Moviecast=[tollywoodActors,tollywoodDirectors,MusicDirectors];
      console.log(Moviecast)
      //console.log(Moviecast[2][3])
      let allcast=Moviecast.flat(2);
      console.log(allcast);
    }}>Flat</button>

    <button onClick={()=>{
    let allRounders=Indwcpalyers2024.slice(6,10)
    console.log(allRounders)
    }}>Slice</button>

    <button onClick={()=>{
       let indplayers=Indwcpalyers2024.fill("IndPlayers",2,5)
       console.log(indplayers)
    }}>Fill</button>

     <button onClick={()=>{
      let JrntrUpcomingMovie="Devara";
      let arr=Array.from(JrntrUpcomingMovie);
      console.log(JrntrUpcomingMovie)
      console.log(arr)
     }}>From</button>

     <button onClick={()=>{
      let result=Indwcpalyers2024.includes("virat")
      let result1=Indwcpalyers2024.includes("ViratKohli")
      console.log(result)
      console.log(result1)
     }}>Includes</button>

    <button onClick={()=>{
     console.log (Indwcpalyers2024.indexOf("HardikPandya"))
     
     console.log (Indwcpalyers2024.lastIndexOf("HardikPandya"))
    }}>IndexOf</button>


     <button onClick={()=>{
       console.log(Indwcpalyers2024);
       Indwcpalyers2024.reverse();
     }}>Reverse</button>

     <button onClick={()=>{
        //for(let i=0;i<Indwcpalyers2024.length;i++)
        //{ 
        //  console.log(Indwcpalyers2024[i])}

    Indwcpalyers2024.forEach((ele,i)=>{
      console.log(`${i}--->${ele}`)
    })
     }}>ForEach</button>


     <button onClick={()=>{
      let marksArr=[78,85,96,82,90,80];
     let result= marksArr.every((ele,i)=>{
        return ele>=35
      })
      if(result==true){
        console.log("student passed in tenth")
      }else{
        console.log("student failed in tenth")
      }

      // if(marksArr[0]>=35 &&
        //marksArr[1]>=35 &&
       // marksArr[2]>=35 &&
       // marksArr[3]>=35 &&
       // marksArr[4]>=35 &&
       // marksArr[5]>=35 
       //){
       // console.log("passed in tenth")
      // }else{
        //console.log("failed in tenth")
       //}

     }}>Every</button>


     <button onClick={()=>{
      let marksArr=[78,85,96,82,90,80];
       let result= marksArr.some((ele,i)=>{
        return ele<35;
       })
    if(result==true){
      console.log(`failed in tenth`);
    }else{
      console.log(`passed in tenth`)
    }
   

     }}>some</button>
     
     <button onClick={()=>{
      
      let marksArr=[78,85,96,82,90,80,75,66,85,82,90,56,70,75,80,86,72,75,80,82];
      let filteredArr=marksArr.filter((ele,i)=>{
        //return ele % 2==0
          return ele %2!=0
      })
      console.log(filteredArr)

     }}>Filter</button>
     
     <button onClick={()=>{
    let marksArr=[15,20,20,75,88,66,90,88,82,80,90,95,56,70,75,80,86,72,75,80,82]
      
    let val=marksArr.find((ele,i)=>{
     return ele>75
    })
    let ind=marksArr.findIndex((ele,i)=>{
      return ele>75
     })
    console.log(val)
    console.log(ind)
     }}>find/findIndex/findLast/findLastIndex</button>
     
     <button onClick={()=>{
      let movieName=["Devara"];
      console.log( Array.isArray(movieName));
     }}>isArr</button>
     
     <button onClick={()=>{
      
    let marksArr=[15,20,20,75,88,66,90,88,82,80,90,95]
     
     let totalMarks= marksArr.reduceRight((tot=0,ele,i)=>{
        return(tot+=ele);
     })
     console.log(totalMarks)
     }}>Reduce</button>
     
     <button onClick={()=>{
         console.log(Indwcpalyers2024)
         Indwcpalyers2024.sort()
         console.log(Indwcpalyers2024)
         Indwcpalyers2024.reverse()
        console.log(Indwcpalyers2024)
    
    let marksArr=[75,15,22,88,55,62,74,25,35]
     console.log(marksArr);
     marksArr.sort((a,b)=>{return a-b});
     console.log(marksArr)
     }}>Sort</button>

     <button onClick={()=>{

      let indCricketCaptains=["Sachin","Ganguly","Dravid","Dhoni",
        "virat","Rohit"]
        let newArr=indCricketCaptains.map((ele,i)=>{
          return `Captian.${ele}`;
        })
        console.log(indCricketCaptains)
        console.log(newArr)

     let marks=[85,90,78,55,90,70]
     let marksWithBonus=marks.map((ele,i)=>{
      return ele+5;
     })
     console.log(marks)
     console.log(marksWithBonus)


     }}>Map</button>
     {Indwcpalyers2024.map((ele,i)=>{
      return <h3>{ele}</h3>
     })}
    </div>
  );
}

export default App;

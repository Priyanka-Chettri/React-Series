import Card from "./components/Card";

function App() {
  let c="chai aur code";

    return (
            <>
      <div className="flex  flex-col items-center justify-center min-h-screen w-screen gap-2">
          <h1 className="bg-green-300 text-black p-4 rounded-xl ">TailWind w Props</h1>
          <Card channel="chai aur code"/>
          <Card/>    
        </div>
      </>
      
      
    );
  }
  
  


export default App

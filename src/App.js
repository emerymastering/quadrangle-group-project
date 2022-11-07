import "./App.css";

function App() {
  return (
    <div className="App">
      <div class=" min-h-screen flex items-center justify-center bg-indigo-900">
        <div class="relative">
          <div class="w-16 h-16 bg-white rounded-lg shadow-2xl"></div>
          <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300 animate-ping">
            <h1 className="text-3xl font-bold underline pt-40">
              Welcome to Quadrangle!
            </h1>
          </div>
          <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300">
            <h1 className="text-3xl font-bold underline pt-40">
              Welcome to Quadrangle!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

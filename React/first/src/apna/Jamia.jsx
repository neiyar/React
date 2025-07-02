import React from "react"

const Jamia =()=>{
    const showMessage = () => {
    alert("Hello! You clicked the button.");
  };

  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f5f5", color: "#333" }}>
      <header style={{ backgroundColor: "#004080", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Welcome to My Web Page</h1>
      </header>

      <main style={{ padding: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p>This is a simple page created with HTML, CSS, and JavaScript.</p>
        <button
          onClick={showMessage}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            border: "none",
            color: "white",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Click Me
        </button>
      </main>

      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
          padding: "15px",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        &copy; 2025 My Website
      </footer>
    </div>
  );
};




 /*   return(
        <>
        <div>
             <h1>Hello Everyone</h1>
             <h2>Good Morning Neiyar Ji</h2>
             <h2>So we were discus About the React</h2>
             <p>This is practice Secssion</p>

             <New/>

        </div>
        
        </>
    )
*/

function New(){
    return(
        <div>
            <h1>Super </h1>
        </div>
    )
}


export default Jamia
import { Data } from "./Data.js";

export default function Card(props) {
   
  return (
    <div>
        {Data.map((obj,index)=>(
            <div key={index}>
            {obj.quotes.map((quote, qno)=>(
                <div key={qno}
                style={{
                  backgroundColor: "rgb(31 41 55)",
                  color: "white",
                  padding: "40px 40px 60px 40px",
                  width: "87%",
                  margin: "auto",
                  marginTop: "13vh",
                  textAlign: "center",
                  borderRadius: 6
                }}
              >
                <h1>
                  {quote.quote}
                </h1>
                <br />
                <p style={{ color: "#9ca3af" }}>{quote.author}</p>
              </div>
              
            ))}
            </div>
        ))}


    </div>



);
}
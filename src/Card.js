

export default function Card(props) {
   
  return (
    <div>
        <div
  style={{
    backgroundColor: "rgb(31 41 55)",
    color: "white",
    padding: "40px 0 60px 0",
    width: "87%",
    margin: "auto",
    marginTop: "13vh",
    textAlign: "center",
    borderRadius: 6
  }}
>
  <h1>
    {props.q}
  </h1>
  <br />
  <p style={{ color: "#9ca3af" }}>{props.a}</p>
</div>

    </div>



);
}
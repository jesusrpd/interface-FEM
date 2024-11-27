"use client"

export default function Home() {

  const submitData = async (e) => {
    e.preventDefault();
    console.log(e);
    const dataFrom = {
      a1: Number(e.target[0].value),
      a2: Number(e.target[1].value),
      l: Number(e.target[2].value),
      p: Number(e.target[3].value),
      t: Number(e.target[4].value),
      e: Number(e.target[5].value),
      n: Number(e.target[6].value),
      p: Number(e.target[7].value)
    }
    console.log(dataFrom);
    
    const response = await fetch("http://127.0.0.1:8000/calculate", {
      method: "POST",
      body: JSON.stringify(dataFrom),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(!response.ok){
      throw new Error("Error al hacer el calculo")
    }

    const data = await response.json();
    console.log(data)

    console.log(response.body)
  }

  return (
    <div>
      <h2>Ingreso de datos:</h2>
        <form onSubmit={submitData}>
          <legend>
            <div>
              <label>a1: <input type="text" placeholder="a1"/></label>
              <label>a2: <input type="text" placeholder="a2"/></label>
              <label>l: <input type="text" placeholder="l"/></label>
              <label>p: <input type="text" placeholder="p"/></label>
              <label>t: <input type="text" placeholder="t"/></label>
              <label>E: <input type="text" placeholder="E"/></label>
              <label>Número de nodos: <input type="text" placeholder="N"/></label>
              <label>En que nodo va tu carga: <input type="text" placeholder="?"/></label>
            </div>
          </legend>
          <button type="submit">Calcular</button>
        </form>
    </div>
  );
}

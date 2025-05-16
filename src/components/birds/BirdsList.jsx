import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../Message";

export default function BirdsList() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetchBirds();
  }, []);

  const fetchBirds = async () => {
    try {
      const response = await fetch("https://aves.ninjas.cl/api/birds");
      const data = await response.json();
      setBirds(data);
    } catch (error) {
      console.error("Error al obtener los datos de las aves:", error);
    }
  };

  if(birds.length === 0) return (
    <div className="flex justify-center items-center"> 
      <Message>Cargando...</Message>
    </div>
  )

  return (
    <section className="flex justify-center items-center gap-8 flex-wrap p-8">
      {
        birds.map(bird => (
          <Link to={`/bird/${bird.uid}`} key={bird.uid}>
            <article className="border border-gray-700 rounded-2xl overflow-hidden shadow-sm shadow-gray-500">
              <div className="h-64 aspect-square">
                <img src={bird.images?.main} alt={`Imagen de ${bird.name?.spanish}`} className="w-64 aspect-square" />
              </div>
              <div className="flex flex-col justify-center items-center p-2 border border-top">
                <h3 className="text-lg text-gray-700">{bird.name.spanish}</h3>
                <h3 className="text-md text-gray-500">{bird.name.latin}</h3>
              </div>
            </article>
          </Link>
        ))
      }
    </section>
  );
};
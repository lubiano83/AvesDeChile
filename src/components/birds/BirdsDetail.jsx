import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import GoBack from "../GoBack";
import Message from "../Message";

export default function BirdsDetail() {

  const [ birdById, setBirdById ] = useState();
  const { uid } = useParams();
  const audioRef = useRef(null);

  useEffect(() => {
    fetchBirdById();
  }, []);

  const fetchBirdById = async () => {
    try {
      const response = await fetch(`https://aves.ninjas.cl/api/birds/${uid}`);
      const data = await response.json();
      setBirdById(data);
      console.log(data)
    } catch (error) {
      console.error("Error al obtener los datos de las aves:", error);
    }
  };

  useEffect(() => {
    if (birdById?.audio?.file && audioRef.current) {
      const playAudio = async() => {
        try {
          await audioRef.current.play();
          console.log("Audio reproduciéndose automáticamente");
        } catch (error) {
          console.warn("El navegador bloqueó la reproducción automática:", error);
        }
      };
      playAudio();
    }
  }, [birdById]);

  if(!birdById) return (
    <div className="flex justify-center items-center">
      <Message>Cargando...</Message>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full h-full p-8">
      {/* Mapa */}
      <div className="flex justify-center items-center w-72 md:w-1/2 max-w-md">
        <img src={birdById.map?.image} alt="" className="w-full h-auto rounded shadow pl-8" onError={(e) => (e.target.style.display = "none")}/>
      </div>

      {/* Info del ave */}
      <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2 max-w-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-xl font-semibold text-center">{birdById.map?.title}</h3>

          <div className="flex justify-center items-center w-full min-w-72">
            <img src={birdById.images?.main} alt="" className="w-full h-auto rounded shadow" />
          </div>

          <div className="text-left space-y-1 w-full px-2">
            <p><strong>Nombre:</strong> {birdById.name.spanish}</p>
            <p><strong>Inglés:</strong> {birdById.name.english}</p>
            <p><strong>Latín:</strong> {birdById.name.latin}</p>
            <p><strong>Orden:</strong> {birdById.order}</p>
            <p><strong>Tamaño:</strong> {birdById.size}</p>
            <p><strong>Especie:</strong> {birdById.species}</p>
            <p><strong>Detalle:</strong> {birdById.didyouknow}</p>
          </div>
        </div>

        {/* Audio oculto */}
        <div className="hidden">
          {birdById.audio?.file && (
            <audio ref={audioRef}>
              <source src={birdById.audio.file} type="audio/wav" />
            </audio>
          )}
        </div>
        <GoBack path={"/"} />
      </div>
    </div>
  );
};
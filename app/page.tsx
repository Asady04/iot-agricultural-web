"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database"; // Firebase imports
import { db } from "@/firebaseConfig";

export default function Home() {
  const [data, setData] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db, 'realtime_data'); // Reference to the database path
      try {
        // const snapshot = await get(dbRef);
        await get(dbRef).then((snapshot)=>{
          if (snapshot.exists()) {
          setData(snapshot.val()); // Save data to state
        } else {
          console.log("No data available");
        }
        })
        
      } catch (err) {
        setError("Failed to fetch data");
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let frameId: number;
    const updateFrame = () => {
      requestAnimationFrame(updateFrame);
      setData((prevData: any) => ({ ...prevData })); // Force re-render
    };

    frameId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-7">
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Conductivity
              </h1>
              <p className="text-sm">Konduktivitas</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Conductivity}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Moisture
              </h1>
              <p className="text-sm">Kelembapan Tanah</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Moisture}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Nitrogen
              </h1>
              <p className="text-sm">Nitrogen</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Nitrogen}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Phosphorus
              </h1>
              <p className="text-sm">Fosfor</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Phosphorus}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Potassium
              </h1>
              <p className="text-sm">Kalium</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Potassium}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Temperature
              </h1>
              <p className="text-sm">Suhu</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.Temperature}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                pH
              </h1>
              <p className="text-sm">pH</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">{data.pH}</p>
          </CardBody>
        </Card>
        <Card className="w-full transition hover:-translate-y-1 hover:scale-105 duration-100 ease-in-out p-2">
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold underline decoration-green-500">
                Humidity
              </h1>
              <p className="text-sm">Kelembapan Udara</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-xl font-semibold text-green-700">10.2</p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

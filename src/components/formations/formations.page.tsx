import React, { useEffect, useState } from "react";
import axios from "axios";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import StudentForm from "../form/studentForm";
import { ScrollArea } from "../ui/scroll-area";

export function FormationsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get("http://localhost:10051/qualifications");
        setData(response.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQualifications();
  }, []);

  return (
    <section className="w-100 flex flex-col bg-secondary">
      <div className="text-5xl ml-12 mt-12">Nos Formations</div>
      <Separator className="w-60 mt-3 ml-14 bg-primary-foreground h-2" />
      <ul className="w-100 flex flex-col items-center">
        <Dialog>
        {data.length > 0 &&
          data.map((row: any, index: number) => {
            return (
              <Card key={index} className="p-3 border-primary w-5/6 relative mt-10">
                <CardTitle className="mt-2 text-3xl">{row.nomFormation}</CardTitle>
                <CardDescription className="mt-2 mb-2">
                  {row.description}
                </CardDescription>
                <Separator className="bg-primary-foreground" />
                <CardContent>
                  <div className="text-2xl mt-2 mb-2">Liste des modules: </div>
                  {row.modules.length > 0 && (
                    <ul className="flex">
                      {row.modules.map((moduleRow: any, moduleIndex: number) => (
                        <li key={moduleIndex} className=" border-2 rounded border-primary p-2 m-3 min-w-40 min-h-40 max-h-60 max-w-60 bg-secondary">
                          <h6 className="text-xl">{moduleRow.nomModule}</h6>
                          <p>{moduleRow.dureeModule} </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                <CardFooter className="justify-end">
                  <DialogTrigger>
                  <Button className="text-white">Déposer une candidature</Button>
                  </DialogTrigger>
                </CardFooter>
                <div className=" bg-primary-foreground absolute top-0 right-10 p-2 rounded-b-lg">
                  <span>Niveau de formation</span>
                  <p className="text-center">{row.niveauFormation}</p>
                </div>
              </Card>
            );
          })}
          <DialogContent className="h-screen">
            <ScrollArea className="h-screen p-4">
            <StudentForm />
            </ScrollArea>
          </DialogContent>
          </Dialog>
      </ul>
    </section>
  );
}

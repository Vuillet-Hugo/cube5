import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function StatsCard() {
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-5/6 border-primary shadow-3xl shadow-gray-400">
        <CardContent className="flex justify-around items-center">
          <div className="w-1/5 flex flex-col items-center text-center">
            <div className="text-4xl font-bold ">28 000</div>
            <Separator className="w-20 bg-primary-foreground h-2" />
            <div>étudiants par an dont 17 200 apprentis</div>
          </div>
          <Separator orientation="vertical" className="bg-primary h-28 mt-5" />
          <div className="w-1/5 flex flex-col items-center text-center">
            <div className="text-4xl font-bold "> 2 800</div>
            <Separator className="w-20 bg-primary-foreground h-2" />
            <div>intervenants experts & 1 300 collaborateurs</div>
          </div>
          <Separator orientation="vertical" className="bg-primary h-28 mt-5" />
          <div className="w-1/5 flex flex-col items-center text-center">
            <div className="text-4xl font-bold "> 130</div>
            <Separator className="w-20 bg-primary-foreground h-2" />
            <div>universités partenaires dans le monde</div>
          </div>
          <Separator orientation="vertical" className="bg-primary h-28 mt-5" />
          <div className="w-1/5 flex flex-col items-center text-center">
            <div className="text-4xl font-bold "> 8 000</div>
            <Separator className="w-20 bg-primary-foreground h-2" />
            <div>entreprises partenaires en France</div>
          </div>
          <Separator orientation="vertical" className="bg-primary h-28 mt-5" />
          <div className="w-1/5 flex flex-col items-center text-center">
            <div className="text-4xl font-bold ">106 000</div>
            <Separator className="w-20 bg-primary-foreground h-2" />
            <div>alumni</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

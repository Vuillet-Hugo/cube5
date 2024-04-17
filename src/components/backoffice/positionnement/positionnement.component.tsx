import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Personel() {
  return (
    <section className="w-100 flex justify-start flex-col grow">
      <Tabs defaultValue="account" className="w-100 m-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Profils Etudiants</TabsTrigger>
          <TabsTrigger value="password">Profils Intervenants</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Etudiants pré-inscrit</CardTitle>
              <Separator className="bg-primary-foreground w-1/5" />
              <CardDescription>
                Retrouver ici la liste des étudiants pré-inscrits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Table>
                <TableCaption>La liste de tout les profils</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Nom</TableHead>
                    <TableHead>Prénom</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Formation visé</TableHead>
                    <TableHead>CV</TableHead>
                    <TableHead>Lettre de motivation</TableHead>
                    <TableHead>Statut de la candidature</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dark</TableCell>
                    <TableCell>Vador</TableCell>
                    <TableCell>plus tout jeune</TableCell>
                    <TableCell>DI Bac +2</TableCell>
                    <TableCell>plus tout jeune</TableCell>
                    <TableCell>plus tout jeune</TableCell>
                    <TableCell className="place-self-end">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Gérer la demande" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">
                            Accépter le dossier
                          </SelectItem>
                          <SelectItem value="banana">
                            Refuser le dossier
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button className="text-white">
                Sauvegarder les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Liste des Intervenants</CardTitle>
              <Separator className="bg-primary-foreground w-1/5" />
              <CardDescription>
                Retrouver ici la liste des intervenants disponible pour les
                différentes formations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Table>
                <TableCaption>La liste de tout les profils</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Nom</TableHead>
                    <TableHead>Prénom</TableHead>
                    <TableHead>Domaine de compétences</TableHead>
                    <TableHead>Niveau</TableHead>
                    <TableHead>Disponibilité</TableHead>
                    <TableHead>Expérience enseignant</TableHead>
                    <TableHead>Assigné à la formation </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dark</TableCell>
                    <TableCell>Vador</TableCell>
                    <TableCell>Système et réseaux</TableCell>
                    <TableCell>Jusque Bac +5</TableCell>
                    <TableCell>Toute l'année</TableCell>
                    <TableCell>2 ans d'expériences</TableCell>
                    <TableCell>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Formation assigné" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dev2">DI Bac +2</SelectItem>
                          <SelectItem value="dev3">DI Bac +3</SelectItem>
                          <SelectItem value="dev5">DI Bac +5</SelectItem>
                          <SelectItem value="sys2">Système Bac +2</SelectItem>
                          <SelectItem value="sys3">Système Bac +3</SelectItem>
                          <SelectItem value="sys5">Système Bac +5</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button className="text-white">
                Sauvegarder les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

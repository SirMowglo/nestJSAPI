import { Injectable, NotFoundException } from '@nestjs/common';
import { Monument } from './monument.interface';

@Injectable()
export class MonumentsService {
  monuments: Monument[] = [
    {
      id: 1,
      name: 'Giralda',
      code: 'SE',
      city: 'Sevilla',
      country: 'España',
      location: '-10,5',
      description:
        'Giralda es el nombre que recibe la torre campanario de la catedral de Santa María de la Sede de la ciudad de Sevilla, en Andalucía (España). La parte inferior de la torre corresponde al alminar de la antigua mezquita de la ciudad, de finales del siglo xii, en la época almohade',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/La_Giralda_August_2012_Seville_Spain.jpg/240px-La_Giralda_August_2012_Seville_Spain.jpg',
    },
    {
      id: 2,
      name: 'Torre Eiffel',
      code: 'PA',
      city: 'Paris',
      country: 'Francia',
      location: '15,-6',
      description:
        'La Torre Eiffel​ (Tour Eiffel, en francés), inicialmente llamada Tour de 300 mètres (Torre de 300 metros) es una estructura de hierro pudelado diseñada inicialmente por los ingenieros civiles Maurice Koechlin y Émile Nouguier y construida, tras el rediseño estético de Stephen Sauvestre, por el ingeniero civil francés Gustave Eiffel y sus colaboradores para la Exposición Universal de 1889 en París.',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eiffelturm.JPG/275px-Eiffelturm.JPG',
    },
    {
      id: 3,
      name: 'Torre de Pisa',
      code: 'RO',
      city: 'Roma',
      country: 'Italia',
      location: '15,-6',
      description:
        'La torre de Pisa o torre inclinada de Pisa (en italiano: torre pendente di Pisa) es la torre campanario de la catedral de Pisa, situada en la plaza del Duomo de Pisa, en la ciudad del mismo nombre, municipio de la región italiana de la Toscana y capital de la provincia homónima de Italia. Su altura original era de 60 m aunque actualmente mide 56.67 m desde la base en el lado más alto y 55.86 m desde la base en su lado más bajo',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/250px-The_Leaning_Tower_of_Pisa_SB.jpeg',
    },
  ];

  getMonuments() {
    return [...this.monuments];
  }

  insertMonument(monument: Monument) {
    this.monuments.push(monument);
  }

  getMonument(id: string) {
    const mon = this.findMonument(id);
    return { ...mon };
  }

  changeMonument(id: string, mon: Monument) {
    const oldMon = this.findMonument(id);
    const index = this.monuments.indexOf(oldMon);

    this.monuments[index] = { ...mon };
    return mon;
  }

  deleteMonument(id: string) {
    const mon = this.findMonument(id);
    const index = this.monuments.indexOf(mon);

    this.monuments.splice(index,1);
  }

  private findMonument(id: string) {
    const mon = this.monuments.find((mon) => mon.id == parseInt(id));
    if (!mon) {
      throw new NotFoundException(
        `No se ha encontrado el monumento con id: ${id}`,
      );
    }
    return mon;
  }
}

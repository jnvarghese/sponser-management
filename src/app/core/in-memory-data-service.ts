import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student, Sponser } from '../feature/model/index';

export class InMemoryDataService implements InMemoryDbService {
 createDb() {
   const sponsers:Sponser[] = [
     { id: 1, name: 'Windstorm', active:true},
     { id: 2, name: 'Bombasto', active:true },
     { id: 3, name: 'Magneta', active:false },
     { id: 4, name: 'Tornado', active:true }
   ];
   const students:Student[] = [
    { id: 1, name: 'Jinu', gender: 'Male' , isSponsered:true   },
    { id: 2, name: 'Rajeev', gender: 'Male' , isSponsered:true },
    { id: 3, name: 'Sriram', gender: 'Male' , isSponsered:false },
    { id: 4, name: 'Ajni', gender: 'Female' , isSponsered:true }
  ];
   return {students, sponsers};
 }
}

import DS from 'ember-data';

var Member = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  photo: DS.attr("string"),
  email: DS.attr("string"),
  show: DS.attr("boolean"),
  role: DS.attr("string"),
  founder: DS.attr("boolean")
});

Member.reopenClass({
  FIXTURES : [
    {
      id:0,
      name:"Daniel Udell",
      location:"United States",
      photo:"assets/images/faces/daniel.jpg",
      email:"daniel@wikitongues.org",
      show:true,
      role:"Director of Content and Community",
      founder:true
    },
    {
      id:1,
      name:"Freddie Andrade",
      location:"United States",
      photo:"assets/images/faces/freddie.jpg",
      email:"freddie@wikitongues.org",
      show:true,
      role:"Director of Technology and Operations",
      founder:true
    },
    {
      id:2,
      name:"Lindie Botes",
      location:"South Africa",
      photo:"assets/images/faces/lindie.jpg",
      email:"lindie@wikitongues.org",
      show:true,
      role:"Volunteer",
      founder:true
    },
    {
      id:3,
      name:"Aiza Bashieva",
      location:"Russian Federation",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:4,
      name:"Alex Gentry",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:5,
      name:"Alexandra Werner",
      location:"Sweden",
      email:"alexandra@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:6,
      name:"Azuraye Wycoff",
      location:"United States,China",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:7,
      name:"Crawford Hunt",
      location:"United States",
      email:"crawford@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:8,
      name:"Neyza Honoré",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:9,
      name:"Nikhil Chitale",
      location:"Australia",
      email:"nikhil@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:10,
      name:"Plator Gashi",
      location:"Kosovo",
      photo:"assets/images/faces/plator.jpg",
      email:"plator@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:11,
      name:"Dylan Hinder",
      location:"Viet Nam",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:12,
      name:"Prateek Chandra",
      location:"India",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:13,
      name:"Ian Szterenzys",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:14,
      name:"Subhashish Panigrahi",
      location:"India",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:15,
      name:"Elia Dal Corso",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:16,
      name:"Firth McEachern",
      location:"Philippines",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:17,
      name:"Orsi Jenei",
      location:"Hungary,Chad,Niger,Mali",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:18,
      name:"Lindsay Dow",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:19,
      name:"Maxi Salomone",
      location:"Argentina",
      photo:"assets/images/faces/maxi.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:20,
      name:"Susan Chandler",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:21,
      name:"Teddy Nee",
      location:"Taiwan",
      photo:"assets/images/faces/teddy.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:22,
      name:"Alolita Sharma",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:23,
      name:"Eric Schles",
      location:"United States",
      email:"eric@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:24,
      name:"Fabrizio Cau",
      location:"Germany",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:25,
      name:"Harry Kennard",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:26,
      name:"Kenneth Gofigan Kuper",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:27,
      name:"Mike Munevar",
      location:"Ireland",
      email:"mike@wikitongues.org",
      show:true,
      role:"Director of Partnerships"
    },
    {
      id:28,
      name:"Sarah Doyle",
      location:"Vanuatu",
      photo:"assets/images/faces/sarah.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:29,
      name:"Scottie Harris Beaudet",
      location:"Germany",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:30,
      name:"Vojta Smekal",
      location:"Czech Republic",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:31,
      name:"Argo Cayhadi",
      location:"Indonesia",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:32,
      name:"Ashly Bloxon",
      location:"United States",
      email:"ashly@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:33,
      name:"Christian McClure",
      location:"United States",
      email:"christian@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:34,
      name:"Daryl Moon",
      location:"Australia",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:35,
      name:"Hugo Campbell",
      location:"France",
      photo:"assets/images/faces/hugo.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:36,
      name:"Luis Miguel Rojas-Berscia",
      location:"Netherlands",
      photo:"assets/images/faces/luis.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:37,
      name:"Madeleine Koerner",
      location:"Russian Federation",
      photo:"assets/images/faces/madeleine.jpg",
      email:"madeleine@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:38,
      name:"Prudence Nyamishana",
      location:"Uganda",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:39,
      name:"Andersson Cauyá",
      location:"Colombia",
      photo:"assets/images/faces/andersson.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:40,
      name:"Ivonne Lorraine García",
      location:"Colombia",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:41,
      name:"Katherine Yaksich",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:42,
      name:"Raissa Pizarro",
      location:"Brazil",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:43,
      name:"Violeta Camarasa",
      location:"China",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:44,
      name:"Yati Afendy",
      location:"Germany",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:45,
      name:"Anna Indalecio",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:46,
      name:"Bridgette Morency",
      location:"United States",
      email:"brigitte@wikitongues.org",
      show:true,
      role:"Volunteer"
    },
    {
      id:47,
      name:"Cody Paul Updegrave",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:48,
      name:"Deniz Yükselen",
      location:"Turkey",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:49,
      name:"Dércio Ernesto",
      location:"Mozambique",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:50,
      name:"Mário Lopes",
      location:"Portugal",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:51,
      name:"Olha Svyripa",
      location:"Ukraine",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:52,
      name:"Pau Mateo",
      location:"Lithuania",
      photo:"assets/images/faces/pau.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:53,
      name:"Deepika Pandey",
      location:"India",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:54,
      name:"Espoir Gahungere",
      location:"Belgium",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:55,
      name:"Fatuma Yasmeen Abdisalam Abdullahi",
      location:"Qatar",
      photo:"assets/images/faces/yasmeen.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:56,
      name:"Ferran López Abad",
      location:"Spain",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:57,
      name:"Helena Schofield",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:58,
      name:"Ignacio Tomichá Chuvé",
      location:"Bolivia",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:59,
      name:"Jonas Racine",
      location:"Switzerland",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:60,
      name:"Kousic Prabu",
      location:"Armenia",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:61,
      name:"Liam Neave",
      location:"United Kingdom",
      photo:"assets/images/faces/liam.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:62,
      name:"Manjusha Raveendran",
      location:"United States",
      photo:"assets/images/faces/manjusha.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:63,
      name:"Marília Rocha",
      location:"Brazil",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:64,
      name:"P Ray Murray",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:65,
      name:"Yuliya Manyakina",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:66,
      name:"Erica Obersi",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:67,
      name:"Matt Phil Arguin",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:68,
      name:"Murilo Ricci",
      location:"Brazil",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:69,
      name:"Rachel Bracker",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:70,
      name:"Ruth Rozul",
      location:"Philippines",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:71,
      name:"Shannon Kennedy",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:72,
      name:"Tatenda Chingono",
      location:"Zimbabwe",
      photo:"assets/images/faces/tatenda.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:73,
      name:"Àdhamh Ó Broin",
      location:"United Kingdom",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:74,
      name:"Alan R King",
      location:"Spain",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:75,
      name:"Allan Kalvin Lleung",
      location:"Italy",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:76,
      name:"Alonso López",
      location:"Norway",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:77,
      name:"Cathy Zhang",
      location:"United States",
      photo:"assets/images/faces/cathy.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:78,
      name:"Chris Voxland",
      location:"United States",
      photo:"assets/images/faces/chrisVoxland.jpg",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:79,
      name:"Conor Walsh",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:80,
      name:"David André",
      location:"United States",
      email:"",
      show:true,
      role:"Volunteer"
    },
    {
      id:81,
      name:"Emily Shiu",
      location:"Canada",
      email:"",
      show:true,
      role:"Volunteer"
    }
  ]
});

export default Member;


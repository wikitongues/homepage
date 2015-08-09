import DS from 'ember-data';

var Member = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  photo: DS.attr("string"),
  email: DS.attr("string"),
  show: DS.attr("boolean"),
  title: DS.attr("string"),
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
      title:"Director of Content and Community",
      role:"director",
      founder:true
    },
    {
      id:1,
      name:"Freddie Andrade",
      location:"United States",
      photo:"assets/images/faces/freddie.jpg",
      email:"freddie@wikitongues.org",
      show:true,
      title:"Director of Technology and Operations",
      role:"director",
      founder:true
    },
    {
      id:2,
      name:"Lindie Botes",
      location:"South Africa",
      photo:"assets/images/faces/lindie.jpg",
      email:"lindie@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer",
      founder:true
    },
    {
      id:3,
      name:"Aiza Bashieva",
      location:"Russia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:4,
      name:"Alex Gentry",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:5,
      name:"Alexandra Werner",
      location:"Sweden",
      photo:"",
      email:"alexandra@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:6,
      name:"Azuraye Wycoff",
      location:"United States,China",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:7,
      name:"Crawford Hunt",
      location:"United States",
      photo:"",
      email:"crawford@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:8,
      name:"Neyza Honoré",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:9,
      name:"Nikhil Chitale",
      location:"Australia",
      photo:"",
      email:"nikhil@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:10,
      name:"Plator Gashi",
      location:"Kosovo",
      photo:"assets/images/faces/plator.jpg",
      email:"plator@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:11,
      name:"Dylan Hinder",
      location:"Viet Nam",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:12,
      name:"Prateek Chandra",
      location:"India",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:13,
      name:"Ian Szterenzys",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:14,
      name:"Subhashish Panigrahi",
      location:"India",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:15,
      name:"Elia Dal Corso",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:16,
      name:"Firth McEachern",
      location:"Philippines",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:17,
      name:"Orsi Jenei",
      location:"Hungary,Chad,Niger,Mali",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:18,
      name:"Lindsay Dow",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:19,
      name:"Maxi Salomone",
      location:"Argentina",
      photo:"assets/images/faces/maxi.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:20,
      name:"Susan Chandler",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:21,
      name:"Teddy Nee",
      location:"Taiwan",
      photo:"assets/images/faces/teddy.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:22,
      name:"Alolita Sharma",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:23,
      name:"Eric Schles",
      location:"United States",
      photo:"",
      email:"eric@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:24,
      name:"Fabrizio Cau",
      location:"Germany",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:25,
      name:"Harry Kennard",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:26,
      name:"Kenneth Gofigan Kuper",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:27,
      name:"Mike Munevar",
      location:"United States",
      photo:"assets/images/faces/mike.jpg",
      email:"mike@wikitongues.org",
      show:true,
      title:"",
      role:"Director of Partnerships"
    },
    {
      id:28,
      name:"Sarah Doyle",
      location:"Vanuatu",
      photo:"assets/images/faces/sarah.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:29,
      name:"Scottie Harris Beaudet",
      location:"Germany",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:30,
      name:"Vojta Smekal",
      location:"Czech Republic",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:31,
      name:"Argo Cayhadi",
      location:"Indonesia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:32,
      name:"Ashly Bloxon",
      location:"United States",
      photo:"",
      email:"ashly@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:33,
      name:"Christian McClure",
      location:"United States",
      photo:"",
      email:"christian@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:34,
      name:"Daryl Moon",
      location:"Australia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:35,
      name:"Hugo Campbell",
      location:"France",
      photo:"assets/images/faces/hugo.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:36,
      name:"Luis Miguel Rojas-Berscia",
      location:"Netherlands",
      photo:"assets/images/faces/luis.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:37,
      name:"Madeleine Koerner",
      location:"Russia",
      photo:"assets/images/faces/madeleine.jpg",
      email:"madeleine@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:38,
      name:"Prudence Nyamishana",
      location:"Uganda",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:39,
      name:"Andersson Cauyá",
      location:"Colombia",
      photo:"assets/images/faces/andersson.jpg",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:40,
      name:"Ivonne Lorraine García",
      location:"Colombia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:41,
      name:"Katherine Yaksich",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:42,
      name:"Raissa Pizarro",
      location:"Brazil",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:43,
      name:"Violeta Camarasa",
      location:"China",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:44,
      name:"Yati Afendy",
      location:"Germany",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:45,
      name:"Anna Indalecio",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:46,
      name:"Bridgette Morency",
      location:"United States",
      photo:"",
      email:"brigitte@wikitongues.org",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:47,
      name:"Cody Paul Updegrave",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:48,
      name:"Deniz Yükselen",
      location:"Turkey",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:49,
      name:"Dércio Ernesto",
      location:"Mozambique",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:50,
      name:"Mário Lopes",
      location:"Portugal",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:51,
      name:"Olha Svyripa",
      location:"Ukraine",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:52,
      name:"Pau Mateo",
      location:"Lithuania",
      photo:"assets/images/faces/pau.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:53,
      name:"Deepika Pandey",
      location:"India",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:54,
      name:"Espoir Gahungere",
      location:"Belgium",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:55,
      name:"Fatuma Yasmeen Abdisalam Abdullahi",
      location:"Qatar",
      photo:"assets/images/faces/yasmeen.jpg",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:56,
      name:"Ferran López Abad",
      location:"Spain",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:57,
      name:"Helena Schofield",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:58,
      name:"Ignacio Tomichá Chuvé",
      location:"Bolivia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:59,
      name:"Jonas Racine",
      location:"Switzerland",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:60,
      name:"Kousic Prabu",
      location:"Armenia",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:61,
      name:"Liam Neave",
      location:"United Kingdom",
      photo:"assets/images/faces/liam.jpg",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:62,
      name:"Manjusha Raveendran",
      location:"United States",
      photo:"assets/images/faces/manjusha.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:63,
      name:"Marília Rocha",
      location:"Brazil",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:64,
      name:"P Ray Murray",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:65,
      name:"Yuliya Manyakina",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:66,
      name:"Erica Obersi",
      location:"United States",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:67,
      name:"Matt Phil Arguin",
      location:"United States",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:68,
      name:"Murilo Ricci",
      location:"Brazil",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:69,
      name:"Rachel Bracker",
      location:"United States",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:70,
      name:"Ruth Rozul",
      location:"Philippines",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:71,
      name:"Shannon Kennedy",
      location:"United States",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:72,
      name:"Tatenda Chingono",
      location:"Zimbabwe",
      photo:"assets/images/faces/tatenda.jpg",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:73,
      name:"Àdhamh Ó Broin",
      location:"United Kingdom",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:74,
      name:"Alan R King",
      location:"Spain",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:75,
      name:"Allan Kalvin Lleung",
      location:"Italy",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:76,
      name:"Alonso López",
      location:"Norway",
      photo:"",
      email:"",
      show:false,
      title:"",
      role:"volunteer"
    },
    {
      id:77,
      name:"Cathy Zhang",
      location:"United States",
      photo:"assets/images/faces/cathy.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:78,
      name:"Chris Voxland",
      location:"United States",
      photo:"assets/images/faces/chrisVoxland.jpg",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:79,
      name:"Conor Walsh",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:80,
      name:"David André",
      location:"United States",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    },
    {
      id:81,
      name:"Emily Shiu",
      location:"Canada",
      photo:"",
      email:"",
      show:true,
      title:"",
      role:"volunteer"
    }
  ]
});

export default Member;


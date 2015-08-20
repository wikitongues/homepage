import DS from 'ember-data';

var Press = DS.Model.extend({
  source: DS.attr("string"),
  date: DS.attr("date"),
  description: DS.attr("string"),
  url: DS.attr("string")
});

Press.reopenClass({
  FIXTURES : [
    {
      id:0,
      source:"Nola Française",
      date:"2013820",
      description:"Louisiana French On Wikitongues",
      url:"http://www.nolafrancaise.com/2013/08/20/wikitongues-louisiana-french/"
    },
    {
      id:1,
      source:"Vilaweb",
      date:"2013104",
      description:"“WikiTongues, el repositori cultural lingüístic i col.laboratiu”",
      url:"http://www.vilaweb.cat/noticia/4101720/20130410/wikitongues-repositori-cultural-linguistic-collaboratiu.html"
    },
    {
      id:2,
      source:"Omniglot",
      date:"20131030",
      description:"Wikitongues",
      url:"http://www.omniglot.com/blog/?p=9302"
    },
    {
      id:3,
      source:"Stan Carey Blog",
      date:"2013111",
      description:"Wikitongues: documenting the world’s languages",
      url:"http://stancarey.wordpress.com/2013/11/01/wikitongues-documenting-the-worlds-languages/"
    },
    {
      id:4,
      source:"Superlingo",
      date:"2013114",
      description:"Another linguistic diversity site to add to the list!",
      url:"http://www.superlinguo.com/post/65934956527/another-linguistic-diversity-site-to-add-to-the"
    },
    {
      id:5,
      source:"Vilaweb",
      date:"2014223",
      description:"“Wikitongues vol crèixer”",
      url:"http://www.vilaweb.cat/noticia/4174720/20140223/wikitongues-vol-creixer.html"
    },
    {
      id:6,
      source:"Hackers of NY",
      date:"2014310",
      description:"Hackers of NY: Cathy, Wikitongues",
      url:"http://hackersofny.com/post/85826479665/tl-dr-this-hacker-spent-some-time-at-the-un-turns#notes"
    },
    {
      id:7,
      source:"Rising Voices",
      date:"2014312",
      description:"“Wikitongues: Document your language”",
      url:"https://rising.globalvoicesonline.org/blog/2014/03/12/wikitongues-document-your-language/"
    },
    {
      id:8,
      source:"Hackers of NY",
      date:"2014315",
      description:"“Hackers Of NY: Daniel Bogre Udell, Wikitongues”",
      url:"http://hackersofny.com/post/79416486328/wouldnt-it-be-cool-if-there-were-a-youtube-for"
    },
    {
      id:9,
      source:"Global Voices Català",
      date:"2014317",
      description:"“Wikitongues: documenta la teva llengua”",
      url:"https://ca.globalvoicesonline.org/2014/03/wikitongues-documenta-la-teva-llengua/"
    },
    {
      id:10,
      source:"Global Voices Bengali",
      date:"2014320",
      description:"“উইকিটংসঃ আপনার ভাষার নথি তৈরি ক,রুন”",
      url:"http://bn.globalvoicesonline.org/2014/03/21/42322/"
    },
    {
      id:11,
      source:"Global Voices Spanish",
      date:"201445",
      description:"Wikitongues: documenta tu idioma",
      url:"https://es.globalvoicesonline.org/2014/04/05/wikitongues-documenta-tu-idioma/"
    },
    {
      id:12,
      source:"Global Voices Italian",
      date:"201447",
      description:"Wikitongues: Documenta la tua lingua",
      url:"http://it.globalvoicesonline.org/2014/04/wikitongues-documenta-la-tua-lingua/"
    },
    {
      id:13,
      source:"Global Voices German",
      date:"2014410",
      description:"Wikitongues: Dokumentiere deine Sprache",
      url:"http://de.globalvoicesonline.org/2014/04/10/wikitongues-dokumentiere-deine-sprache/"
    },
    {
      id:14,
      source:"Global Voices French",
      date:"2014414",
      description:"Wikitongues: Documentez votre langue",
      url:"http://fr.globalvoicesonline.org/2014/04/14/164780/"
    },
    {
      id:15,
      source:"Global Voices Malagasy",
      date:"2014418",
      description:"Wikitongues: Raketo An-tahiry Ny Tenim-pi,renenao",
      url:"http://mg.globalvoicesonline.org/2014/04/19/59233/"
    },
    {
      id:16,
      source:"Global Voices Aymara",
      date:"2014423",
      description:"Wikitongues: Arum qillqantama",
      url:"http://ay.globalvoicesonline.org/2014/04/6477"
    },
    {
      id:17,
      source:"Global Voices Arabic",
      date:"2014429",
      description:"ويكي اللغات: وثق لغتك الأم",
      url:"http://ar.globalvoicesonline.org/2014/04/29/33551/"
    },
    {
      id:18,
      source:"Global Voices Polish",
      date:"201454",
      description:"Wikitongues: Udokumentuj swój język",
      url:"http://pl.globalvoicesonline.org/2014/05/wikitongues-udokumentuj-swoj-jezyk/"
    },
    {
      id:19,
      source:"STV",
      date:"2014629",
      description:"Scots and Gaelic to be recorded for 'Wikipedia of languages'",
      url:"http://news.stv.tv/highlands-islands/280944-scots-and-gaelic-language-for-wikitongues-project-by-daniel-bogre-udell/"
    },
    {
      id:20,
      source:"Herald Scotland",
      date:"2014629",
      description:"Dinnae haud yer wheesht ... team collating all languages on planet lands in Scotland",
      url:"http://www.heraldscotland.com/news/home-news/dinnae-haud-yer-wheesht-team-collating-all-languages-on-planet-lands-in-scotland.24617891"
    },
    {
      id:21,
      source:"Empower Lingua",
      date:"2014630",
      description:"Scots to be added to Wikitongues Library of Languages",
      url:"http://www.empowerlinguatranslation.com/gaelic-to-be-added-to-wikitongues-library-of-languages/"
    },
    {
      id:22,
      source:"Assimil Blog",
      date:"2014711",
      description:"Wikitongues, le Wikipédia des langues",
      url:"http://blog.assimil.com/wikitongues#more-2661"
    },
    {
      id:23,
      source:"Assimil Blog",
      date:"201493",
      description:"Entretien avec Freddie Andrade, cof,ondateur de wikitongues",
      url:"http://blog.assimil.com/entretien-wikitongues"
    },
    {
      id:24,
      source:"Assimil Blog",
      date:"201493",
      description:"Interview with Freddie Andrade Wikitongues’ cofounder",
      url:"http://blog.assimil.com/interview-freddie-andrade-wikitongues-cofounder"
    }
  ]
});

export default Press;


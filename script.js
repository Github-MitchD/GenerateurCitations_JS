/*--------------------------------------------------------*/
//  _CODE JS BY MITCH.D
//  _Developpeur Web 2021
/*--------------------------------------------------------*/

// Tableau de citations
let citations = [
  [" La seule façon de faire du bon travail est d’aimer ce que vous faites. Si vous n’avez pas encore trouvé, continuez à chercher. ", "Steve Jobs"],
  [" Il n’y a qu’une façon d’échouer c’est d’abandonner avant d’avoir réussi. ", "Georges Clémenceau"],
  [" Le succès, c'est se promener d'échec en échec tout en restant motivé. ", "Winston Churchill "],
  [" Ceux qui abandonnent ne gagnent jamais, ceux qui gagnent n’abandonnent jamais. ", "Napoleon Hill"],
  [" N’abandonnez jamais un rêve sur la base du temps qu’il faudra pour le réaliser. Le temps passera de toute façon. ", "Earl Nightingale"],
  [" Vis comme si tu devais mourir demain, apprends comme si tu devais vivre toujours. ", "Gandhi"],
  [" Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. ", "Winston Churchill"],
  [" Tout est possible à qui rêve, ose, travaille et n'abandonne jamais. ", "Xavier Dolan"],
  [" La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. ", "Franklin Delano Roosevelt"],
  [" Ceux qui ne font rien ne se trompent jamais. ", "Théodore de Banville"],
  [" Je ne perds jamais. Soit je gagne, soit j'apprends. ", "Nelson Mandela"],
  [" Un jour, tu te réveilleras et tu n'auras plus le temps de faire ce que tu voulais faire. Fais-le donc maintenant. ", "Paulo Coelho"],
  [" Prends le temps de réfléchir, mais lorsque c'est le moment de passer à l'action, cesse de penser et vas-y. ", "Andrew Jackson"],
  [" Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement. ", "Martin Luther King"],
  [" Tu ne sais jamais à quel point tu es fort, jusqu'au jour où être fort reste ta seule option. ", "Bob Marley"],
  [" Soyez vous-même, tous les autres sont déjà pris. ", "Oscar Wilde"],
  [" Le but de la vie, ce n'est pas l'espoir de devenir parfait, c'est la volonté d'être toujours meilleur. ", "Ralph Waldo Emerson"],
  [" Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. ", "Georges Clemenceau"],
  [" Ce n'est pas grave si vous avancez lentement, du moment que vous ne vous arrêtez pas. ", "Confucius"],
  [" Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité. ", "C.S. Lewis"],
  [" La gloire n'est pas de ne jamais tomber, mais de se relever chaque fois que l'on tombe. ", "Confucius"]
];

let taille = citations.length;
let last = 0;
let nombreAleatoire = 0;

let citation = document.getElementById('citation');
let author = document.getElementById('autor');
let btn = document.getElementById('btnNewCitation');

// fonction qui genere un entier entre 0 et max
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// listener au click qui declenche fonction anonyme + modif texte
btn.addEventListener('click', () => {
  do {
    nombreAleatoire = genererNombreEntier(taille);
  } while (last == nombreAleatoire);

  // on affiche l'element a l'indice 0 de la ligne correspondant à la ligne nombreAleatoire
  citation.textContent = citations[nombreAleatoire][0];
  // on affiche l'element a l'indice 1 de la ligne correspondant à la ligne nombreAleatoire
  author.textContent = citations[nombreAleatoire][1];

  last = nombreAleatoire;

  // console.log(nombreAleatoire);
  // console.log(last);
});
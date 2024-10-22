const quizSong = [
    {
        question: "A noi ci va così, così bene che non so che cosa dire tu diresti c'est la vie",
        options:["Nitro - Pleasantville","Salmo - L'alba","Tedua - Vertigini", "Salmo - Perdonami"],
        RightAnswer: "Salmo - L'alba"
    },
    {
        question: "Quando è finita mi son detto 'Cosa vuoi che faccia?' In sta città non ce n'è una che in fondo mi piaccia.",
        options:["Madman - Baby Blue", "Lazza - 24H", "Ernia - Bella", "Ernia - Domani"],
        RightAnswer: "Ernia - Bella"
    },
    {
        question: "Faremo un pic-nic sulla mia camicia Burberry, sperando che non piova come a Carnaby",
        options:["Lazza - Re Mida", "Marracash - Scooteroni" , "Gue - Lamborghini", "Massimo Pericolo - AIRFORCE"],
        RightAnswer: "Lazza - Re Mida"
    },
    {
        question: "E' il giorno del mio matrimonio, Oggi mi sposo con Money, i soldi per me sono Dio ma per molti sono il demonio",
        options:["Gue - Milionario", "Marracash - Sport", "Gue - Lamborghini", "Emis Killa - Montecarlo"],
        RightAnswer: "Gue - Lamborghini"
    },
    {
        question: "Vorrei che i miei giorni durassero 48 ore perche non mi bastano più la metà",
        options:["Gue - 25 ore", "Izi - 48H", "Rkomi - 180","Lazza - 24H"],
        RightAnswer: "Izi - 48H"
    },
    {
        question: "Per non farmi legare il legale consiglia negare il legame illegale",
        options:["Fabri Fibra - Il rap nel mio paese", "Ensi - Mamma diceva","Marracash - Salvador Dalì","DPG - British"],
        RightAnswer: "Marracash - Salvador Dalì"
    },
    {
        question: "Io sono diverso, ancora senza freni innamorato dell'eccesso",
        options:["Gemitaiz - Un giro con noi","Gemitaiz - Diverso","Tony Effe - Diverso", "Geolier - Queen"],
        RightAnswer: "Gemitaiz - Diverso"
    },
    {
        question: "Saremo ricchi, ricchi per sempre, o forse no vabbè fa niente",
        options:["Sfera Ebbasta - Ricchi x sempre","Ghali - Ricchi dentro","Sfera Ebbasta - Cupido","DPG - Fiori del male"],
        RightAnswer: "Sfera Ebbasta - Ricchi x sempre"
    },
    {
        question: "Ciao Amore, non piangere ti mando un bacio, scusami  ma a raggiungerti non ce la faccio lo sai com'è fatta Roma col traffico",
        options:["Gemitaiz - Senza di me","Chiello - Acqua Salata", "Madman - Centro", "Nayt - Cosa conta davvero"],
        RightAnswer: "Gemitaiz - Senza di me"
    },
    { // #10
        question: "Io non vado a dormire prima delle tre, poi mi sveglio e mi chiedo il sole dov'è?",
        options:["Sfera Ebbasta -  BRNBQ", "Rkomi - Nuovo Range", "Ghali - Happy Days", "Rkomi - Milano Bachata"],
        RightAnswer: "Ghali - Happy Days"
    },
    {
        question: "La storia è questa, non ti resta che fare il critico, Non sei riuscito mai a fare l'artista",
        options:["Gue - Voodoo", "Fabri Fibra - Vip in trip", "Madman - Kournikova", "Lazza - DDA"],
        RightAnswer: "Gue - Voodoo"
    },
    {
        question: "Federico, mi guardi su Wikipedia se sotto la voce di 'Rapper superfighissimo' c'è la mia faccia?",
        options:["Fabri Fibra - Tranne te","Fabri Fibra - Vip in trip", "Marracash - Nulla accade", "Fabri Fibra - Controcultura"],
        RightAnswer: "Fabri Fibra - Vip in trip"
    },
    {
        question: "Baby con te ho fatto centro, amo il tuo look e il tuo accento, chiedimi tutto lo accetto",
        options:["Coez - Taciturnal", "Lazza - Netflix", "Gemitaiz - Forte", "Madman - Centro"],
        RightAnswer: "Madman - Centro"
    },
    {
        question: "Ma poi queste tipe si innamorano, dice 'dormiamo insieme' dico 'ancora no'",
        options:["Salmo - Lunedi", "Gemitaiz - Toradol", "Bresh - Angelina Jolie", "Neima Ezza - Casa"],
        RightAnswer: "Gemitaiz - Toradol"
    },
    {
        question: "Sei solo tu qullo che ho, l'unica droga a cui non ho saputo dire no",
        options:["Izi - Chic", "Gue - Eravamo re", "Capo Plaza - Non fare così", "Emis Killa - Fuoco e benzina"],
        RightAnswer: "Emis Killa - Fuoco e benzina"
    },
    {
        question: "Mamma me chiamme e nun rispongo, dice 'Addò staje?', nun m'arricordo",
        options:["Geolier - Como te", "Luché - Non abbiamo età", "Emis Killa - Adios", "MV Killa - Luntan a me"],
        RightAnswer: "Geolier - Como te"
    },
    {
        question: "A volte penso che, il freddo dentro me sia quello che mi rende vivo",
        options:["Il tre - Te lo prometto", "Nayt - Quando non ci crede nessuno", "Nitro - Ho fatto bene", "Nitro - Rotten"],
        RightAnswer: "Nitro - Ho fatto bene"
    },
    {
        question: "E come ti va? come vuoi che vada? Passato un'altro inverno ancora sogno che il governo cada",
        options: ["Fabri Fibra - Alieno", "Noyz Narcos - Mic Check", "Salmo - Ordinaria Follia", "Mostro - Strike"],
        RightAnswer: "Salmo - Ordinaria Follia"
    },
    {
        question: "A volte penso che voglia piovere solo su di me, tengo tutto il peso del mondo sopra le spalle ma guardo e non c'è",
        options: ["Ernia - Domani", "Ernia - Paranoia mia", "Ernia - Sigarette", "Lazza - 100 messaggi"],
        RightAnswer: "Ernia - Paranoia mia"
    },
    { //#20
        question: "Lei loquace quanto audace e capricciosa, prspicace in più vorace e vanitosa, ma la notte non si piace e giace sola nel suo letto, stretto per una persona",
        options:["Madman - La mia tipa", "Izi - Niagara", "Gue - La mia ragazza è Gangsta", "Nitro - Margot"],
        RightAnswer: "Nitro - Margot"
    },
    {
        question: "Ho questo amico che, si chiama Jack e fa danni, arriva dritto dal Tennessee ma è in Italia ormai da tanti anni",
        options:["Emis Killa - Jack", "Salmo - La prima volta", "Jake la Furia - L'ultima volta", "Villabanks - Caribe"],
        RightAnswer: "Emis Killa - Jack"
    },
    {
        question: "Dico di si perche insistono, anche se insistono, no non ci vengo alla festa di questo neanche se fosse la festa di Cristo",
        options:["Nayt - Cosa conta davvero", "Massimo Pericolo - Amici", "Mostro - Un po depresso", "Tha Sup - Fuck 3x"],
        RightAnswer: "Massimo Pericolo - Amici"
    },
    {
        question: "E mi ami più di quanto mi aspettassi, nel letto aspetto l'attimo giusto, le chiavi con cui ti apro ti hanno tarpato le ali, rose ner nel bouquet",
        options:["Nayt - l'occhio della tigre", "Tedua - Wasabi 2.0", "Tedua - Circonvalley", "Rkomi - Apnea"],
        RightAnswer: "Rkomi - Apnea"
    },
    {
        question: "Sento rumori più freddi di quello che dicono quelli che ho attorno, sento l'estate finire nel mezzo di un bacio una notte di agosto",
        options:["Fulmini/il fu Venerus - Venerus", "Chiello - Acqua salata", "Jesus - Gemitaiz","Solo un Uomo - Mace"],
        RightAnswer: "Fulmini/il fu Venerus - Venerus"
    },
    {
        question: "Ce la farò a dimenticarti ma per ora no, ti ho cancellata solamente dal telefono quanto è difficile ignorarti solo io lo so, sono all'inferno e tu sei un angelo al citofono",
        options: ["Emis Killa - soli(Assieme)", "Club Dogo - P.E.S.", "Emis Killa - Parole di ghiaccio", "Emis Killa - Fuoco e benzina"],
        RightAnswer: "Emis Killa - soli(Assieme)"
    },
    { // <3
        question: "Vorrei, una villa per noi almeno se lititghiamo ti prendi il secondo piano, sul tetto del mondo ci dondoliamo in fondo ti amo non l'ho detto mai ma quando ridiamo quanto rimiamo io e te",
        options:["Panamera - NDG", "Nayt - Da Zero", "Massimo Pericolo - Sabbie d'oro", "Salmo Faraway"],
        RightAnswer: "Nayt - Da Zero"
    },
    {
        question: "Non vedi che sono verde, fumo Namecc, scusami Dende la squadra è in attacco, qua nessuno difende ",
        options: ["Ghali - Dende", "Ghali - Cara Italia", "Izi - Pasta e Molliche", "Free - Gue"],
        RightAnswer: "Ghali - Dende"
    },
    {
        question: "No sai che c'è? C'ho il compleanno di mia madre, scusa padre, non penso riuscirò a passare scusa frate",
        options: ["Nayt - Cose che non vuoi sentirti dire", "Nayt - Sorpresa", "Mostro - Un'po depresso", "Nitro - Without you"],
        RightAnswer: "Mostro - Un'po depresso"
    },
    {
        question: "Sai che l'orgoglio è il mio grande difetto di cui mi vergogno e poi parte il rigetto, Poi quando dormo non sai cosa sogno se non dimostro bisogno d'affetto",
        options: ["Enigma - Paracadute", "Nitro - San Junipero II", "Paky - Tuta Black", "Nitro - San Junipero I"],
        RightAnswer: "Nitro - San Junipero I"
    },
    { //#30
        question: "Sto contando cosi tanto che le impronte digitali stanno scomparendo, un mio fratello è stato gambizzato e la vendetta fra è il primo comandamento",
        options: ["Gemitaiz - Codice pin", "Luché - Voodoo", "Coco - Voodoo", "Gemitaiz - Voodoo"],
        RightAnswer: "Luché - Voodoo"
    },
    {
        question: "Io con te non rispetto le convenzioni, non accetto le correzioni, Mi faccio male, mi lascio andare senza protezioni mano nella mano, senza mai cascare su nel piano astrale come proiezioni",
        options:["Madman - Non esiste", "Madman - Blue Sky", "MACE - Sogni lucidi", "Priestess - Andromeda"],
        RightAnswer: "Madman - Non esiste"
    },
    {
        question: "Senza soldi in tasca nessuno fa quello che vuole, con i soldi in tasca trovi sempre la soluzione",
        options: ["Sfera Ebbasta - Uh Ah Hey", "Izi - tutto apposto", "Lazza- Gigolò", "Sfera Ebbasta - Gelosi"],
        RightAnswer: "Sfera Ebbasta - Uh Ah Hey"
    },
    {
        question: "Avessi messo nel mio credo un'po di meno del mio ego, forse avrei il cuore in cemento e non di vetro",
        options: ["Massimo Pericolo - BREBBIA 2012", "Massimo Pericolo - 7 miliardi", "Nitro - Storia di un presunto artista", "Nitro - Storia di un defunto artista"],
        RightAnswer: "Nitro - Storia di un defunto artista"
    },
    {
        question: "Prima dicevi: 'Sei unica' ora ti stanchi se non si comunica",
        options: ["Tedua - Beatrice", "Madame - Dimmi ora", "Marracash - Quelli che non pensano", "Samurai Jay - Bye Bye"],
        RightAnswer: "Madame - Dimmi ora"
    },
    {
        question: " E vorrei, dirti quello a cui penso, ma quello che ho dentro terrorrizza anche me",
        options: ["Sfera Ebbasta - Male", "Izi - Fumo da solo", "Silent Bob - Vedova Nera", "Silent Bob - I miei ciò"],
        RightAnswer: "Silent Bob - Vedova Nera"
    },
    {
        question: "Ho scritto almeno 20 dischi per sedarmi, porto l'esercito dei tristi, Sad Army",
        options: ["Jesto - Felice", "Sercho - Vaffanculo", "Emis Killa - La mia malattia", "Axos - La pluie"],
        RightAnswer: "Axos - La pluie"
    },
    {
        question: "Mi chiedo sempre quando imparerai, a dare tutto a chi ti ha dato mai",
        options: ["Salmo - Giuda", "Ensi - Mamma diceva", "Gue - Too old to die young", "Gemitaiz - Il primo"],
        RightAnswer: "Ensi - Mamma diceva"
    },
    {
        question: "Mi capita di stare anche peggio, ma di che parli? Parlo da solo, dovrei preoccuparmi?",
        options: ["Salmo - Il senso dell'odio", "Salmo - Venice Beach", "Salmo - Yoko-Ono", "salmo - La prima volta"],
        RightAnswer: "Salmo - Il senso dell'odio"
    },
    {
        question: "E vedi sempre nei miei occhi la malinconia, ma mi sa che sta volta la colpa è mia",
        options: ["Marracash - Purdi", "Ketama - Angeli Caduti", "Nitro - Storia di un presunto artista", "Nitro - Storia di un defunto artista"],
        RightAnswer: "Nitro - Storia di un defunto artista"
    },
    { // #40
        question: "Scusa ma non me la sento, dopo questo giro scendo, io sono esattamente quello che sembro fuori c'è il sole ma piove dentroo",
        options: ["Gue - In orbita", "Salmo - Lunedì", "Salmo - Salmo 23", "Gue - Trentuno giorni"],
        RightAnswer: "Salmo - Salmo 23"
    },
    {
        question: "La testa che non ragiona, la city che mi imprigiona, la sensazione, malinconia, tentazione che non va vis",
        options: ["Gue - Fuori orario", "Coez - Fuori orario", "Gue - Signora", "Gue - Squalo"],
        RightAnswer: "Gue - Fuori orario"
    },
    {
        question: "Sui social medicine, fucili e mitragliatrici, ma il tuo scopo sulla terra è fare ridere i miei amici",
        options: ["Nayt - Fame", "Ensi - Noi", "Nerone - Oh yes", "Nayt - OPSS"],
        RightAnswer: "Nerone - Oh yes"
    }

];

let currentQuestion = 0;
let score = 0;
const maxQuestions = 10;
let selectedQuestions = []

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');


function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectRandomQuestions() {
    selectedQuestions = ShuffleArray([...quizSong]).slice(0, maxQuestions);
}

function loadQuestion() {
    if (currentQuestion >= selectedQuestions.length) {
        displayFinalMessage();
        return;
    }
    const currentQuestionObj = selectedQuestions[currentQuestion];

    questionElement.textContent = currentQuestionObj.question;

    optionsElement.innerHTML = '';


    currentQuestionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
        });
}


function checkAnswer(answer) {
    const currentQuestionObj = selectedQuestions[currentQuestion];
    const buttons = optionsElement.querySelectorAll('button');

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestionObj.RightAnswer){
            button.classList.add('correct');
        } else if (button.textContent === answer){
            button.classList.add('wrong');
        }
    });

    if (answer === currentQuestionObj.RightAnswer) {
        score++;
        resultElement.textContent = 'Correct! Your score is: '+ score;
        /*setTimeout(() => {
            resultElement.textContent = '';
        }, 3000); */
    } else {
        resultElement.textContent = 'Wrong! The correct answer was: '+ currentQuestionObj.RightAnswer;
        /*setTimeout(() => {
            resultElement.textContent = '';
        }, 3000); */
    }
    currentQuestion++;
    setTimeout(loadQuestion, 2000);

    /* if (currentQuestion < quizSong.length){
        setTimeout(loadQuestion, 1000);
    } else {
        displayFinalMessage()
    } */

}

function displayFinalMessage(){
    optionsElement.innerHTML = ''; // rimuove le opzionip per presentare il messaggio finale

    let finalMessage = '';
    let spotifyLink = '';
    let scoreClass= '';

    const percentage = (score / selectedQuestions.length) * 100;

    if (percentage < 50) {
        finalMessage = `Game over! Your final score is ${score}. Better luck next time`;
        spotifyLink = '<a href="https://open.spotify.com/playlist/6vwqf5dU6oBUCSYdIOMU4n?si=05f4d6077b194ef9" target="_blank"> You can study for the quiz here!</a>';
        scoreClass = 'score-red'
    } else if (percentage  > 50 && percentage < 70) {
        finalMessage = `Congratulations! Your final score is ${score}. You did well!`;
        spotifyLink = '<a href="https://open.spotify.com/playlist/6vwqf5dU6oBUCSYdIOMU4n?si=05f4d6077b194ef9" target="_blank"> If you liked the test, this is for you!</a>';
        scoreClass = 'score-orange'
    } else {
        finalMessage = `Congratulations! Your final score is ${score}. You did very well!`;
        spotifyLink = '<a href="https://open.spotify.com/playlist/6vwqf5dU6oBUCSYdIOMU4n?si=05f4d6077b194ef9" target="_blank"> If you liked the test, this is for you!</a>';
        scoreClass = 'score-green'
    }


    resultElement.innerHTML =  `
        <p>${finalMessage}</p> 
        <p class="final-score ${scoreClass}">${score}</p>
        <p>${spotifyLink}</p>
     ` ;
}

function restartQuiz(){
    currentQuestion = 0;
    score = 0;
    resultElement.textContent = '';
    optionsElement.innerHTML = '';
    selectRandomQuestions();
    loadQuestion();
}

selectRandomQuestions();
loadQuestion();


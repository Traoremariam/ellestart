let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Salut,je suis koffi,et toi comment t'appel tu?"];
let help = ["","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["Veux jouer avec moi?", "Viens jouer avec"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Je n'ai pas compris.Vous pouvez aussi cliquer sur le bouton qui contient le texte en noir pour continuer.";
    if (message.split(" ").includes("mathématiques")) {
        let finalresult =  "Allons y pour les mathématiques";
        speech.text = finalresult;
        window.location.replace("q3.php");
    }
    if (message.split(" ").includes("OK")) {
        let finalresult =  "Allons pour ton orientation";
        speech.text = finalresult;
        window.location.replace("cible.html");
    }
    if (message.split(" ").includes("Ok")) {
        let finalresult =  "Allons pour ton orientation";
        speech.text = finalresult;
        window.location.replace("cible.html");
    }
    if (message.split(" ").includes("ok")) {
        let finalresult =  "Allons pour ton orientation";
        speech.text = finalresult;
        window.location.replace("cible.html");
    }
    if (message.split(" ").includes("Ok")) {
        let finalresult =  "Allons pour ton orientation";
        speech.text = finalresult;
        window.location.replace("cible.html");
    }
    if (message.split(" ").includes("apprendre")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("emploi")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("Emploi")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("Orientation")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("orientation")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("Apprendre")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("apprendre")) {
        let finalresult =  "Tu dois faire des tests pour la suite";
        speech.text = finalresult;
        window.location.replace("orientation.html");
    }
    if (message.split(" ").includes("oui")) {
        let finalresult =  "Comme tu veux apprendre allons pour le test de personnalité";
        speech.text = finalresult;
        window.location.replace("./dash/form-step.html");
    }
   
    if (message.split(" ").includes("Je veux des informations")) {
        let finalresult =  "Allons y pour les français";
        speech.text = finalresult;
        window.location.replace("cible.html");
    }
    if (message.split(" ").includes("m'appelle")) {
        const prenom = message.split(" ");
        const taill = prenom.length;
        let finalresult =  "tu as un jolie prénom " + prenom[taill-1] + ". Veux tu faire les Mathématiques ou le Français ?";
        speech.text = finalresult;
    }
    if(message.split(" ").includes('Salut')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.split(" ").includes( 'Bonjour' )){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes( 'Bonjour' )){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    console.log( transcript);
    chatbotvoice(transcript);
    console.log( transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})

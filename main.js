function randomTxt() {
    var AuthoeOfQuote = ["― Martin Luther King", "― Robert Frost","― Ralph Waldo Emerson","― Albert Einstein","― Steve Jobs","― Narcotics Anonymous"];


    var TxtOfQuote = ["““Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”", "“In three words I can sum up everything I've learned about life: it goes on.”", "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently.","“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them"];

    var num = Math.floor(Math.random()*AuthoeOfQuote.length);
    document.getElementById("AuthoeOfQuote").innerHTML=(AuthoeOfQuote[num]);
    document.getElementById("TxtOfQuote").innerHTML=(TxtOfQuote[num]);
   
}
randomTxt();


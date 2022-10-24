var salis = ["Danija", "Dominikos Respublika", "Dramblio Kaulo Krantas", "Džersis", "Džibutis"]
var plotas = [42933, 48730, 322460, 116, 23000]
var gyventojai = [5873420, 10766564, 23815886, 98469, 911382]

var salys = [
    {salis: "Danija", plotas: 42933, gyventojai: 5873420},
    {salis: "Dominikos Respublika", plotas: 48730, gyventojai: 10766564},
    {salis: "Dramblio Kaulo Krantas", plotas: 322460, gyventojai: 23815886},
    {salis: "Džersis", plotas: 116, gyventojai: 98469},
    {salis: "Džibutis", plotas: 23000, gyventojai: 911382}
];

  for(var x of salys){
    plotasVienamGyventojui(x.salis, x.plotas, x.gyventojai)
  }
    

function plotasVienamGyventojui(salis, plotas, gyventojai){
    var plotasVienamGyventojui = plotas*1000000/gyventojai
    var gyventojaiMln = gyventojai/1000000
    
    // Console
        console.log("Šalis: " + salis + ", joje gyvena " + gyventojaiMln.toFixed(2) + " mln. gyventojų. Valstybės plotas: " + plotas.toFixed(0) + " km², plotas tenkantis vienam gyventojui: " + plotasVienamGyventojui.toFixed(2) + " m².") 

    }
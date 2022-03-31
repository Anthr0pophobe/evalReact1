import React from 'react'

function Exo2() {

    const formation = [];
    formation.push('js');
    formation.unshift('react');
    formation.splice((formation.length/2),0, 'angular');

    const data = ['lorem','ipsum','dolor'];
    data.splice(0, 1, 'bonjour');
    console.log(data);
    console.log(data.filter((elem, index) =>{
        if(index > 0) return elem;
    }));

    const panier = [
        { id: 1, nom: 'switch', prix: 100, qte: 2 },
        { id: 2, nom: 'PS5', prix: 300, qte: 1 },
        { id: 3, nom: 'RTX3090', prix: 300, qte: 1 },
    ];

    // panier.map((console) => (
    //     '<li>' + console.nom + ' - ' + console.prix + ' - ' + console.qte + '</li>'
    // ))

  return (
    <div>
        {panier.map((console) => {
            return (<li key={console.id}>{`${console.nom}`}</li>)
        }
       
    )}
    </div>
  )
}

export default Exo2
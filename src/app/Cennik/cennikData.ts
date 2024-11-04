
const treningi = [{
    rodzaj: "12 Treningów",
    cena: "1020zł"
}, {
    rodzaj: "8 Treningów",
    cena: "720zł"
}, {
    rodzaj: "4 Treningi",
    cena: "400zł"
}, {
    rodzaj: "Pojedyńczy Trening",
    cena: "120zł"
}, {
    rodzaj: "Podwójny - Koleżeński",
    cena: "160zł"
}, {
    rodzaj: "2 Osoby 4 Treningi",
    cena: "260zł"
}, {
    rodzaj: "2 Osoby 8 Treningów",
    cena: "480zł"
}, {
    rodzaj: "3 Osoby 4 Treningi",
    cena: "220zł"
}, {
    rodzaj: "3 Osoby 8 Treningów",
    cena: "400zł"
}
]

const silownia = [{
    rodzaj: "Pojedyńcze wejście",
    cena: "40zł"
}, {
    rodzaj: "Open",
    cena: "200zł"
}, {
    rodzaj: "Open Roczny",
    cena: "2160zł"
}, {
    rodzaj: "Open Półroczny",
    cena: "1140zł"
}, {
    rodzaj: "Lady Open",
    cena: "170zł"
}, {
    rodzaj: "Morning Open",
    cena: "170zł"
}, {
    rodzaj: "Student Open",
    cena: "160zł"
}, {
    rodzaj: "Junior Open",
    cena: "140zł"
}, {
    rodzaj: "Senior Open",
    cena: "150zł"
}, {
    rodzaj: "Dla Pary",
    cena: "350zł"
}, {
    rodzaj: "Junior z Tatą",
    cena: "320zł"
}, {
    rodzaj: "Junior z Mamą",
    cena: "290zł"
}, {
    rodzaj: "12 Wejść",
    cena: "180zł"
}, {
    rodzaj: "8 Wejść",
    cena: "140zł"
}, {
    rodzaj: "4 Wejścia",
    cena: "100zł"
}

]

const fitness = [{
    rodzaj: "Open miesięczny",
    cena: "170zł"
}, {
    rodzaj: "4 Wejścia",
    cena: "90zł"
}, {
    rodzaj: "Fit & Gym Open",
    cena: "200zł"
}
]
    const mobility = [{
        rodzaj: "8 Wejść",
        cena: "170zł"
    }, {
        rodzaj: "4 Wejścia",
        cena: "90zł"
    }
    ]
    const boks = [{
        rodzaj: "Pojedynczy trening (Trener Senior)",
        cena: "120zł"
    }, {
        rodzaj: "Pojedynczy trening (Trener Junior)",
        cena: "100zł"
    }, {
        rodzaj: "Pakiet 8 Treningów (Trener Junior)",
        cena: "720zł"
    }, {
        rodzaj: "Trening 2 osobowy (Trener Junior)",
        cena: "150zł"
    }, {
        rodzaj: "Trening 2 osobowy (Trener Senior)",
        cena: "180zł"
    }
    ]

function getTrening(){
    return(  
        treningi  
)
}

function getSilownia(){
    return(
        silownia
    )
}

function getFitness(){
    return(
        fitness 
    )
}

function getMobility(){
    return(
        mobility
    )
}

function getBoks(){
    return(
        boks
    )
}

export default function cennik(){
    return(
        {
            getSilownia,
            getTrening,
            getFitness,
            getMobility,
            getBoks
        }
    )
}
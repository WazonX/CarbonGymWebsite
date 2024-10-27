import React from "react";
import Link from "next/link";

export default function Footer(){
    return(
        <React.Fragment>
            <div className="contentBg container rounded-top foot text-center pt-2">
                <div className="w-100 mx-auto">
                    <Link  href={{pathname: '/',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        Home
                    </Link>
                    <Link  href={{pathname: '/ONas',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        O nas
                    </Link>
                    <Link  href={{pathname: '/Regulamin',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        Regulamin
                    </Link>
                    <Link  href={{pathname: '/Kontakt',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        Kontakt
                    </Link>
                    <Link  href={{pathname: '/Cennik',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        Cennik
                    </Link>
                    <Link  href={{pathname: '/Grafik',}} className="text-white footLink  centerText text-uppercase btn-link ">
                        Grafik
                    </Link>
                    <Link  href={{pathname: '/Galeria',}} className="text-white footLink  centerText text-uppercase btn-link ">
                         Galeria
                    </Link>
                </div>
                <div className="row">
                        <p className="col mx-auto mt-3 text-white footLink">
                            © CarbonGym by Michał Adach 2024
                        </p>
                </div>
                <p className="row col mx-auto credit text-white footLink">
                    Projekt i wykonanie strony: Maksymilian Gembarzewski
                </p>
            </div>
        </React.Fragment>
    )
}
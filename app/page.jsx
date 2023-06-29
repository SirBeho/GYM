import Image from "next/image"
import "../components/watch/watch.css"
import Watch_model from "../components/watch/watch_model"
import Link from "next/link"


export default function Home() {
    return (
        <div>
            <section id="wtc_adventure">
                <div id="wtc_adventure_box">
                    <div id="wtc_logo">
                        <div id="wtc_adventure_img00">
                            <Image src="/img_watch/logo_gym.png" width={"15"} height={"15"} layout="responsive" />
                        </div>
                        <span>FitnesGYM</span>
                    </div>
                    <span style={{ color: "rgb(255, 104, 31)", fontWeight: "700" }}>!Ven, y Haste parte del cambio</span>
        
                    
                    <div>
                        <button id="btn_buy">Call</button>
                        <span style={{ color: "rgb(0, 119, 237)", }}>Learn more  </span>
                    </div>
                </div>
                <div className="w-75">
                    <Image src="/img_watch/foto1.jpg" alt="relojes_tres" width={"1200"} height={"500"} layout="responsive" />
                </div>

            </section>
            <section id="wtc_series">
                <div id="wtc_series_img00">
                    <Image src="/img_watch/descarga.jpg" alt="doblereloj" width={"1000"} height={"1000"} layout="responsive" />
                </div>
                <div id="wtc_series_box">
                    <div id="wtc_logo">
                       
                        <span style={{ color: "white", }}>FITNESS ELITE</span>
                    </div>
                    <span style={{ color: "rgb(255, 104, 31)", fontWeight: "700" }}>SERIES 8</span>
                    <span style={{ color: "white", fontSize: "45px", fontWeight: "700" }}>A healtly leap ahead.</span>
                    <span style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>From $399</span>
                    <button id="btn_buy">Buy</button>
                    <div>
                        <span style={{ color: "rgb(0, 119, 237)", }}>Learn more  </span>
                        <span style={{ color: "rgb(0, 119, 237)", }}>Watch the film</span>
                    </div>
                </div>

            </section>
        </div>
    )
} 
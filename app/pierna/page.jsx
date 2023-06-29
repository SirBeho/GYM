import Image from "next/image"
import "../../components/watch/watch.css"

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
                    
                </div>
                <div className="w-75">
                    <Image src="/img_watch/rutina1.jpg" alt="relojes_tres" width={"1200"} height={"500"} layout="responsive" />
                </div>

            </section>
          
        </div>
    )
} 
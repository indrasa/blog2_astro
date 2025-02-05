import { useState } from "preact/hooks";

export default function Greeting({pesan}) {
    const randomMessage = () => pesan[(Math.floor(Math.random() * pesan.length))];

    const [ greeting, setGreeting ] = useState(pesan[0]);

    return (
        <div>
            <h3>{greeting}! Terima kasih telah berkunjung</h3>
            <button onClick={() => setGreeting(randomMessage())}>Pesan Sambutan Baru</button>
        </div>
    );
}
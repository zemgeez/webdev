import { TypeAnimation } from 'react-type-animation';

interface AniProps {
    text: string[];
}

export default function Ani({ text }: AniProps) {
    const sequence = text.flatMap((item, index) => [item, 1000]);

    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4em', display: 'inline-block', color: 'black' }}
            repeat={Infinity}
        />
    );
}
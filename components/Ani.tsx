import { TypeAnimation } from 'react-type-animation';
export default function Ani() {
    return (
        
        <TypeAnimation
            sequence={[
                'Development is Nature',
                1000,
                'Development is Future',
                1000,
                'Development is Life',
                1000,
                'We are NIT Silchar',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4em', display: 'inline-block', color: 'black' }}
            repeat={Infinity}
        />
                                
    )
}